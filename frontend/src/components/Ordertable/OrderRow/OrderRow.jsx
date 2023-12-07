import React, { useState } from 'react';
import { TableCell, TableRow, Button } from '@material-ui/core';
import { Dialog,  Table} from '@material-ui/core';
import OrderDetails from '../OrderDetails/OrderDetails';
import useStyles from './styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
function OrderRow({ order }) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <TableRow className={classes.a}>
                <TableCell>{order.customerName}</TableCell>
                <TableCell>{order.customerPhoneNumber}</TableCell>
                <TableCell>{order.customerAddress}</TableCell>
                <TableCell>{order.customerProb}</TableCell>
                <TableCell>
                    <Button variant="outlined" color="primary" onClick={handleOpen}>
                        Thông tin chi tiết
                    </Button>
                    <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition} >
                        <AppBar className={classes.appBar} >
                            <Toolbar >
                                <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                                    <CloseIcon />
                                </IconButton>
                                <Typography variant="h6" className={classes.title}>
                                    Thông tin chi tiết
                                </Typography>
                                <Button autoFocus color="inherit" onClick={handleClose} style={{ marginLeft: '1500px' }}>
                                    save
                                </Button>
                            </Toolbar>
                        </AppBar>
                        <Typography component="h1" variant="h3" color="inherit" gutterBottom style={{ fontFamily: 'Tahoma , sans-serif', fontSize: '3rem' , textAlign: 'center', marginTop:'100px'}}>
                            THÔNG TIN BỆNH NHÂN
                        </Typography>
                        <TableContainer component={Paper} >
                            <Table className={classes.table} aria-label="simple table" style={{ marginTop: '50px' }}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell className={classes.tableCell}>Tên bệnh nhân</TableCell>
                                        <TableCell className={classes.tableCell}>SĐT</TableCell>
                                        <TableCell className={classes.tableCell}>Địa chỉ</TableCell>
                                        <TableCell className={classes.tableCell}>Ngày sinh</TableCell>
                                        <TableCell className={classes.tableCell}>Giới tính</TableCell>
                                        <TableCell className={classes.tableCell}>Chẩn Đoán</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableCell>{order.customerName}</TableCell>
                                    <TableCell>{order.customerPhoneNumber}</TableCell>
                                    <TableCell>{order.customerAddress}</TableCell>
                                    <TableCell>{order.birthday}</TableCell>
                                    <TableCell>{order.customerGender}</TableCell>
                                    <TableCell>{order.customerProb}</TableCell>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TableContainer component={Paper} >
                            <Table className={classes.table} aria-label="simple table" style={{ marginTop: '50px' }}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell className={classes.tableCell}>Cân nặng</TableCell>
                                        <TableCell className={classes.tableCell}>CCCD/CMND</TableCell>
                                        <TableCell className={classes.tableCell}>Mã số BHYT</TableCell>
                                        <TableCell className={classes.tableCell}>Mã định danh y tế  </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableCell>{order.customerWeight}</TableCell>
                                    <TableCell>{order.customerCCCD}</TableCell>
                                    <TableCell>{order.customerBHYT}</TableCell>
                                    <TableCell>{order.customerCode}</TableCell>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <Typography component="h1" variant="h3" color="inherit" gutterBottom style={{ fontFamily: 'Tahoma , sans-serif', fontSize: '3rem' , textAlign: 'center', marginTop:'20px'}}>
                            THÔNG TIN ĐƠN THUỐC
                        </Typography>

                        <OrderDetails BillID={order.billID} />
                    </Dialog>
                </TableCell>
            </TableRow>
        </>
    );
}

export default OrderRow;