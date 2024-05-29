import { check } from "express-validator";
import Validator from "../../midlleware/validator";

class TarifUmumValidator extends Validator {
  public createTarifUmum = () => [
    check("jumlah_hari").isInt().withMessage("tipe data salah"),
    check("total_bayar").isInt().withMessage("tipe data salah"),
    check("poli_id")
      .isString()
      .withMessage("tipe data salah")
      .isLength({ min: 1 })
      .withMessage("data tidak boleh kosong"),
    check("kamar_id")
      .isString()
      .withMessage("tipe data salah")
      .isLength({ min: 1 })
      .withMessage("data tidak boleh kosong"),
    check("rekam_medis_id")
      .isString()
      .withMessage("tipe data salah")
      .isLength({ min: 1 })
      .withMessage("data tidak boleh kosong"),
    this.Validate,
  ];
}
export default new TarifUmumValidator();
