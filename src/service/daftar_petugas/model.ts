import { Optional, Model, DataTypes } from "sequelize";
import db from "../../config/database";
import DaftarPetugasAtribute from "./dto";
import JenisPoli from "../jenis_poli/model";

interface DaftarPetugasCreationAttribute
  extends Optional<DaftarPetugasAtribute, "id"> {}
interface DaftarPetugasInstance
  extends Model<DaftarPetugasAtribute, DaftarPetugasCreationAttribute>,
    DaftarPetugasAtribute {}

const DaftarPetugas = db.define<DaftarPetugasInstance>("daftar_petugas", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  nama_petugas: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tupoksi: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  poli_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

JenisPoli.hasMany(DaftarPetugas, { foreignKey: "poli_id" });
DaftarPetugas.belongsTo(JenisPoli, { foreignKey: "poli_id" });

export default DaftarPetugas;
