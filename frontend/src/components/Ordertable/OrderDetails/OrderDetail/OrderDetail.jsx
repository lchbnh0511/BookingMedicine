import React, { Fragment } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function OrderDetail({ product }) {
    return (
        <TableContainer component={Paper}>
            <Table className="table" aria-label="medicine bill">
                <TableHead>
                    <TableRow>
                        <TableCell className="tableCell">Tên thuốc</TableCell>
                        <TableCell className="tableCell">Liều lượng</TableCell>
                        <TableCell className="tableCell">Số lượng</TableCell>
                        <TableCell className="tableCell">Ghi chú</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {product.map((row) => (
                        <Fragment>
                            <TableRow>
                                <TableCell>{row.nameMedicine}</TableCell>
                                <TableCell>{row.dose}</TableCell>
                                <TableCell>{row.count}</TableCell>
                                <TableCell>{row.note}</TableCell>
                            </TableRow>
                        </Fragment>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default OrderDetail;