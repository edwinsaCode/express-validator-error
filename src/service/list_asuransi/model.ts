import { Optional, Model, DataTypes } from "sequelize";
import db from "../../config/database";
import ListAsuransiAtribute from "./dto";

interface ListAsuransiCreationAtribute
  extends Optional<ListAsuransiAtribute, "id"> {}
interface ListAsuransiInstance
  extends Model<ListAsuransiAtribute, ListAsuransiCreationAtribute>,
    ListAsuransiAtribute {}

const ListAsuransi = db.define<ListAsuransiInstance>("list_asuransi", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  nama_asuransi: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  aktif: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  persen_ditanggung: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default ListAsuransi;
