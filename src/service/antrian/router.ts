import BaseRouter from "../base";
import { Request, Response } from "express";
import AntrianCrud from "./logic";

class AntrianRouter extends BaseRouter {
  routes(): void {
    this.router.post(
      "/",
      async (req: Request, res: Response): Promise<Response> => {
        const poli = await AntrianCrud.createAntrian(req.body);
        console.log(req.body);
        return res.status(200).json("berhasill");
      }
    );
    this.router.get(
      "/",
      async (req: Request, res: Response): Promise<Response> => {
        const getPasien = await AntrianCrud.getAllAntrian();
        return res.status(200).json(getPasien);
      }
    );
    this.router.delete(
      "/",
      async (req: Request, res: Response): Promise<Response> => {
        const msg = await AntrianCrud.deleteAntrian(parseInt(req.params.id));
        return res.status(200).json(msg);
      }
    );
  }
}

export default new AntrianRouter().router;
