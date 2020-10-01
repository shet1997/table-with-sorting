import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

const Pages = (props) => {
    const { currentPage, pageSize, itemCount, onPageChange, onPreviuosPageClick, onNextPageClick } = props;
    const pageCount =  Math.ceil(itemCount/pageSize);
    const pages = _.range(1, pageCount+1);
    console.log(pages.length);

    if(pages == 1) return null;

    return ( 
        <nav>
            <ul className="pagination justify-content-center">
            <li className={currentPage === 1 ? "page-item disabled" : "page-item"}>
                <a className="page-link" onClick={() => onPreviuosPageClick(currentPage)}>Previous</a>
            </li>
               {pages.map(page =>(
                    <li key={page} className={currentPage === page ? "page-item active" : "page-item"}>
                        <a className="page-link" onClick={() => onPageChange(page)}>{page}</a>
                    </li>
                ))}
            <li className={ currentPage === pages.length ? "page-item disabled" : "page-item"}>
                <a className="page-link" onClick={() => onNextPageClick(currentPage)}>Next</a>
            </li>    
            </ul>
        </nav>
     );
}

Pages.PropTypes = {
    currentPage : PropTypes.string.isRequired,
    onPreviuosPageClick : PropTypes.func.isRequired,
    onPageChange : PropTypes.func.isRequired,
    onNextPageClick : PropTypes.func.isRequired,
    pageSize : PropTypes.string.isRequired,
    itemCount : PropTypes.string.isRequired,
};
 
export default Pages;