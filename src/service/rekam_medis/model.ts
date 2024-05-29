import { Optional, Model, DataTypes } from "sequelize";
import db from "../../config/database";
import RekamMedisAtribute from "./dto";
import Registration from "../registration/model";
import PasienModel from "../pasien/model";
import Kamar from "../kamar/model";

interface RekamMedisCreationAtribute
  extends Optional<RekamMedisAtribute, "id"> {}
interface RekamMedisInstance
  extends Model<RekamMedisAtribute, RekamMedisCreationAtribute>,
    RekamMedisAtribute {}

const RekamMedis = db.define<RekamMedisInstance>("rekam_medis", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  deskripsi: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tindakan: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  registrasi_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  kamar_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Registration.hasMany(RekamMedis, { foreignKey: "registrasi_id" });
RekamMedis.belongsTo(Registration, { foreignKey: "registrasi_id" });

PasienModel.hasMany(RekamMedis, { foreignKey: "pasien_id" });
RekamMedis.belongsTo(PasienModel, { foreignKey: "pasien_id" });

Kamar.hasMany(RekamMedis, { foreignKey: "kamar_id" });
RekamMedis.belongsTo(Kamar, { foreignKey: "kamar_id" });

export default RekamMedis;
