import BaseRouter from "../base";
import { Request, Response } from "express";
import PasienCrud from "./logic";
import validator from "./validator";

class PasienRouter extends BaseRouter {
  routes(): void {
    this.router.get(
      "/",
      async (req: Request, res: Response): Promise<Response> => {
        const allPasien = await PasienCrud.getAllPasien();
        return res.status(200).json(allPasien);
      }
    );
    // this.router.get(
    //   "/:no_rm",
    //   async (req: Request, res: Response): Promise<Response> => {
    //     const getPasienByNoRM = await PasienCrud.getPasieByNoRM(
    //       parseInt(req.params.no_rm)
    //     );
    //     return res.status(200).json(getPasienByNoRM);
    //   }
    // );

    this.router.get(
      "/no-rm",
      async (req: Request, res: Response): Promise<Response> => {
        const AllPasien = await PasienCrud.getPasieByNoRM(
          Number(req.query.no_rm)
        );
        return res.status(200).json(AllPasien);
      }
    );

    this.router.post(
      "/",
      validator.createPasien(),
      async (req: Request, res: Response): Promise<Response> => {
        const pasien = await PasienCrud.createPasien(req.body);
        console.log(pasien);
        return res.status(200).json("berhasill");
      }
    );
    this.router.delete(
      "/:id",
      async (req: Request, res: Response): Promise<Response> => {
        const pasien = await PasienCrud.deletPasienById(
          parseInt(req.params.id)
        );
        console.log(pasien);
        return res.status(200).json("berhasill");
      }
    );
  }
}
export default new PasienRouter().router;
