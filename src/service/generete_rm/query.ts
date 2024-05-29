// import db from "../../config/database";
// import NoRM from "../../helper/no_rm"
// interface GenereteRMAtributes {
//   no:number;
//   tahun:number;
//   aktif:boolean;
// }

// class GenereteRM{
//     public async cekPasienID(id: number): Promise<any> {
//     return new Promise((resolve, reject) => {
//         db.query("select * from data_pasien where id=? ", [id], (err, res) => {
//         if (err) {
//             reject(err);
//         } else {
//             resolve(res);
//         }
//         });
//     });
//     }

//     public async createRM(
//         no: number | null,
//         rm: GenereteRMAtributes
//     ): Promise<any> {
//     return new Promise((resolve, reject) => {
//         db.query(
//         "insert into generete_rm(no,tahun,aktif) values(?,?,?)",
//         [
//             no,
//             rm.tahun,
//             rm.aktif,
//         ],
//         (err, res) => {
//             if (err) {
//             reject(err);
//             } else {
//             resolve(res);
//             }
//         }
//         );
//     });
//     }

//     public async getAllRM(): Promise<any> {
//     return new Promise((resolve, reject) => {
//         db.query("select * from generete_rm", (err, res) => {
//         if (err) {
//             reject(err);
//         } else {
//             resolve(res);
//         }
//         });
//     });
//     }

//     public async  deleteRM(id: number): Promise<any> {
//     return new Promise((resolve, reject) => {
//         db.query("delete from generete_rm where id=?", [id], (err, res) => {
//         if (err) {
//             reject(err);
//         } else {
//             resolve(res);
//         }
//         });
//     });
//     }
// }
// export default new GenereteRM();
