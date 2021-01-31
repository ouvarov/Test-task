import React from 'react';
import { Link } from 'react-router-dom';

const Pagination: React.FunctionComponent = () => {
    const pagination = Array.from({ length: 10 }, (_, idx) => idx);

    return (
        <div className="pagination">
            {pagination.map(item => (
                <Link key={item} className="pagination__item" rel="noopener" to={`/users-list/${item}`}>
                    {item + 1}
                </Link>
            ))}
        </div>
    );
};

export default Pagination;
