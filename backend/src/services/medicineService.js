import db from '../models/index'

let getAllMedicine = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let medicine = await db.medicine.findAll({attributes: ['nameMedicine']});
            if (medicine) {
                resolve(medicine)
            }else{
                resolve(null)
            }
        } catch (e) {
          reject(e);
        }
      });
}
let getAllUserSubmit = (data) => {
    return new Promise (async(resolve, reject) => {
        try{
            const info = await db.sequelize.query(
                `SELECT billID, id, customerName, birthday, customerWeight, customerGender, customerBHYT, customerCCCD, customerCode, customerPhoneNumber, customerAddress, customerProb
                FROM medicinebill 
                WHERE medicinebill.id = :userID
                ORDER BY date DESC;`,
                { replacements: { userID: data.userID }, type: db.sequelize.QueryTypes.SELECT}
            );
            resolve(info)
        }catch(e){
            reject(e)
        }
    })
}
let getAllUserSubmitDetail = (data) => {
    return new Promise (async(resolve, reject) => {
        try{
            const info = await db.sequelize.query(
                `SELECT nameMedicine, dose, count, note
                FROM medicinebilldetail
                WHERE medicinebilldetail.billID = :userID
                ;`,
                { replacements: { userID: data.billID }, type: db.sequelize.QueryTypes.SELECT}
            );
            resolve(info)
        }catch(e){
            reject(e)
        }
    })
}

module.exports = {
    getAllMedicine:getAllMedicine,
    getAllUserSubmit:getAllUserSubmit,
    getAllUserSubmitDetail:getAllUserSubmitDetail,
}