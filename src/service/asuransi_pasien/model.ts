import { Optional, Model, DataTypes } from "sequelize";
import db from "../../config/database";
import AsuransiPasienAtribute from "./dto";
import PasienModel from "../pasien/model";
import ListAsuransi from "../list_asuransi/model";

interface AsuransiPasienCreationAttribute
  extends Optional<AsuransiPasienAtribute, "id"> {}
interface AsuransiPasienInstance
  extends Model<AsuransiPasienAtribute, AsuransiPasienCreationAttribute>,
    AsuransiPasienAtribute {}

const AsuransiPasien = db.define<AsuransiPasienInstance>("asuransi_pasien", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  no_asuransi: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  kelas: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pasien_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  asuransi_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

PasienModel.hasMany(AsuransiPasien, { foreignKey: "pasien_id" });
AsuransiPasien.belongsTo(PasienModel, { foreignKey: "pasien_id" });

ListAsuransi.hasMany(AsuransiPasien, { foreignKey: "asuransi_id" });
AsuransiPasien.belongsTo(ListAsuransi, { foreignKey: "asuransi_id" });

export default AsuransiPasien;
