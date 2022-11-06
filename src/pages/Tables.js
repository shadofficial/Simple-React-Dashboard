import React, { useState, useEffect } from 'react'

import PageTitle from '../components/Typography/PageTitle'
import SectionTitle from '../components/Typography/SectionTitle'
import CTA from '../components/CTA'
import {
 Input,
  Table,
  TableHeader,
  TableCell,
  TableBody,
  TableRow,
  TableFooter,
  TableContainer,
  Badge,
  Avatar,
  Button,
  Pagination,
} from '@windmill/react-ui'
import { EditIcon, TrashIcon } from '../icons'

import response from '../utils/demo/tableData'
// make a copy of the data, for the second table
const response2 = response.concat([])

function Tables() {
  /**
   * DISCLAIMER: This code could be badly improved, but for the sake of the example
   * and readability, all the logic for both table are here.
   * You would be better served by dividing each table in its own
   * component, like Table(?) and TableWithActions(?) hiding the
   * presentation details away from the page view.
   */

  // setup pages control for every table
  const [pageTable1, setPageTable1] = useState(1)
  const [pageTable2, setPageTable2] = useState(1)

  // setup data for every table
  const [dataTable1, setDataTable1] = useState([])
  const [dataTable2, setDataTable2] = useState([])

  // pagination setup
  const resultsPerPage = 10
  const totalResults = response.length

  // pagination change control
  function onPageChangeTable1(p) {
    setPageTable1(p)
  }

  // pagination change control
  function onPageChangeTable2(p) {
    setPageTable2(p)
  }

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    setDataTable1(response.slice((pageTable1 - 1) * resultsPerPage, pageTable1 * resultsPerPage))
  }, [pageTable1])

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    setDataTable2(response2.slice((pageTable2 - 1) * resultsPerPage, pageTable2 * resultsPerPage))
  }, [pageTable2])

  return (
    <>
      <PageTitle>Data Tables</PageTitle>
      <TableContainer className="mb-8 shadow-lg">
      <a
      className="flex items-center justify-between p-4 text-sm font-semibold bg-white dark:bg-gray-800"
      href="/app/tables"
    >
      <div className="flex items-center text-blue-500">
       
        <span >DataTables</span>
      </div>
      <div className="flex justify-end flex-1 lg:mr-32">
          <div className="relative w-full max-w-xl mr-6 focus-within:text-purple-500">
            <Input
              className="pl-8 text-gray-700"
              placeholder="Search"
              aria-label="Search"
            />
          </div>
        </div>
    </a>
        <Table>
          <TableHeader>
            <tr>
              <TableCell>Name</TableCell>
              <TableCell>Position</TableCell>
              <TableCell>Office</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Start Date</TableCell>
              <TableCell>Salary</TableCell>
            </tr>
          </TableHeader>
          <TableBody>
            {dataTable1.map((user, i) => (
              <TableRow key={i}>
                <TableCell>
                      <p className="text-bold ">{user.name}</p>
    
                </TableCell>
                <TableCell>
                  <span className="text-sm">{user.job}</span>
                </TableCell>
                <TableCell>
                <span className="text-sm">{user.status}</span>
                </TableCell>
                <TableCell>
                <span className="text-sm">{user.age}</span>
                </TableCell>
                <TableCell>
                  <span className="text-sm">{new Date(user.date).toLocaleDateString()}</span>
                </TableCell>
                <TableCell>
                <span className="text-sm">${user.amount}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TableFooter>
          <Pagination
            totalResults={totalResults}
            resultsPerPage={resultsPerPage}
            onChange={onPageChangeTable1}
            label="Table navigation"
          />
        </TableFooter>
      </TableContainer>
      
    </>
  )
}

export default Tables
