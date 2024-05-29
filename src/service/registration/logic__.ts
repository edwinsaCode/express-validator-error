// // import Regis from "./query";
// import NoAntrian from "../../helper/generete_antrian";
// import Antrian from "../antrian/logic__";
// import RegisModel from "./model";

// interface messege {
//   messege: string;
//   status: number;
// }

// class Registration {
//   public async save(body: any): Promise<messege> {
//     const antrian = await NoAntrian.genereteAntrian(body.poliId, body.tanggal);
//     const regisSave = await RegisModel.create({
//       asuransi: body.isUsingAsurance,
//       pasien_id: body.pasienId,
//       poli_id: body.poliId,
//       asuransi_pasien_id: body.asuransi_pasien_id,
//     });
//     console.log(regisSave);
//     // await Antrian.saveAntrian({
//     //   no_antrian: antrian,
//     //   registrasi_id: regisSave.insertId,
//     // });
//     let msg: messege = { messege: "berhasil", status: 200 };
//     return msg;
//   }

//   //   public async delete(body: any): Promise<messege> {
//   //     const regisDelete = await Regis.deleteRegistration(body);
//   //     let msg: messege = { messege: "berhasilll", status: 200 };
//   //     return msg;
//   //   }
//   //   public async get(body: any): Promise<messege> {
//   //     const getRegisJoinAntrian = await Regis.getRegistrationJoinAntrian(body);
//   //     let msg: messege = { messege: "berhasilll", status: 200 };
//   //     return msg;
//   //   }
//   //   public async getAntrian(poliId: string): Promise<messege> {
//   //     console.log(poliId);
//   //     const dataAntrian = await Regis.getDataAntrian(poliId);
//   //     let msg: messege = { messege: "Succes", status: 200 };
//   //     return dataAntrian;
//   //   }
//   //   public async update(body: any, id: string): Promise<messege> {
//   //     const msg: messege = { messege: "success", status: 200 };
//   //     await Regis.updateRegistration(body, parseInt(id));
//   //     return msg;
//   //   }
// }

// export default new Registration();
