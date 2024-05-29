import db from "../config/database";
// import RegistrasiAtribute from "../service/registration/logic__";
// import { RegisAtribute } from "../service/registration/query";

interface genereteAntrianAtribute {
  no: number;
  tanggal: Date;
  poli_id: number;
}

// class Antrian {
// public async getAntrianByTanggalandId(
//   poli_id: number,
//   tanggal: Date
// ): Promise<any> {
//   return new Promise((resolve, reject) => {
//     db.query(
//       "select * from generete_antrian where tanggal=? and poli_id=?",
//       [tanggal, poli_id],
//       (err, res) => {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(res);
//         }
//       }
//     );
//   });
// }
// public createAntrian(
//   generete_antrian: genereteAntrianAtribute
// ): Promise<any> {
//   return new Promise((resolve, reject) => {
//     db.query(
//       "insert into generete_antrian(no,tanggal,poli_id) value(?,?,?)",
//       [
//         generete_antrian.no,
//         generete_antrian.tanggal,
//         generete_antrian.poli_id,
//       ],
//       (err, res) => {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(res);
//         }
//       }
//     );
//   });
// }
// public async deleteAntrian(id: number): Promise<any> {
//   return new Promise((resolve, reject) => {
//     db.query("delete from generete_antrian where id=?", [id], (err, res) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(res);
//       }
//     });
//   });
// }
// public async getJenisPoliById(jenis_poli_id: number): Promise<any> {
//   return new Promise((resolve, reject) => {
//     db.query(
//       "select * from jenis_poli where id=?",
//       [jenis_poli_id],
//       (err, res) => {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(res);
//         }
//       }
//     );
//   });
// }
// public async updateAntrian(Antrian: genereteAntrianAtribute): Promise<any> {
//   return new Promise((resolve, reject) => {
//     db.query(
//       "update generete_antrian set no=? where tanggal=? and poli_id=?",
//       [Antrian.no, Antrian.tanggal, Antrian.poli_id],
//       (err, res) => {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(res);
//         }
//       }
//     );
//   });
// }
//   public async genereteAntrian(poli_id: number, date: Date): Promise<any> {
//     try {
//       let noAntrian = "";
//       let prefix = "";
//       const genereteNewAntrian = await this.getAntrianByTanggalandId(
//         poli_id,
//         date
//       );
//       console.log(genereteNewAntrian);
//       if (genereteNewAntrian.length === 0) {
//         await this.createAntrian({
//           no: 1,
//           poli_id: poli_id,
//           tanggal: date,
//         });
//         prefix = "1";
//       } else {
//         prefix = genereteNewAntrian[0].no + 1;
//         await this.updateAntrian({
//           no: genereteNewAntrian[0].no + 1,
//           tanggal: date,
//           poli_id: 1,
//         });
//       }
//       let formater = "";
//       for (let i = 0; i < 5 - prefix.toString().length; i++) {
//         formater = "0";
//       }
//       noAntrian = formater + prefix;
//       return noAntrian;
//     } catch (e) {
//       console.log(e);
//       return null;
//     }
//   }
// }

// export default new Antrian();
