import { check } from "express-validator";
import Validator from "../../midlleware/validator";

class JenisPoliValidator extends Validator {
  public createPoli = () => [
    check("nama_poli")
      .isString()
      .withMessage("tipe data salah")
      .isLength({ min: 1 })
      .withMessage("data tidak boleh kosong"),
    this.Validate,
  ];
}
export default new JenisPoliValidator();
