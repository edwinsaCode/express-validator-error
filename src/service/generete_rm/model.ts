import { Optional, Model, DataTypes } from "sequelize";
import db from "../../config/database";
import GenereteRMAtributes from "./dto";

interface GenereteRMCreationAttribute
  extends Optional<GenereteRMAtributes, "id"> {}
interface GenereteRMInstance
  extends Model<GenereteRMAtributes, GenereteRMCreationAttribute>,
    GenereteRMAtributes {}

const GenereteRM = db.define<GenereteRMInstance>("generete_rm", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  no: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  tahun: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  aktif: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

export default GenereteRM;
