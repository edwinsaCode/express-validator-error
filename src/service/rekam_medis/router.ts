import BaseRouter from "../base";
import { Request, Response } from "express";
import RekamMedisCrud from "./logic";
import validator from "./validator";

class RMRouter extends BaseRouter {
  routes(): void {
    this.router.get(
      "/",
      async (req: Request, res: Response): Promise<Response> => {
        const getRM = await RekamMedisCrud.getAllRekamMedis();
        return res.status(200).json(getRM);
      }
    );
    this.router.post(
      "/",
      validator.createRM(),
      async (req: Request, res: Response): Promise<Response> => {
        console.log(req.body);
        const post = await RekamMedisCrud.createRekamMedi(req.body);
        return res.status(200).json("berhasill");
      }
    );
    this.router.delete(
      "/",
      async (req: Request, res: Response): Promise<Response> => {
        const post = await RekamMedisCrud.deleteRekamMedis(
          parseInt(req.body.id)
        );
        return res.status(200).json("berhasill");
      }
    );
  }
}
export default new RMRouter().router;
