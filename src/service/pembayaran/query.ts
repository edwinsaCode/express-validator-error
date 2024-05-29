// import { resolve } from "path";
// import db from "../../config/database";

// interface PembayaranAtribute{
//     total:number;
//     status_paid:boolean;
//     registration_id:number;
//     asuransi_pasien_id:number;
// }

// class PembayaranQuery{
//     public async createPembayaran(pembayaran:PembayaranAtribute):Promise<any>{
//         return new Promise((resolve,reject)=>{
//             db.query("insert into pembayaran(total,status_paid,registration_id,asuransi_pasien_id) value(?,?,?,?)",
//             [pembayaran.total,pembayaran.status_paid,pembayaran.registration_id,pembayaran.asuransi_pasien_id],(err,res)=>{
//                 if(err){
//                     reject(err)
//                 }else{
//                     resolve(res)
//                 }
//             })
//         })
//     }
// }
// export default new PembayaranQuery();
