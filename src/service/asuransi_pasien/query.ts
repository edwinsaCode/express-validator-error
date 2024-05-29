// import db from "../../config/database";

// interface AsuransiPasienAtribute {
//   no_asuransi: number;
//   kelas: string;
//   pasien_id: number;
//   asuransi_id: number;
// }

// class AsuransiPasienQuery {
//   public async getAllAsuransiPasien(): Promise<any> {
//     return new Promise((resolve, reject) => {
//       db.query("select * from asuransi_pasien", (err, res) => {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(res);
//         }
//       });
//     });
//   }
//   public async createAsuransiPasien(
//     asuransiPasien: AsuransiPasienAtribute
//   ): Promise<any> {
//     return new Promise((resolve, reject) => {
//       db.query(
//         "insert into asuransi_pasien (no_asuransi,kelas,pasien_id,asuransi_id) value(?,?,?,?)",
//         [
//           asuransiPasien.no_asuransi,
//           asuransiPasien.kelas,
//           asuransiPasien.pasien_id,
//           asuransiPasien.asuransi_id,
//         ],
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
//   public async deleteAsuransiPasien(id: number): Promise<any> {
//     return new Promise((resolve, reject) => {
//       db.query("delete from asuransi_pasien where id=?", [id], (err, res) => {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(res);
//         }
//       });
//     });
//   }
// }
// export default new AsuransiPasienQuery();
