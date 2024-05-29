// // import PasienQuery from "./query";
// import RMHelper from "../../helper/no_rm";
// import PasienModel from "./model";

// interface messege {
//   messege: string;
//   status: number;
// }

// class Pasien {
//   public async savePasien(body: any): Promise<messege> {
//     const rm = await RMHelper.genereteRM();
//     let msg: messege = { messege: "berhasil", status: 200 };
//     await PasienModel.create({
//       no_rm: body.no_rm,
//       nama: body.nama,
//       nik: body.nik,
//       alamat: body.alamat,
//       kontak: body.kontak,
//     });
//     return msg;
//   }
//   // public async deletePasien(body: any): Promise<messege> {
//   //   await PasienQuery.deleteDataPasien(body);
//   //   let msg: messege = { messege: "berhasil", status: 200 };
//   //   return msg;
//   // }
//   // public async getPasien(): Promise<messege> {
//   //   const get = await PasienQuery.getAllPasien();
//   //   let msg: messege = { messege: "berhasil", status: 200 };
//   //   return get;
//   // }
//   // public async getPasienByNoRM(no_rm: number | string): Promise<messege> {
//   //   const get = await PasienQuery.getPasienByNoRM(no_rm);
//   //   let msg: messege = { messege: "succes", status: 200 };
//   //   return get;
//   // }
//   // public async getDataPasienByNoRm(kode: string): Promise<any> {
//   //   const pasien = await PasienQuery.getDataPasienByNoRm(parseInt(kode));
//   //   return pasien;
//   // }
// }

// export default new Pasien();
