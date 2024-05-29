// import db from "../../config/database";

// interface KamarAtribute {
//   nama_kamar: string;
//   jumlah_bed:number;
//   tarif_per_malam:number;
//   list_asuransi_id: number;
// }

// class KamarQuery {
//   public async createKamar(kamar: KamarAtribute): Promise<any> {
//     return new Promise((resolve, reject) => {
//       db.query(
//         "insert into kamar(nama_kamar,jumlah_bed,tarif_per_malam,list_asuransi_id) value(?,?,?,?)",
//         [
//           kamar.nama_kamar,
//           kamar.jumlah_bed,
//           kamar.tarif_per_malam,
//           kamar.list_asuransi_id,
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
// }
// export default new KamarQuery();
