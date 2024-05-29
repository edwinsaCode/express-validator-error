import { Optional, Model, DataTypes } from "sequelize";
import db from "../../config/database";
import AntrianAttribute from "./dto";
import Registration from "../registration/model";

interface AntrianCreatianAttribute extends Optional<AntrianAttribute, "id"> {}
interface AntrianInstance
  extends Model<AntrianAttribute, AntrianCreatianAttribute>,
    AntrianAttribute {}

const AntrianModel = db.define<AntrianInstance>("antrian", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  no_antrian: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  registrasi_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Registration.hasMany(AntrianModel, { foreignKey: "registrasi_id" });
AntrianModel.belongsTo(Registration, { foreignKey: "registrasi_id" });

export default AntrianModel;
