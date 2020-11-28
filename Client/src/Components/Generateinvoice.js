import React from "react";
import { useTable, usePagination } from 'react-table';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './generate.module.css';


function Table({ columns, data }) {
    // Use the state and functions returned from useTable to build your UI
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },
    } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 0, pageSize: 5 },
        },
        usePagination
    )

    // Render the UI for your table
    return ( <div>
        <div >
            <pre className={styles.design}>
                <code>
                    {JSON.stringify(
                        {
                            pageIndex,
                            pageSize,
                            pageCount,
                            canNextPage,
                            canPreviousPage,
                    },
                        null,
                        2
                    )}
                </code>
            </pre>
            <table className={styles.table} {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row, i) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            {/* 
        Pagination can be built however you'd like. 
        This is just a very basic UI implementation:
      */}   <div >

            <ul className='pagination'>
                <li className="page-item" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                    <a className="page-link">First</a>
                </li>
                <li className="page-item" onClick={() => previousPage()} disabled={!canPreviousPage}>
                    <a className="page-link">{'<'}</a>
                </li>
                <li className="page-item" onClick={() => nextPage()} disabled={!canNextPage}>
                    <a className="page-link">{'>'}</a>
                </li>
                <li className="page-item" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                    <a className="page-link">Last</a>
                </li>
                <li>
                    <a className="page-link">
                        Page{' '}
                        <strong>
                            {pageIndex + 1} of {pageOptions.length}
                        </strong>{' '}
                    </a>
                </li>
                <li>
                    <a className="page-link">
                        <input
                            className="form-control"
                            type="number"
                            defaultValue={pageIndex + 1}
                            onChange={e => {
                                const page = e.target.value ? Number(e.target.value) - 1 : 0
                                gotoPage(page)
                            }}
                            style={{ width: '100px', height: '20px' }}
                        />
                    </a>
                </li>{' '}
                <select
                    className="form-control"
                    value={pageSize}
                    onChange={e => {
                        setPageSize(Number(e.target.value))
                    }}
                    style={{ width: '120px', height: '38px' }}
                >
                    {[5, 10, 20, 30, 40, 50].map(PageSize => (
                        <option key={PageSize} value={PageSize}>
                            Show {PageSize}
                        </option>
                    ))}
                </select>
            </ul>
            </div>
        </div >
        </div>
    )
}

function PaginationTableComponent2() {
    const columns = React.useMemo(
        () => [
            {
                Header: 'Invoice',
                columns: [
                    {
                        Header: 'Invoice No.',
                        accessor: "invoice no.",
                    },
                    {
                        Header: 'Invoice Date',
                        accessor: "invoice Date",
                    },
                    
                ],
            },
            {
                Header: 'Info',
                columns: [
                    {
                        Header: 'Due Date',
                        accessor: ' Due date',
                    },
                    {
                        Header: 'Item Name',
                        accessor: 'item name',
                    },
                    {
                        Header: 'Item Quantity',
                        accessor: 'item Quantity',
                    },
                    {
                        Header: 'Item Rate',
                        accessor: 'item rate',
                    },
                    {
                        Header: 'Sender Name',
                        accessor: "sender name",
                    },
                    {
                        Header: 'Sender Email',
                        accessor: "sender Email",
                    },
                    {
                        Header: 'Sender Mobile No.',
                        accessor: "sender mobile number",
                    },
                    {
                        Header: 'Sender City',
                        accessor: "sender city",
                    },
                    {
                        Header: 'Receiver Name',
                        accessor: "receiver name",
                    },
                    
                    {
                        Header: 'Receiver Email',
                        accessor: "receiver email",
                    },
                    {
                        Header: 'Receiver Mobile Number',
                        accessor: "receiver mobile number",
                    },
                    {
                        Header: 'Receiver City',
                        accessor: "receiver city",
                    },

                ],
            },
        ],
        []
    )

    const data = [
        {
            "invoice no.": "committee-c15dw",
            "invoice Date": "10/11/1999",
            "Due Date": "10/11/1999",
            "item name": "committee-c15dw",
            "item Quantity": "2",
            "item rate": "4",
            "sender name": "committee-c15dw",
            "sender Email": "user@gmail.com",
            "sender mobile number": "1234567890",
            "sender city": "acbs",
            "receiver name": "abc",
            "receiver email": "user@gmail.com",
            "receiver mobile number": "1234569870",
            "receiver city": "vcx"
        },
        {
            "invoice no.": "committee-c15dw",
            "invoice Date": "10/11/1999",
            "Due Date": "10/11/1999",
            "item name": "committee-c15dw",
            "item Quantity": "2",
            "item rate": "4",
            "sender name": "committee-c15dw",
            "sender Email": "user@gmail.com",
            "sender mobile number": "1234567890",
            "sender city": "acbs",
            "receiver name": "abc",
            "receiver email": "user@gmail.com",
            "receiver mobile number": "1234569870",
            "receiver city": "vcx"
        },
        {
            "invoice no.": "committee-c15dw",
            "invoice Date": "10/11/1999",
            "Due Date": "10/11/1999",
            "item name": "committee-c15dw",
            "item Quantity": "2",
            "item rate": "4",
            "sender name": "committee-c15dw",
            "sender Email": "user@gmail.com",
            "sender mobile number": "1234567890",
            "sender city": "acbs",
            "receiver name": "abc",
            "receiver email": "user@gmail.com",
            "receiver mobile number": "1234569870",
            "receiver city": "vcx"
        },
        {
            "invoice no.": "committee-c15dw",
            "invoice Date": "10/11/1999",
            "Due Date": "10/11/1999",
            "item name": "committee-c15dw",
            "item Quantity": "2",
            "item rate": "4",
            "sender name": "committee-c15dw",
            "sender Email": "user@gmail.com",
            "sender mobile number": "1234567890",
            "sender city": "acbs",
            "receiver name": "abc",
            "receiver email": "user@gmail.com",
            "receiver mobile number": "1234569870",
            "receiver city": "vcx"
        },
        {
            "invoice no.": "committee-c15dw",
            "invoice Date": "10/11/1999",
            "Due Date": "10/11/1999",
            "item name": "committee-c15dw",
            "item Quantity": "2",
            "item rate": "4",
            "sender name": "committee-c15dw",
            "sender Email": "user@gmail.com",
            "sender mobile number": "1234567890",
            "sender city": "acbs",
            "receiver name": "abc",
            "receiver email": "user@gmail.com",
            "receiver mobile number": "1234569870",
            "receiver city": "vcx"
        }]
    console.log(JSON.stringify(data));


    return (
        <Table columns={columns} data={data} />
    )
}

export default PaginationTableComponent2;