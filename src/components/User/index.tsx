import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import Loading from '../Loading';

import { StateTypes } from '../../types';
import toDate from '../../helpers/toDate';
import { setUser, clearUser } from '../../store/actions';

const User: React.FC = () => {
    const user = useSelector((state: StateTypes) => state.userSingle.data);
    const isLoading = useSelector((state: StateTypes) => state.userSingle.isLoading);
    const dispatch = useDispatch();
    const { userUrl } = useParams<Record<string, string | undefined>>();

    const getUser = (): void => {
        axios.get(`https://api.github.com/users/${userUrl}`).then(response => {
            dispatch(setUser(response.data));
        });
    };

    useEffect(() => {
        getUser();
    }, []);

    useEffect(
        () => () => {
            dispatch(clearUser());
        },
        [],
    );

    return (
        <div className="user">
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    {!!user && (
                        <div className="user__wrap">
                            <figure className="user__icon-wrap">
                                {user.avatar_url ? (
                                    <img className="user__icon" src={user.avatar_url} alt="user" />
                                ) : (
                                    <div className="user__default-icon">No photo</div>
                                )}
                            </figure>
                            <h2 className="user__name">{user.name}</h2>
                            <p className="user__info">
                                <span>followers:</span> {user.followers}
                            </p>
                            <p className="user__info">
                                <span>following:</span> {user.following}
                            </p>
                            <p className="user__info">
                                <span>create:</span> {toDate(user.created_at)}
                            </p>
                            {user.company && (
                                <p className="user__info">
                                    <span>company:</span> {user.company}
                                </p>
                            )}
                            {user.email && (
                                <p className="user__info">
                                    <span>email:</span> {user.email}
                                </p>
                            )}
                            {user.bio && (
                                <p className="user__info">
                                    <span>bio:</span> {user.bio}
                                </p>
                            )}
                            {user.location && (
                                <p className="user__info">
                                    <span>location:</span> {user.location}
                                </p>
                            )}
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default User;
