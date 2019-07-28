import React from 'react';
import PropTypes from 'prop-types';

import './Pagination.scss';

class Pagination extends React.Component {

  state = {
    presentPage: this.props.initialPage || 1
  }
  
  render() { 
    const { pages } = this.props;	
    const { presentPage } = this.state;
    const { changePage } = this;

    return (
      <div className="pagination">
        <ul className="pagination__list">
		
		  { presentPage > 1 ? <li key="less"
		    onClick={() => { changePage(presentPage - 1) }}><a className="pagination__list__item">&lt;</a></li> : null}
          {[...Array(pages)].map((el, page) =>
            <li
              key={++page}
              onClick={() => { changePage(page) }}
              className={`pagination__list__item${((page) === presentPage) ? ' pagination__list__item--active' : ''}`}>
              {page}
            </li>
          )}
		   
		  { presentPage < pages ?   <li key="more"
            onClick={() => { changePage(presentPage + 1) }}><a className="pagination__list__item">&gt;</a></li> : null}
        </ul>
      </div>
    );
  }

  changePage = (newPage) => {
    const { onPageChange } = this.props;

    this.setState({ presentPage: newPage });
    onPageChange(newPage);
  }
}




Pagination.propTypes = {
  pages: PropTypes.number.isRequired,
  initialPage: PropTypes.number,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;