import BaseRouter from "../base";
import { Request, Response } from "express";
import DaftarPetugasCrud from "./logic";
import Validator from "./validator";

class PetugasRouter extends BaseRouter {
  routes(): void {
    this.router.post(
      "/",
      Validator.createDaftarPetugas(),
      async (req: Request, res: Response): Promise<Response> => {
        console.log(req.body);
        const petugas = await DaftarPetugasCrud.createDaftarPetugas(req.body);
        return res.status(200).json("berhasill");
      }
    );
    this.router.get(
      "/",
      async (req: Request, res: Response): Promise<Response> => {
        // const msg = await Regis.get(req.body.id);
        const allPetugas = await DaftarPetugasCrud.getAllDaftarPetugas();
        return res.status(200).json(allPetugas);
      }
    );
    this.router.delete(
      "/",
      async (req: Request, res: Response): Promise<Response> => {
        const msg = await DaftarPetugasCrud.deleteDaftarPetugas(
          parseInt(req.params.id)
        );
        return res.status(200).json(msg);
      }
    );
    this.router.put(
      "/:id",
      Validator.createDaftarPetugas(),
      async (req: Request, res: Response): Promise<Response> => {
        const msg = await DaftarPetugasCrud.updateRegis(req.params.body);
        return res.status(200).json(msg);
      }
    );
  }
}

export default new PetugasRouter().router;
