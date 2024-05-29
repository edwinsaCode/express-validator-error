import { Optional, Model, DataTypes } from "sequelize";
import db from "../../config/database";
import RegisAtribute from "./dto";
import PasienModel from "../pasien/model";
import JenisPoli from "../jenis_poli/model";
import AsuransiPasien from "../asuransi_pasien/model";

interface RegisCreationAtribute extends Optional<RegisAtribute, "id"> {}
interface RegisInstance
  extends Model<RegisAtribute, RegisCreationAtribute>,
    RegisAtribute {}

const Registration = db.define<RegisInstance>("registration", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  asuransi: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  pasien_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  poli_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  asuransi_pasien_id: {
    type: DataTypes.STRING,
  },
});

PasienModel.hasMany(Registration, { foreignKey: "pasien_id" });
Registration.belongsTo(PasienModel, { foreignKey: "pasien_id", as: "pasien" });

JenisPoli.hasMany(Registration, { foreignKey: "poli_id" });
Registration.belongsTo(JenisPoli, { foreignKey: "poli_id" });

AsuransiPasien.hasMany(Registration, { foreignKey: "asuransi_pasien_id" });
Registration.belongsTo(AsuransiPasien, { foreignKey: "asuransi_pasien_id" });

export default Registration;
