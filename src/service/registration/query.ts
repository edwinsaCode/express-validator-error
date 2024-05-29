// import db from "../../config/database";

// export interface RegisAtribute {
//   asuransi: boolean;
//   pasien_id: number;
//   poli_id: number;
//   asuransi_pasien_id?: number;
// }

// class Registration {
//   public async createRegistration(registration: RegisAtribute): Promise<any> {
//     return new Promise((resolve, reject) => {
//       db.query(
//         "insert into registration(asuransi,pasien_id,poli_id,asuransi_pasien_id) value(?,?,?,?)",
//         [
//           registration.asuransi,
//           registration.pasien_id,
//           registration.poli_id,
//           registration.asuransi_pasien_id,
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
//   public async getDataAntrian(poliId: string): Promise<any> {
//     console.log(poliId);
//     return new Promise((resolve, reject) => {
//       db.query(
//         "select data_pasien.nama,data_pasien.no_rm,jenis_poli.nama_poli,antrian.no_antrian from registration inner join data_pasien on registration.pasien_id=data_pasien.id inner join jenis_poli on registration.poli_id=jenis_poli.id inner join antrian on registration.id=antrian.registrasi_id " +
//           (poliId ? ` where jenis_poli.id=?` : ""),
//         [poliId],
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

//   public async updateRegistration(
//     body: RegisAtribute,
//     id: number
//   ): Promise<any> {
//     return new Promise((resolve, reject) => {
//       db.query(
//         "update registration set asuransi=?, pasien_id=?, poli_id=?,asuransi_pasien_id=? where id=?",
//         [
//           body.asuransi,
//           body.pasien_id,
//           body.poli_id,
//           body.asuransi_pasien_id,
//           id,
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

//   public async getRegistrationJoinAntrian(
//     no_rm: number | string
//   ): Promise<any> {
//     return new Promise((resolve, reject) => {
//       db.query(
//         "select * from registration inner join antrian on registration.id=antrian.registrasi_id",
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
//   public async deleteRegistration(id: number): Promise<any> {
//     return new Promise((resolve, reject) => {
//       db.query("delete from registration where id=?", [id], (err, res) => {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(res);
//         }
//       });
//     });
//   }
// }
// export default new Registration();
