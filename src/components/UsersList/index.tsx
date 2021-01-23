import React, { useEffect } from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import Loading from '../Loading';
import Pagination from '../Pagination';

import { setUsersList } from '../../store/reducers/common/usersListReducer';
import { StateTypes } from '../../types';

type UserListPropsType = {
    userSort: string;
};

const UsersList = ({ match }: RouteComponentProps<UserListPropsType>) => {
    const users = useSelector((state: StateTypes) => state.usersList.data);
    const isLoading = useSelector((state: StateTypes) => state.usersList.isLoading);
    const dispatch = useDispatch();
    const urlPrams = match.params.userSort;

    const getUsers = (): void => {
        const sinceUserId = Number(urlPrams) * 20;

        axios.get(`https://api.github.com/users?per_page=20&since=${sinceUserId}`).then(response => {
            dispatch(setUsersList(response.data));
        });
    };

    useEffect(() => {
        getUsers();
    }, [urlPrams]);

    return (
        <div className="user-list">
            {isLoading ? (
                <div className="user-list__wrap">
                    {users.map(({ html_url, login, id, avatar_url }) => (
                        <div className="user-list__item" key={id}>
                            <Link rel="noopener" className="user-list__link" to={`/user/${login}`}>
                                <div className="user-list__inner-wrap">
                                    <figure className="user-list__icon-wrap">
                                        {avatar_url ? (
                                            <img className="user-list__icon" src={avatar_url} alt="user" />
                                        ) : (
                                            <div className="user-list__default-icon">No photo</div>
                                        )}
                                    </figure>
                                    <div className="user-list__user-name"> {login}</div>
                                </div>
                            </Link>
                            <a className="user-list__user-link" href={html_url} rel="noreferrer" target="_blank">
                                {html_url}
                            </a>
                        </div>
                    ))}
                </div>
            ) : (
                <Loading />
            )}
            <Pagination />
        </div>
    );
};

export default withRouter(UsersList);
