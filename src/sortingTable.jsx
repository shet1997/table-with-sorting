import React, { Component } from 'react';
import example from './example.json';
import _ from 'lodash';
import Pages from './component/pages';
import {Paginate} from './utils/paginate'
import ExampleTable from './component/exampleTable';

class SortingTable extends Component {
    state = { 
        sortcolumn: {
            path: 'title',
            order: 'asc'
        },
        currentPage: 1,
        pageSize: 20,
     }

     onSortChange = path => {
         const sortcolumn = {...this.state.sortcolumn};
         if(sortcolumn.path === path) {
             sortcolumn.order = (sortcolumn.order = "asc") ? 'desc' : 'asc';
         } else {
             sortcolumn.path = path;
             sortcolumn.order = 'asc';
         }
         this.setState({sortcolumn, currentPage: 1});
     }


     onPreviuosPageClick = curntPage => {
        this.setState({
            currentPage: (curntPage - 1)
        })
     }

     onNextPageClick = curntPage => {
        this.setState({
            currentPage: (curntPage + 1)
        })
     }

     renderSortIcon = () => {
         if(this.state.sortcolumn.order === 'asc'){
            return <i class="fa fa-long-arrow-up" aria-hidden="true"></i>
         } 
         else if(this.state.sortcolumn.order === 'desc')
         { 
            return <i class="fa fa-arrows-v" aria-hidden="true"></i>
         } 
     }

     handlePageChange = page => {
        this.setState({ currentPage: page });
     }

    render() { 
        const { sortcolumn, pageSize, currentPage } = this.state;
        const sorted = _.orderBy(example.data, [sortcolumn.path], [sortcolumn.order]);
        const totalCount = sorted.length;
        const paginatedData = Paginate(sorted, currentPage, pageSize);
        return ( 
            <React.Fragment>
                <ExampleTable
                    paginatedData={paginatedData}
                    renderSortIcon={this.renderSortIcon}
                    onSortChange={this.onSortChange}
                />
                <Pages 
                currentPage = {currentPage}
                pageSize = {pageSize}
                itemCount = {totalCount}
                onPageChange = {this.handlePageChange}
                onPreviuosPageClick = {this.onPreviuosPageClick}
                onNextPageClick = {this.onNextPageClick}
                />
            </React.Fragment>
         );
    }
}
 
export default SortingTable;
