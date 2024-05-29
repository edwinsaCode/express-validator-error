// import db from "../../config/database";

// interface DaftarPetugasAtribute {
//   nama_petugas: string;
//   tupoksi: string;
//   poli_id: number;
// }

// class DaftarPetugasQuery {
//   public async createDaftarPetugas(
//     petugas: DaftarPetugasAtribute
//   ): Promise<any> {
//     return new Promise((resolve, reject) => {
//       db.query("insert into daftar_petugas(nama_petugas,tupoksi,poli_id) value(?,?,?)",
//       [petugas.nama_petugas,petugas.tupoksi,petugas.poli_id],(err, res)=>{
//         if(err){
//             reject(err)
//         }else{
//             resolve(res)
//         }
//       });
//     });
//   }
// }
// export default new DaftarPetugasQuery();
