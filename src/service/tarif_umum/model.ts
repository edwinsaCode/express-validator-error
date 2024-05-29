import { Optional, Model, DataTypes } from "sequelize";
import db from "../../config/database";
import TarifUmumAtribute from "./dto";

interface TarifUmumCreationAtribute extends Optional<TarifUmumAtribute, "id"> {}
interface TarifUmumInstance
  extends Model<TarifUmumAtribute, TarifUmumCreationAtribute>,
    TarifUmumAtribute {}

const TarifUmum = db.define<TarifUmumInstance>("tarif_umum", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  jumlah_hari: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  total_bayar: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  poli_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  kamar_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rekam_medis_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default TarifUmum;
