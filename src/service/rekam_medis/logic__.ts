// import RekamMedisQuery from "./query";

// interface messege{
//     messege:string;
//     status:number;
// }

// class RekamMedis {
//   public async createRM(body: any): Promise<messege> {
//     const cekPasienExist = await RekamMedisQuery.createRekamMedis(body);
//     let msg: messege = { messege: "berhasil", status: 200 };
//     return msg;
//   }
//   public async deleteRM(body: any): Promise<messege> {
//     const del = await RekamMedisQuery.deleteRekamMedis(body);
//     let msg: messege = { messege: "berhasil", status: 200 };
//     return msg;
//   }
//   public async getRM(): Promise<messege> {
//     const get = await RekamMedisQuery.getAllRekamMedis();
//     let msg: messege = { messege: "berhasil", status: 200 };
//     return get;
//   }
// }

// export default new RekamMedis();
