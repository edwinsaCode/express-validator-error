// import BaseRouter from "../base";
// import { Request, Response } from "express";
// // import GenereteAntrian from "./logic__";
// import GenereteAntrinCrud from "./crud";

// class RMRouter extends BaseRouter {
//   routes(): void {
//     this.router.get(
//       "/",
//       async (req: Request, res: Response): Promise<Response> => {
//         const getRM = await GenereteAntrian.getAntrian();
//         return res.status(200).json(getRM);
//       }
//     );
//     this.router.post(
//       "/",
//       async (req: Request, res: Response): Promise<Response> => {
//         console.log(req.body);
//         const post = await GenereteAntrian.createAntrian(req.body);
//         return res.status(200).json("berhasill");
//       }
//     );
//     this.router.delete(
//       "/",
//       async (req: Request, res: Response): Promise<Response> => {
//         const del = await GenereteAntrian.deleteAntrian(req.body.id);
//         return res.status(200).json("berhasill");
//       }
//     );
//   }
// }
// export default new RMRouter().router;
