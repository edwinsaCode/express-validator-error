import { Optional } from "sequelize";
import { body, check } from "express-validator";
import Validator from "../../midlleware/validator";
import { error } from "console";

class RegistrationValidator extends Validator {
  public createRegistration = () => [
    check("pasien_id")
      .isString()
      .withMessage("tipe data salah")
      .isLength({ min: 1 })
      .withMessage("data tidak boleh kosong"),
    check("asuransi").isBoolean().withMessage("tipe data salah"),
    check("poli_id")
      .isString()
      .withMessage("tipe data salah")
      .isLength({ min: 1 })
      .withMessage("data tidak boleh kosong"),
    check("asuransi_pasien_id").custom((value, { req }) => {
      console.log("???");
      if (req.body.asuransi) {
        if (value === "-") {
          throw new Error("data harus diisi");
        }
        console.log("???");
      } else {
        if (value !== "-") {
          throw new Error("data harus kosong");
        }
        console.log(value);
      }
    }),
    check("tanggal")
      .isString()
      .withMessage("tipe data salah")
      .isLength({ min: 1 })
      .withMessage("data tidak boleh kosong"),
    this.Validate,
  ];
}
export default new RegistrationValidator();
