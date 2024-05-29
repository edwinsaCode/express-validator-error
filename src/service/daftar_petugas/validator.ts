import { check } from "express-validator";
import Validator from "../../midlleware/validator";

class DaftarPetugasValidator extends Validator {
  public createDaftarPetugas = () => [
    check("nama_petugas")
      .isString()
      .withMessage("tipe data salah")
      .isLength({ min: 1 })
      .withMessage("data tidak boleh kosong"),
    check("tupoksi")
      .isString()
      .withMessage("tipe data salah")
      .isLength({ min: 1 })
      .withMessage("data tidak boleh kosong"),
    check("poli_id")
      .isString()
      .withMessage("tipe data salah")
      .isLength({ min: 1 })
      .withMessage("data tidak boleh kosong"),
    this.Validate,
  ];
}
export default new DaftarPetugasValidator();
