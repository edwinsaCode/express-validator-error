import BaseRouter from "../base";
import { Request, Response } from "express";
import AsuransiCrud from "./logic";
import validator from "./validator";

class AsuransiRouter extends BaseRouter {
  routes(): void {
    this.router.post(
      "/",
      validator.createListAsuransi(),
      async (req: Request, res: Response): Promise<Response> => {
        console.log(req.body);
        await AsuransiCrud.createListAsuransi(req.body);
        return res.status(200).json("berhasil");
      }
    );
    this.router.get(
      "/",
      async (req: Request, res: Response): Promise<Response> => {
        console.log(req.body);
        const msg = await AsuransiCrud.getAllListAsuransi();
        return res.status(200).json(msg);
      }
    );
    this.router.delete(
      "/",
      async (req: Request, res: Response): Promise<Response> => {
        const allRegis = await AsuransiCrud.deleteListAsuransi(
          parseInt(req.params.id)
        );
        return res.status(200).json(allRegis);
      }
    );
  }
}
export default new AsuransiRouter().router;
