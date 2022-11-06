import React, { useState, useEffect } from "react";

import CTA from "../components/CTA";
import InfoCard from "../components/Cards/InfoCard";
import { Card, CardBody } from '@windmill/react-ui'
import PageTitle from "../components/Typography/PageTitle";
import { ChatIcon, CartIcon, MoneyIcon, PeopleIcon } from "../icons";
import { Button } from '@windmill/react-ui'
import RoundIcon from "../components/RoundIcon";
import response from "../utils/demo/tableData";
import {
  TableBody,
  TableContainer,
  Table,
  TableHeader,
  TableCell,
  TableRow,
  TableFooter,
  Avatar,
  Badge,
  Pagination,
} from "@windmill/react-ui";

import {
  doughnutOptions,
  lineOptions,
  doughnutLegends,
  lineLegends,
} from "../utils/demo/chartsData";

function Dashboard() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  // pagination setup
  const resultsPerPage = 5;
  const totalResults = response.length;

  // pagination change control
  function onPageChange(p) {
    setPage(p);
  }

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage));
  }, [page]);

  return (
    <>
      <PageTitle>Dashboard</PageTitle>

      {/* <!-- Cards --> */}
      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        <InfoCard
          title="Earnings (Monthly)"
          value="$40000"
          subtitle={`3.45 since last month`}
        >
          <RoundIcon
            icon={MoneyIcon}
            iconColorClass="text-orange-500 dark:text-orange-100"
            bgColorClass=""
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Sales" value="650" subtitle={`3.45 since last month`}>
          <RoundIcon
            icon={CartIcon}
            iconColorClass="text-green-500 dark:text-green-100"
            bgColorClass=""
            className="mr-4 " 
          />
        </InfoCard>

        <InfoCard
          title="New users"
          value="366"
          subtitle={`3.45 since last month`}
        >
          <RoundIcon
            icon={PeopleIcon}
            iconColorClass="text-blue-500 dark:text-blue-100"
            bgColorClass=""
            className="mr-4"
          />
        </InfoCard>

        <InfoCard
          title="Pending Requests"
          value="18"
          subtitle={`3.45 since last month`}
        >
          <RoundIcon
            icon={ChatIcon}
            iconColorClass="text-teal-500 dark:text-teal-100"
            bgColorClass=""
            className="mr-4"
          />
        </InfoCard>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="shadow-lg col-span-3 md:col-span-1 lg:col-span-1">
        <Card>
          <CardBody>
          <a
      className="flex items-center justify-between p-4 text-sm font-semibold  bg-white dark:bg-gray-800"
      href="/app/tables"
    >
      <div className="flex items-center text-blue-500">
       
        <span>Product Sold</span>
      </div>
      <span className="bg-purple-600 text-white p-2 rounded">
       Month <span dangerouslySetInnerHTML={{ __html: '&RightArrow;' }}></span>
      </span>
    </a>
          </CardBody>
        </Card>
        </div>
        <div className="col-span-3 md:col-span-2 lg:col-span-2">
          <TableContainer className="shadow-lg">
          <a
      className="flex items-center justify-between p-4 text-sm font-semibold bg-white dark:bg-gray-800"
      href="/app/tables"
    >
      <div className="flex items-center text-blue-500">
       
        <span >Invoice</span>
      </div>
      <span className="bg-purple-600 text-white p-2 rounded">
        View more <span dangerouslySetInnerHTML={{ __html: '&RightArrow;' }}></span>
      </span>
    </a>
            <Table>
              <TableHeader>
                <tr>
                  <TableCell>Order Id</TableCell>
                  <TableCell>Customer</TableCell>
                  <TableCell>Item</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Action</TableCell>
                </tr>
              </TableHeader>
              <TableBody>
                {data.map((user, i) => (
                  <TableRow key={i}>
                    <TableCell>
                      <div className="flex items-center text-sm">
                        <div>
                          <p className="font-semibold text-blue-500">R{user.amount}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">{user.name}</span>
                    </TableCell>
                    <TableCell>
                    <span className="text-sm">{user.name}</span>
                    </TableCell>
                    <TableCell>
                    <Badge type={user.status}>{user.status}</Badge>
                    </TableCell>
                    <TableCell>
                    <Button size="small">Detail</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <TableFooter>
              <Pagination
                totalResults={totalResults}
                resultsPerPage={resultsPerPage}
                label="Table navigation"
                onChange={onPageChange}
              />
            </TableFooter>
          </TableContainer>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
