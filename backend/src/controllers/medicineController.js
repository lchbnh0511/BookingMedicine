import medicineService from "../services/medicineService"



let  getAllMedicine = async(req,res) => {
    const medicine = await medicineService.getAllMedicine();
    return res.status(200).json({
        medicine
    }) 
}

let getAllUserSubmit = async(req,res) => {
    let data = req.body;
    const info = await medicineService.getAllUserSubmit(data);
    return res.status(200).json({
        info
    }) 
}
let getAllUserSubmitDetail = async(req,res) => {
    let data = req.body;
    const info = await medicineService.getAllUserSubmitDetail(data);
    return res.status(200).json({
        info
    }) 
}

module.exports = {
    getAllMedicine:getAllMedicine,
    getAllUserSubmit:getAllUserSubmit,
    getAllUserSubmitDetail:getAllUserSubmitDetail,
}