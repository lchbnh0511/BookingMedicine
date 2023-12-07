import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import useStyles from './styles';
import { Link } from 'react-router-dom';
import AccountMenu from './Menu/AccountMenu'
function getCookieValue(cookieName) {
    // Tách các cookie thành một mảng
    var cookies = document.cookie.split(';');

    // Lặp qua từng cookie
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();

        // Kiểm tra nếu tên cookie trùng khớp
        if (cookie.indexOf(cookieName + '=') === 0) {
            // Trích xuất giá trị của cookie và trả về
            return cookie.substring(cookieName.length + 1);
        }
    }

    // Trả về null nếu không tìm thấy cookie
    return null;
}

var typeUserValue = getCookieValue('role');
// var UserNameValue = getCookieValue('username');

const Narbar = () => {
    const classes = useStyles();

    return (
        <>
            <AppBar position='fixed' className={classes.appBar} color='inherit'>
                <Toolbar>
                    <Typography variant='h6' className={classes.title} color='inherit' >
                        <Button component={Link} to="/" style={{ fontSize: '40px', fontFamily: 'cursive', color: '  #14751c', fontWeight: 'bold' }}>
                            <img src='https://inlachong.com/wp-content/uploads/2020/06/thiet-ke-logo-nha-thuoc-gia-re-tai-lac-hong.jpg' alt="Commerce.js" height='100px' className={classes.image} />
                            HEALTH CARE
                        </Button>
                    </Typography>
                    <div className={classes.grow} />

                    {typeUserValue === null ? (
                        <>
                            <Button variant="outlined" component={Link} to="/login" style={{ marginRight: "20px" }}>
                                Đăng nhập
                            </Button>
                            <Button variant="outlined" component={Link} to="/signup" style={{ marginRight: "20px" }}>
                                Đăng ký
                            </Button>
                        </>
                    ) : (
                        typeUserValue === '0' || typeUserValue === '1'  ? (
                            <>
                                <AccountMenu />
                            </>
                        ) : null
                    )}
                </Toolbar>
                <Toolbar
                    style={{ backgroundColor: '#E8E8E8' }}
                >
                    <div style={{ marginLeft: "30px" }} />

                    {typeUserValue === '0' || typeUserValue === null ?(
                        <>
                            <Button component={Link} to="/aboutus">
                                Kê Đơn Thuốc
                            </Button>
                        </>
                    ) :(null)
                    }
                </Toolbar>
            </AppBar>

        </>

    );
};

export default Narbar;