import React, { useEffect } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import { StateTypes } from '../../types';
import { setUser } from '../../store/reducers/common/userSingleReducer';
import Loading from '../Loading';

type Props = {
    userUrl: string;
};

const User = ({ match }: RouteComponentProps<Props>) => {
    const user = useSelector((state: StateTypes) => state.userSingle.data);
    const isLoading = useSelector((state: StateTypes) => state.userSingle.loading);
    const dispatch = useDispatch();

    const getUsers = (): void => {
        const url = match.params.userUrl;

        axios
            .get(`https://api.github.com/users/${url}`)
            .then(response => {
                dispatch(setUser(response.data));
                console.log(isLoading);
            })
            .catch(error => {
                alert(error);
            });
    };

    useEffect(() => {
        getUsers();
    }, [isLoading]);
    return (
        <div className="user">
            {isLoading ? (
                <div>
                    <>
                        {console.log(user)}
                        {user.map(
                            ({ avatar_url, name, followers, following, created_at, company, email, bio, location }) => (
                                <div className="user__wrap">
                                    <figure className="user__icon-wrap">
                                        {avatar_url ? (
                                            <img className="user__icon" src={avatar_url} alt="user" />
                                        ) : (
                                            <div className="user__default-icon">No photo</div>
                                        )}
                                    </figure>
                                    <h2 className="user__name">{name}</h2>
                                    <p className="user__info">followers: {followers}</p>
                                    <p className="user__info">following: {following}</p>
                                    <p className="user__info">create: {created_at}</p>
                                    <p className="user__info">company: {company}</p>
                                    {!!email && <p className="user__info">email: {email}</p>}
                                    {!!bio && <p className="user__info">bio: {bio}</p>}
                                    <p className="user__info">location: {location}</p>
                                </div>
                            ),
                        )}
                    </>
                </div>
            ) : (
                <>
                    <Loading />
                </>
            )}
        </div>
    );
};

export default withRouter(User);
