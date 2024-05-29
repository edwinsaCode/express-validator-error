import BaseRouter from "../base";
import { Request, Response } from "express";
import RegistrasiCrud from "./logic";
import validator from "./validator";

class RegisRouter extends BaseRouter {
  routes(): void {
    this.router.post(
      "/",
      validator.createRegistration(),
      async (req: Request, res: Response): Promise<Response> => {
        // const msg = await Regis.save(req.body);
        const regis = await RegistrasiCrud.createRegis(req.body);
        return res.status(200).json("success");
      }
    );
    this.router.delete(
      "/",
      async (req: Request, res: Response): Promise<Response> => {
        const msg = await RegistrasiCrud.deleteRegis(parseInt(req.params.id));
        return res.status(200).json(msg);
      }
    );
    this.router.get(
      "/",
      async (req: Request, res: Response): Promise<Response> => {
        // const msg = await Regis.get(req.body.id);
        const allRegis = await RegistrasiCrud.getAllRegis();
        return res.status(200).json(allRegis);
      }
    );
    // this.router.get(
    //   "/dataantrian",
    //   async (req: Request, res: Response): Promise<Response> => {
    // const msg = await Regis.getAntrian(req.query.poliId as string);
    //     console.log(req.query.poliId as string);
    //     return res.status(200).json(allRegis);
    //   }
    // );
    this.router.put(
      "/:id",
      validator.createRegistration(),
      async (req: Request, res: Response): Promise<Response> => {
        const msg = await RegistrasiCrud.updateRegis(req.params.body);
        return res.status(200).json(msg);
      }
    );
    this.router.get(
      "/registration-pasien",
      async (req: Request, res: Response): Promise<Response> => {
        const msg = await RegistrasiCrud.getAllRegistrationWithPasienAndPoli();
        return res.status(200).json(msg);
      }
    );
  }
}

export default new RegisRouter().router;
