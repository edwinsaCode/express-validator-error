// import { resolve } from "path";
// import db from "../../config/database";

// interface pasienAtribute {
//   no_rm: number;
//   nama: string;
//   nik: string;
//   alamat: string;
//   kontak: string;
// }

// class PasienQuery {
//   public async getAllPasien(): Promise<any> {
//     return new Promise((resolve, reject) => {
//       db.query("select * from data_pasien", (err, res) => {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(res);
//         }
//       });
//     });
//   }
//   public async getPasienByNoRM(no_rm: number | string): Promise<any> {
//     return new Promise((resolve, reject) => {
//       db.query(
//         "select * from data_pasien where no_rm=?",
//         [no_rm],
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
//   public async cekPasienID(id: number): Promise<any> {
//     return new Promise((resolve, reject) => {
//       db.query("select * from data_pasien where id=? ", [id], (err, res) => {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(res);
//         }
//       });
//     });
//   }
//   public async createDataPasien(
//     no_rm: number | null,
//     pasien: pasienAtribute
//   ): Promise<any> {
//     return new Promise((resolve, reject) => {
//       db.query(
//         "insert into data_pasien (no_rm,nama,nik,alamat,kontak) value(?,?,?,?,?)",
//         [no_rm, pasien.nama, pasien.nik, pasien.alamat, pasien.kontak],
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
//   public async deleteDataPasien(id: number): Promise<any> {
//     return new Promise((resolve, reject) => {
//       db.query("delete from data_pasien where id=?", [id], (err, res) => {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(res);
//         }
//       });
//     });
//   }
//   public async getDataPasienByNoRm(no_rm: number): Promise<any> {
//     return new Promise((resolve, reject) => {
//       db.query(
//         `selecy * from data_pasien where no_rm "%?%"`,
//         [no_rm],
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
// }
// export default new PasienQuery();
