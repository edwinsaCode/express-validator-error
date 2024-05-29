import { Optional, Model, DataTypes } from "sequelize";
import db from "../../config/database";
import KamarAtribute from "./dto";

interface KamarCreationAtribute extends Optional<KamarAtribute, "id"> {}
interface KamarInstance
  extends Model<KamarAtribute, KamarCreationAtribute>,
    KamarAtribute {}

const Kamar = db.define<KamarInstance>("kamar", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  nama_kamar: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  jumlah_bed: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  tarif_per_malam: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  list_asuransi_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Kamar;
