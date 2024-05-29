// import db from "../../config/database";

// interface ListAsuransiAtribute {
//   nama_asuransi: string;
//   aktif: boolean;
//   persen_ditanggung: number;
// }

// class ListAsuransiQuery {
//   public async createListAsuransi(
//     asuransi: ListAsuransiAtribute
//   ): Promise<any> {
//     return new Promise((resolve, reject) => {
//       db.query(
//         "insert into list_asuransi(nama_asuransi,aktif,persen_ditanggung) value(?,?,?)",
//         [asuransi.nama_asuransi, asuransi.aktif, asuransi.persen_ditanggung],
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
//   public async getAllAsuransi(): Promise<any> {
//     return new Promise((resolve, reject) => {
//       db.query("select * from list_asuransi", (err, res) => {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(res);
//         }
//       });
//     });
//   }
// }
// export default new ListAsuransiQuery();
