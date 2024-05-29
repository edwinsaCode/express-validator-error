import { Optional, Model, DataTypes } from "sequelize";
import db from "../../config/database";
import JenisPoliAtribute from "./dto";

interface JenisPoliCreationAtribute extends Optional<JenisPoliAtribute, "id"> {}
interface JenisPoliInstance
  extends Model<JenisPoliAtribute, JenisPoliCreationAtribute>,
    JenisPoliAtribute {}

const JenisPoli = db.define<JenisPoliInstance>("jenis_poli", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  nama_poli: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default JenisPoli;
