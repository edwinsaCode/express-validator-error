import { Optional, Model, DataTypes } from "sequelize";
import db from "../../config/database";
import PembayaranAtribute from "./dto";
import Registration from "../registration/model";
import AsuransiPasien from "../asuransi_pasien/model";

interface PembayaranCreationAtribute
  extends Optional<PembayaranAtribute, "id"> {}
interface PembyaranInstance
  extends Model<PembayaranAtribute, PembayaranCreationAtribute>,
    PembayaranAtribute {}

const Pembayaran = db.define<PembyaranInstance>("pembayaran", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  total: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status_paid: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  registration_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  asuransi_pasien_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Registration.hasMany(Pembayaran, { foreignKey: "registration_id" });
Pembayaran.belongsTo(Registration, { foreignKey: "registration_id" });

AsuransiPasien.hasMany(Pembayaran, { foreignKey: "asuransi_pasien_id" });
Pembayaran.belongsTo(AsuransiPasien, { foreignKey: "asuransi_pasien_id" });

export default Pembayaran;
