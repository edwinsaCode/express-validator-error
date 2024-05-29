import BaseRouter from "../base";
import { Request, Response } from "express";
import KamarCrud from "./logic";
import validator from "./validator";

class KamarRouter extends BaseRouter {
  routes(): void {
    this.router.post(
      "/",
      validator.createKamr(),
      async (req: Request, res: Response): Promise<Response> => {
        console.log(req.body);
        const poli = await KamarCrud.createKamar(req.body);
        return res.status(200).json("berhasill");
      }
    );
    this.router.get(
      "/",
      async (req: Request, res: Response): Promise<Response> => {
        const allRegis = await KamarCrud.getAllKamar();
        return res.status(200).json(allRegis);
      }
    );
    this.router.delete(
      "/",
      async (req: Request, res: Response): Promise<Response> => {
        const allRegis = await KamarCrud.deleteKamar(parseInt(req.params.id));
        return res.status(200).json(allRegis);
      }
    );
    this.router.put(
      "/",
      validator.createKamr(),
      async (req: Request, res: Response): Promise<Response> => {
        const allRegis = await KamarCrud.updateKamar(req.params.body);
        return res.status(200).json(allRegis);
      }
    );
  }
}

export default new KamarRouter().router;
