import React from 'react';
// import { useState } from 'react';
import Narbar from './components/Narbar/Narbar';
import SideBar from './components/SideBar/SideBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/Signup';
import AccountSetting from './components/Account/account/AccountSetting'
import Topbar from './components/admin/Topbar'
import { useCookies } from 'react-cookie';
import Ordertable from './components/Ordertable/Ordertable';
import Table from './components/Table/Table'
import Post from './components/Post/Post'
import Medicine from './components/Medicine/Medicine'
const App = () => {
    const [cookies] = useCookies([]);
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Narbar />
                    <div style={{ marginTop: '120px' }}>
                        <Post />
                    </div>
                </Route>
                <Route exact path="/aboutus">
                    {+cookies.role > -1 ? (
                        <>
                            <Narbar />
                            <div style={{ marginTop: '170px' }}>
                                <Medicine />
                            </div>
                        </>
                    ) : (<>Vui lòng đăng nhập để tiếp tục</>)}
                </Route>
                <Route exact path="/login">
                    <Narbar />
                    <div style={{ marginTop: '170px' }}>
                        <Login />
                    </div>
                </Route>
                <Route exact path="/signup">
                    <Narbar />
                    <div style={{ marginTop: '170px' }}>
                        <SignUp />
                    </div>
                </Route>
                <Route exact path="/accountsetting">
                    <Narbar />
                    <div style={{ marginTop: '170px' }}>
                        <AccountSetting />
                    </div>
                </Route>
                <Route exact path="/historyOrder">
                    <Narbar />
                    <div style={{ marginTop: '190px', marginLeft: '40px' }}>
                        <Ordertable />
                    </div>
                </Route>
                {+cookies.role > 0 ? (
                    <>
                        <Route exact path="/admin">
                            <Narbar />
                            <SideBar></SideBar>
                            <div style={{ marginTop: '120px', marginLeft: '250px' }}>
                            </div>
                        </Route>    
                        <Route exact path="/admin/account">
                            <Narbar />
                            <Topbar></Topbar>
                            <div style={{ marginTop: '150px' }}>
                                <SideBar></SideBar>
                            </div>
                            <div style={{ marginTop: '10px', marginLeft: '250px' }}>
                                <Table />
                            </div>
                        </Route>
                    </>
                ) : (<>Tài khoản của bạn không được phép truy cập vào trang admin</>)}
            </Switch>
        </Router>
    );
};

export default App;