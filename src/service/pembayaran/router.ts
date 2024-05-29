import BaseRouter from "../base";
import { Request, Response } from "express";
import PembayaranCrud from "./logic";
import validator from "./validator";

class PembayaranRouter extends BaseRouter {
  routes(): void {
    this.router.post(
      "/",
      validator.createPembayaran(),
      async (req: Request, res: Response): Promise<Response> => {
        console.log(req.body);
        const msg = await PembayaranCrud.createPembayara(req.body);
        return res.status(200).json("berhasill");
      }
    );
    this.router.get(
      "/",
      async (req: Request, res: Response): Promise<Response> => {
        const allPembayaran = await PembayaranCrud.getAllPembayaran();
        return res.status(200).json(allPembayaran);
      }
    );
    this.router.delete(
      "/",
      async (req: Request, res: Response): Promise<Response> => {
        const Pembayaran = await PembayaranCrud.deletePembayaran(
          parseInt(req.params.id)
        );
        return res.status(200).json(Pembayaran);
      }
    );
  }
}
export default new PembayaranRouter().router;
