// import db from "../../config/database";

// interface TarifUmumAtribute {
//   jumlah_hari: number;
//   total_bayar: number;
//   poli_id: number;
//   kamar_id: number;
//   rekam_medis_id: number;
// }

// class TarifQuery {
//   public async getAllTarif(): Promise<any> {
//     return new Promise((resolve, reject) => {
//       db.query("select * from tarif_umum", (err, res) => {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(res);
//         }
//       });
//     });
//   }
//   public async createTarif(tarif: TarifUmumAtribute): Promise<any> {
//     return new Promise((resolve, reject) => {
//       db.query(
//         "insert into tarif_umum (jumlah_hari,total_bayar,poli_id,kamar_id,rekam_medis_id) value(?,?,?,?,?)",
//         [tarif.jumlah_hari, tarif.total_bayar, tarif.poli_id, tarif.kamar_id, tarif.rekam_medis_id],
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
//   public async deleteTarif(id: number): Promise<any> {
//     return new Promise((resolve, reject) => {
//       db.query("delete from tarif_umum where id=?", [id], (err, res) => {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(res);
//         }
//       });
//     });
//   }
// }
// export default new TarifQuery();
