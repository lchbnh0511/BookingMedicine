import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import OrderRow from './OrderRow/OrderRow';
import useStyles from './styles';
import { useCookies } from 'react-cookie';
import axios from 'axios';

// const orders = [
//   {BillID: 1, userName: 'ABC', customerName: 'ABC', customerPhoneNumber: '032213', customerAddress: 'D1', date: '21-2-2020', totalCost: 3000000, statusName: 'Đang xử lý'},
//   {BillID: 2, userName: 'ABC', customerName: 'ABC', customerPhoneNumber: '032213', customerAddress: 'D2', date: '21-4-2020', totalCost: 4500000, statusName: 'Đang xử lý'},
//   {BillID: 3, userName: 'ABC', customerName: 'ABC', customerPhoneNumber: '032213', customerAddress: 'D3', date: '27-2-2020', totalCost: 3500000, statusName: 'Đang xử lý'},
// ]

function Ordertable() {
  const classes = useStyles();
  const [orders, setorders] = useState([]);
  const [cookies] = useCookies([]);

  useEffect(() => {
    async function getData() {
      try {
        let res
        res = await axios.post('http://localhost:8081/api/getAllUserSubmit', { userID: cookies.id });

        setorders(res.data.info);
      } catch (error) {
        setorders([])
      }
    }
    getData();
  },)
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableCell}>Tên bệnh nhân</TableCell>
            <TableCell className={classes.tableCell}>SĐT</TableCell>
            <TableCell className={classes.tableCell}>Địa chỉ</TableCell>
            <TableCell className={classes.tableCell}>Chẩn Đoán</TableCell>
            <TableCell className={classes.tableCell}>Thông tin chi tiết</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            orders.map((order) => (
              <OrderRow order={order} />
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Ordertable;