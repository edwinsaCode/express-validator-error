import { check } from "express-validator";
import Validator from "../../midlleware/validator";

class PembayaranValidator extends Validator {
  public createPembayaran = () => [
    check("total").isInt().withMessage("tipe data salah"),
    check("status_paid").isBoolean().withMessage("tipe data salah"),
    check("registration_id")
      .isString()
      .withMessage("tipe data salah")
      .isLength({ min: 1 })
      .withMessage("data tidak boleh kosong"),
    check("asuransi_pasien_id")
      .isString()
      .withMessage("tipe data salah")
      .isLength({ min: 1 })
      .withMessage("data tidak boleh kosong"),
    this.Validate,
  ];
}
export default new PembayaranValidator();
