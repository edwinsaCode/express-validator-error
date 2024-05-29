import BaseRouter from "../base";
import { Request, Response } from "express";
import AsuransiPasienCrud from "./logic";
import validator from "./validator";

class RMRouter extends BaseRouter {
  routes(): void {
    this.router.post(
      "/",
      validator.createAsuransiPasien(),
      async (req: Request, res: Response): Promise<Response> => {
        const post = await AsuransiPasienCrud.createAsuransiPasien(req.body);
        console.log(post);
        return res.status(200).json("berhasill");
      }
    );
    this.router.get(
      "/",
      async (req: Request, res: Response): Promise<Response> => {
        const getAsuransi = await AsuransiPasienCrud.getAllAsuransiPasien();
        return res.status(200).json(getAsuransi);
      }
    );
    this.router.delete(
      "/",
      async (req: Request, res: Response): Promise<Response> => {
        const del = await AsuransiPasienCrud.deleteAsuransiPasien(req.body.id);
        return res.status(200).json("berhasill");
      }
    );
  }
}
export default new RMRouter().router;
