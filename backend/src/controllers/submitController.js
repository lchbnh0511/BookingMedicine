import submitService from "../services/submitService"

let Submit = async(req,res) => {
    let data = req.body;
    await submitService.userSubmit(data);
    return res.status(200).json({
        errCode: 'Done'
    }) 
}


module.exports = {
    Submit : Submit,
}