import BaseRouter from "../base";
import { Request, Response } from "express";
import TarifUmumCrud from "./logic";
import validator from "./validator";

class TarifUmumRouter extends BaseRouter {
  routes(): void {
    this.router.get(
      "/",
      async (req: Request, res: Response): Promise<Response> => {
        const getRM = await TarifUmumCrud.getAllTarifUmum();
        return res.status(200).json(getRM);
      }
    );
    this.router.post(
      "/",
      validator.createTarifUmum(),
      async (req: Request, res: Response): Promise<Response> => {
        console.log(req.body);
        const post = await TarifUmumCrud.createTarifUmum(req.body);
        return res.status(200).json("berhasill");
      }
    );
    this.router.delete(
      "/",
      async (req: Request, res: Response): Promise<Response> => {
        const post = await TarifUmumCrud.deleteTarifUmum(req.body.id);
        return res.status(200).json("berhasill");
      }
    );
  }
}
export default new TarifUmumRouter().router;
