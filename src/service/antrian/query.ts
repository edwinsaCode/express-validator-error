// import db from "../../config/database";

// interface AntrianType {
//   no_antrian: string;
//   registrasi_id: number;
// }

// class AntrianQuery {
//   public async createAntrian(data: AntrianType): Promise<any> {
//     return new Promise((resolve, reject) => {
//       db.query(
//         "insert into antrian(no_antrian,registrasi_id) values(?,?)",
//         [data.no_antrian, data.registrasi_id],
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
//   public async getAntrian(): Promise<any> {
//     return new Promise((resolve, reject) => {
//       db.query("select * from antrian ", [], (err, res) => {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(res);
//         }
//       });
//     });
//   }
//   private async updateAntrian(rm: AntrianType): Promise<any> {
//     return new Promise((resolve, reject) => {
//       db.query(
//         "update antrian set no=? where registrasi_id=? ",
//         [rm.no_antrian, rm.registrasi_id],
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
// export default new AntrianQuery();
