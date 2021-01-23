import React from 'react';
import { Link } from 'react-router-dom';

const Pagination: React.FunctionComponent = () => (
    <div className="pagination">
        <Link className="pagination__item" rel="noopener" to="/users-list/1">
            1
        </Link>
        <Link className="pagination__item" rel="nofollow noopener" to="/users-list/2">
            2
        </Link>
        <Link className="pagination__item" rel="noopener" to="/users-list/3">
            3
        </Link>
        <Link className="pagination__item" rel="noopener" to="/users-list/4">
            4
        </Link>
        <Link className="pagination__item" rel="noopener" to="/users-list/5">
            5
        </Link>
        <Link className="pagination__item" rel="noopener" to="/users-list/6">
            6
        </Link>
        <Link className="pagination__item" rel="noopener" to="/users-list/7">
            7
        </Link>
        <Link className="pagination__item" rel="noopener" to="/users-list/8">
            8
        </Link>
        <Link className="pagination__item" rel="noopener" to="/users-list/9">
            9
        </Link>
        <Link className="pagination__item" rel="noopener" to="/users-list/10">
            10
        </Link>
    </div>
);

export default Pagination;
