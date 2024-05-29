// import db from "../../config/database";

// interface genereteAntrianAtribute {
//   no: number;
//   tanggal: string;
//   poli_id: number;
// }

// class GenereteAntrianQuery {
//   public async getAllAntrian(): Promise<any> {
//     return new Promise((resolve, reject) => {
//       db.query("select * from generete_antrian", (err, res) => {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(res);
//         }
//       });
//     });
//   }
//   public createAntrian(generete_antrian: genereteAntrianAtribute): Promise<any> {
//     return new Promise((resolve, reject) => {
//       db.query(
//         "insert into generete_antrian(no,tanggal,poli_id) value(?,?,?)",
//         [generete_antrian.no, generete_antrian.tanggal, generete_antrian.poli_id],
//         (err, res) => {
//           if (err) {
//             reject(err);
//           } else {
//             resolve(res);
//           }
//         }
//       );
//     });
//   }
//   public async deleteAntrian(id: number): Promise<any> {
//     return new Promise((resolve, reject) => {
//       db.query("delete from generete_antrian where id=?", [id], (err, res) => {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(res);
//         }
//       });
//     });
//   }
//   public async updateAntrian(Antrian: genereteAntrianAtribute): Promise<any> {
//     return new Promise((resolve, reject) => {
//       db.query(
//         "update generete_antrian set no=? where poli_id=?",
//         [Antrian.no, Antrian.tanggal, Antrian.poli_id],
//         (err, res) => {
//           if (err) {
//             reject(err);
//           } else {
//             resolve(res);
//           }
//         }
//       );
//     });
// }
// }
// export default new GenereteAntrianQuery();
