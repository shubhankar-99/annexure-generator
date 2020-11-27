import React from "react";
import { useTable, usePagination } from 'react-table';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './generate.module.css';
import * as C from "../Constant";


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

function PaginationTableComponent() {
    const columns = React.useMemo(
        () => [
            {
                Header: 'Name',
                columns: [
                    {
                        Header: 'First Name',
                        accessor: "name",
                    },
                    
                ],
            },
            {
                Header: 'Info',
                columns: [
                    {
                        Header: 'Date',
                        accessor: 'date',
                    },
                    {
                        Header: 'Position',
                        accessor: 'position',
                    },
                    {
                        Header: 'College',
                        accessor: 'college',
                    },
                    {
                        Header: 'Email',
                        accessor: 'email',
                    },
                ],
            },
        ],
        []
    )

    const data = [
        {
            "name": "committee-c15dw",
            "date": "10/11/1999",
            "position": "Web Developer Intern",
            "college": "SGSITS",
            "email": "user@gmail.com"
        },
        {
            "name": "midnight-wad0y",
            "date": "11/02/2019",
            "position": "Software Developer",
            "college": "SRM",
            "email": "user@gmail.com"
        },
        {
            "name": "tree-sbdb0",
            "date": "20/03/2020",
            "position": "project manager",
            "college": "MANIT",
            "email": "user@gmail.com"
        },
        {
            "name": "chin-borr8",
            "date": "09/08/2019",
            "position": "Hr",
            "college": "COEP",
            "email": "user@gmail.com"
        },
        {
            "name": "women-83ef0",
            "date": "04/07/2020",
            "position": "Software Development Intern",
            "college": "VIT",
            "email": "user@gmail.com"
        }]

        
    console.log(JSON.stringify(data));


    return (
        <Table columns={columns} data={data} />
    )
}

export default PaginationTableComponent;