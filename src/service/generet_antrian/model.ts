import { Optional, Model, DataTypes } from "sequelize";
import db from "../../config/database";
import GenereteAntrianAtribute from "./dto";
import JenisPoli from "../jenis_poli/model";

interface GenereteAntrianCreationAtribute
  extends Optional<GenereteAntrianAtribute, "id"> {}
interface GenereteAntrianInstance
  extends Model<GenereteAntrianAtribute, GenereteAntrianCreationAtribute>,
    GenereteAntrianAtribute {}

const GenereteAntrian = db.define<GenereteAntrianInstance>("generete_antrian", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  no: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  tanggal: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  poli_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

JenisPoli.hasMany(GenereteAntrian, { foreignKey: "poli_id" });
GenereteAntrian.belongsTo(JenisPoli, { foreignKey: "poli_id" });

export default GenereteAntrian;
