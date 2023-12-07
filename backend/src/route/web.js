import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";
import medicineController from "../controllers/medicineController"
import submitController from "../controllers/submitController"

let router = express.Router()

const middleware = (req, res, next) => {
    const {username, role} = req.cookies
    req['username'] = username
    req['role'] = role
    if(!username) return res.json({msg: 'Access deined'})
    next();
}

let initWebRoutes = (app) => {  
    // router.get('/', homeController.getHomePage);
    // API cho tài khoản user
    router.post('/api/login', userController.handleLogin);
    router.post('/api/signup', userController.hanldeSignUp);
    router.get('/api/getuser', middleware, userController.handleGetUser);
    router.get('/api/getAllUser',  userController.handleGetAllUser);
    router.put('/api/user/update',userController.updateUser);
    router.delete('/api/user/delete',userController.handleDeleteUser);
    router.get('/api/getAllMedicine', medicineController.getAllMedicine)
    router.post('/api/handleSubmit', submitController.Submit);
    router.post('/api/getAllUserSubmit', medicineController.getAllUserSubmit)
    router.post('/api/getAllUserSubmitDetail', medicineController.getAllUserSubmitDetail)
    return app.use("/", router)
}

module.exports = initWebRoutes;