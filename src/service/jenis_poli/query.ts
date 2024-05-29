// import db from "../../config/database";

// interface JenisPoliAtribute {
//   nama_poli: string;
// }

// class JenisPoliQuery {
//   public async createJenisPoli(poli: JenisPoliAtribute): Promise<any> {
//     return new Promise((resolve, reject) => {
//       db.query(
//         "insert into jenis_poli(nama_poli) value(?)",
//         [poli.nama_poli],
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
//   public async getAllPoli(): Promise<any> {
//     return new Promise((resolve, reject) => {
//       db.query("select * from jenis_poli", (err, res) => {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(res);
//         }
//       });
//     });
//   }
// }
// export default new JenisPoliQuery();
