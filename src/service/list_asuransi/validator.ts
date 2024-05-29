import { check } from "express-validator";
import Validator from "../../midlleware/validator";

class ListAsuransiValidator extends Validator {
  public createListAsuransi = () => [
    check("nama_asuransi")
      .isString()
      .withMessage("tipe data salah")
      .isLength({ min: 1 })
      .withMessage("data tidak boleh kosong"),
    check("aktif").isBoolean().withMessage("tipe data salah"),
    check("persen_ditanggung").isInt().withMessage("tipe data salah"),
    this.Validate,
  ];
}
export default new ListAsuransiValidator();
