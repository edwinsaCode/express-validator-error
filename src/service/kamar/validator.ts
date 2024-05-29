import { check } from "express-validator";
import Validator from "../../midlleware/validator";

class KamarValidator extends Validator {
  public createKamr = () => [
    check("nama_kamar")
      .isString()
      .withMessage("tipe data salah")
      .isLength({ min: 1 })
      .withMessage("data tidak boleh kosong"),
    check("jumlah_bed")
      .isInt({ min: 1 })
      .isNumeric()
      .withMessage("tipe data salah"),
    check("tarif_per_malam").isInt().withMessage("tipe data salah"),
    check("list_asuransi_id")
      .isString()
      .withMessage("tipe data salah")
      .isLength({ min: 1 })
      .withMessage("data tidak boleh kosong"),
    this.Validate,
  ];
}
export default new KamarValidator();
