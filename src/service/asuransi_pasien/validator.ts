import { check } from "express-validator";
import Validator from "../../midlleware/validator";

class AsuransiPasienValidator extends Validator {
  public createAsuransiPasien = () => [
    check("no_asuransi").isInt({ min: 3 }).withMessage("tipe data salah"),
    check("kelas")
      .isString()
      .withMessage("tipe data salah")
      .isLength({ min: 1 })
      .withMessage("data tidak boleh kosong"),
    check("pasien_id")
      .isString()
      .withMessage("tipe data salah")
      .isLength({ min: 1 })
      .withMessage("data tidak boleh kosong"),
    check("asuransi_id")
      .isString()
      .withMessage("tipe data salah")
      .isLength({ min: 1 })
      .withMessage("data tidak boleh kosong"),
    this.Validate,
  ];
}
export default new AsuransiPasienValidator();
