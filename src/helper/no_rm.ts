// import db from "../config/database";

// interface RMType{
//   no:number;
//   tahun:number;
//   aktif:boolean;
// }

// class RMHelper{
//     public async createRM(gRM:RMType): Promise<any> {
//     return new Promise((resolve, reject) => {
//       db.query(
//         "insert into generete_rm(no,tahun,aktif) value(?,?,?)",
//         [gRM.no, gRM.tahun,gRM.aktif],
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
//     public async getGeneretRM(tahun:number,aktif:boolean): Promise<any> {
//     return new Promise((resolve, reject) => {
//       db.query("select * from generete_rm where tahun=? and aktif=?",[tahun,aktif], (err, res) => {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(res);
//         }
//       });
//     });
//   }
//     private async updateRM(rm:RMType):Promise<any>{
//         return new Promise((resolve,reject)=>{
//             db.query("update generete_rm set no=? where tahun=? and aktif=?",[rm.no,rm.tahun,rm.aktif],(err,res)=>{
//                 if(err){
//                     reject(err)
//                 }else{
//                     resolve(res)
//                 }
//             })
//         })
//     }
//     public async genereteRM():Promise<number | null>{
//         try{
//             let tahun= new Date().getFullYear()
//             let duaAngkaTerakhir=tahun.toString().substring(2)
//             console.log(duaAngkaTerakhir)
//             // if(tahun>1){
//             //     let aktif=1
//             //     return aktif
//             // }
//             let rm:string=""
//             let prefix=0
//             const genereteRM= await this.getGeneretRM(tahun,true);
//             console.log(genereteRM)
//             if(genereteRM.length===0){
//                 await this.createRM({no:1,tahun:tahun,aktif:true})
//                 prefix=1
//             }else{
//                 prefix=genereteRM[0].no+1;
//                 await this.updateRM({
//                     no:prefix,tahun,aktif:true
//                 })
//             }
//             let formater=""
//             for(let i=0; i<5-prefix.toString().length;i++){
//                 formater +="0"
//             }
//             console.log(formater)
//             rm=duaAngkaTerakhir+formater+prefix;
//             console.log(rm,"no rm")
//             return parseInt(rm)
//         }catch(e){
//             console.log(e);
//             return null
//         }
//     }
// }
// export default new RMHelper();
