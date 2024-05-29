import { check } from "express-validator";
import Validator from "../../midlleware/validator";

class RekamMedisValidator extends Validator {
  public createRM = () => [
    check("deskripsi")
      .isString()
      .withMessage("tipe data salah")
      .isLength({ min: 1 })
      .withMessage("data tidak boleh kosong"),
    check("tindakan")
      .isString()
      .withMessage("tipe data salah")
      .isLength({ min: 1 })
      .withMessage("data tidak boleh kosong"),
    check("registrasi_id")
      .isString()
      .withMessage("tipe data salah")
      .isLength({ min: 1 })
      .withMessage("data tidak boleh kosong"),
    check("kamar_id")
      .isString()
      .withMessage("tipe data salah")
      .isLength({ min: 1 })
      .withMessage("data tidak boleh kosong"),
    this.Validate,
  ];
}
export default new RekamMedisValidator();
