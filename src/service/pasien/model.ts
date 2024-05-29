import { Optional, Model, DataTypes } from "sequelize";
import db from "../../config/database";
import PasienAttribute from "./dto";

interface PasienCreationAttribute extends Optional<PasienAttribute, "id"> {}
interface PasienInstance
  extends Model<PasienAttribute, PasienCreationAttribute>,
    PasienAttribute {}

const PasienModel = db.define<PasienInstance>("data_pasien", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  no_rm: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  nama: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nik: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  alamat: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  kontak: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
export default PasienModel;
