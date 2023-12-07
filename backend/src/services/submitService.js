import db from '../models/index'

let userSubmit = (data) => {
    return new Promise (async(resolve, reject) => {
        try{
            const currentDate = new Date();
            const newSubmit =await db.medicinebill.create({
                id: data.userID,
                customerName: data.customerName,
                birthday: data.birthday,
                customerWeight: data.customerWeight,
                customerGender: data.customerGender,
                customerBHYT: data.customerBHYT,
                customerCCCD: data.customerCCCD,
                customerCode: data.customerCode,
                customerPhoneNumber: data.customerPhoneNumber,
                customerAddress: data.customerAddress,
                customerProb: data.customerProb,
                date: currentDate,
            });
            const newSubmitID = await db.medicinebill.findOne({
                where : {date: newSubmit.date, id: newSubmit.id}
            })
            await data.lists.forEach((item) => {
                makeBillDetail(item, newSubmitID.billID)
              });
            
           
            resolve();
        }catch(e){
            reject(e)
        }
    })
}
let makeBillDetail = (data, billID) => {
    return new Promise (async(resolve, reject) => {
        try{
            await db.medicinebilldetail.create({
                billID: billID,
                nameMedicine: data.name,
                dose: data.dose,
                count: data.count,
                note: data.note,
            });
            resolve()
        }catch(e){
            reject(e)
        }
    })
}

module.exports = {
    userSubmit: userSubmit,
}