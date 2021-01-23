import React, { useEffect } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import { setUser } from '../../store/reducers/common/userSingleReducer';
import Loading from '../Loading';

import { StateTypes } from '../../types';

type UserPropsType = {
    userUrl: string;
};

const User = ({ match }: RouteComponentProps<UserPropsType>) => {
    const user = useSelector((state: StateTypes) => state.userSingle.data);
    const isLoading = useSelector((state: StateTypes) => state.userSingle.isLoading);
    const dispatch = useDispatch();

    const toDate = (date: string) => {
        const newDate = new Date(date);
        const month = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ];

        return `${newDate.getFullYear()} ${month[newDate.getMonth()]} ${newDate.getDate()}`;
    };

    const getUser = (): void => {
        const url = match.params.userUrl;

        axios.get(`https://api.github.com/users/${url}`).then(response => {
            dispatch(setUser(response.data));
        });
    };

    useEffect(() => {
        getUser();
    }, [isLoading]);

    return (
        <div className="user">
            {isLoading ? (
                <div>
                    {user.map(
                        ({ avatar_url, name, followers, following, created_at, company, email, bio, location, id }) => (
                            <div key={id} className="user__wrap">
                                <figure className="user__icon-wrap">
                                    {avatar_url ? (
                                        <img className="user__icon" src={avatar_url} alt="user" />
                                    ) : (
                                        <div className="user__default-icon">No photo</div>
                                    )}
                                </figure>
                                <h2 className="user__name">{name}</h2>
                                <p className="user__info">
                                    <span>followers:</span> {followers}
                                </p>
                                <p className="user__info">
                                    <span>following:</span> {following}
                                </p>
                                <p className="user__info">
                                    <span>create:</span> {toDate(created_at)}
                                </p>
                                {company && (
                                    <p className="user__info">
                                        <span>company:</span> {company}
                                    </p>
                                )}
                                {!!email && (
                                    <p className="user__info">
                                        <span>email:</span> {email}
                                    </p>
                                )}
                                {!!bio && (
                                    <p className="user__info">
                                        <span>bio:</span> {bio}
                                    </p>
                                )}
                                <p className="user__info">
                                    <span>location:</span> {location}
                                </p>
                            </div>
                        ),
                    )}
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