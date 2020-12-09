import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit';

const {SearchBar} = Search;

const customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">
    Showing {from} to {to} of {size} Results
  </span>
);

const columns = [
    {
        dataField: 'id',
        text: 'ID',
        sort: true
    },
    {
        dataField: 'name',
        text: 'Name',
        sort: true
    },
    {
        dataField: 'type',
        text: 'Type',
        sort: true
    },
    {
        dataField: 'mode',
        text: 'Mode',
        sort: true
    },
    {
        dataField: 'destination',
        text: 'Destination',
        sort: true
    },
    {
        dataField: 'origin',
        text: 'Origin',
        sort: true
    },
    {
        dataField: 'status',
        text: 'Status',
        sort: true
    }
];

export default function Table({tableData = []}) {

    const options = {
        paginationSize: 4,
        pageStartIndex: 0,
        firstPageText: 'First',
        prePageText: 'Back',
        nextPageText: 'Next',
        lastPageText: 'Last',
        nextPageTitle: 'First page',
        prePageTitle: 'Pre page',
        firstPageTitle: 'Next page',
        lastPageTitle: 'Last page',
        showTotal: true,
        paginationTotalRenderer: customTotal,
        disablePageTitle: true,
        sizePerPageList: [{
            text: '5', value: 5
        }, {
            text: '10', value: 10
        }, {
            text: 'All', value: tableData.length
        }]
    };

    const defaultSorted = [{
        dataField: 'id',
        order: 'desc'
    }];

    return (
        <ToolkitProvider
            keyField="id"  data={tableData} columns={columns}
            search
        >
            {
                props => (
                    <div>
                        <h3>Try to Search at below input field:</h3>
                        <SearchBar { ...props.searchProps } />
                        <hr />
                        <BootstrapTable
                            defaultSorted={defaultSorted}
                            pagination={paginationFactory(options)}
                            { ...props.baseProps }
                        />
                    </div>
                )
            }
        </ToolkitProvider>

    )
}
