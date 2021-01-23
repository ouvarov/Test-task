import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import { setUsersList } from '../../store/reducers/common/usersListReducer';
import { StateTypes } from '../../types';
import Loading from '../Loading';

const UsersList: React.FunctionComponent = () => {
    const users = useSelector((state: StateTypes) => state.usersList.data);
    const isLoading = useSelector((state: StateTypes) => state.usersList.loading);
    const dispatch = useDispatch();
    const [page, setPage] = useState<number>(1);

    const getUsers = (): void => {
        axios
            .get(`https://api.github.com/users?page=${page}`)
            .then(response => {
                dispatch(setUsersList(response.data));
            })
            .catch(error => {
                alert(error);
            });
    };

    useEffect(() => {
        getUsers();
    }, [page]);

    return (
        <div className="user-list">
            {isLoading ? (
                <div className="user-list__wrap">
                    {users.map(({ html_url, login, id, avatar_url }) => (
                        <div className="user-list__item" key={id}>
                            <Link className="user-list__link" to={`/user/${login}`}>
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
        </div>
    );
};

export default UsersList;
