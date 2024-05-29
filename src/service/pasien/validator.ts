import { check } from "express-validator";
import Validator from "../../midlleware/validator";

class PasienValidator extends Validator {
  public createPasien = () => [
    check("nama")
      .isString()
      .withMessage("tipe data salah")
      .isLength({ min: 16 })
      .withMessage("data tidak boleh kosong"),
    check("nik")
      .isString()
      .withMessage("tipe data salah")
      .isLength({ min: 16 })
      .withMessage("data tidak boleh kosong"),
    check("alamat")
      .isString()
      .withMessage("tipe data salah")
      .isLength({ min: 16 })
      .withMessage("data tidak boleh kosong"),
    check("kontak")
      .isString()
      .withMessage("tipe data salah")
      .isLength({ min: 16 })
      .withMessage("data tidak boleh kosong"),
    this.Validate,
  ];
}
export default new PasienValidator();
