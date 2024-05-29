// import db from "../../config/database";

// interface RekamMedisAtribute {
//   deskripsi: string;
//   tindakan: string;
//   registrasi_id: number;
//   kamar_id: number;
// }

// class RekamMedisQuery {
//   public async getAllRekamMedis(): Promise<any> {
//     return new Promise((resolve, reject) => {
//       db.query("select * from rekam_medis", (err, res) => {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(res);
//         }
//       });
//     });
//   }
//   public async createRekamMedis(RM: RekamMedisAtribute): Promise<any> {
//     return new Promise((resolve, reject) => {
//       db.query(
//         "insert into rekam_medis (deskripsi,tindakan,registrasi_id,kamar_id) value(?,?,?,?)",
//         [RM.deskripsi, RM.tindakan, RM.registrasi_id, RM.kamar_id],
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
//   public async deleteRekamMedis(id: number): Promise<any> {
//     return new Promise((resolve, reject) => {
//       db.query("delete from rekam_medis where id=?", [id], (err, res) => {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(res);
//         }
//       });
//     });
//   }
// }
// export default new RekamMedisQuery();
