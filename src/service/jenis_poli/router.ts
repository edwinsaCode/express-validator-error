import BaseRouter from "../base";
import { Request, Response } from "express";
import JenisPoliCrud from "./logic";
import Validator from "./validator";

class PoliRouter extends BaseRouter {
  routes(): void {
    this.router.post(
      "/",
      Validator.createPoli(),
      async (req: Request, res: Response): Promise<Response> => {
        console.log(req.body);
        const poli = await JenisPoliCrud.createPoli(req.body);
        return res.status(200).json("berhasill");
      }
    );
    this.router.get(
      "/",
      async (req: Request, res: Response): Promise<Response> => {
        const getPasien = await JenisPoliCrud.getAllJenisPoli();
        return res.status(200).json(getPasien);
      }
    );
    this.router.put(
      "/:id",
      async (req: Request, res: Response): Promise<Response> => {
        const msg = await JenisPoliCrud.updatePoli(req.params.id);
        return res.status(200).json(msg);
      }
    );
  }
}

export default new PoliRouter().router;
