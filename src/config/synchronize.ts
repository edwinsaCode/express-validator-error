import db from "./database";
import PasienModel from "../service/pasien/model";
import Registration from "../service/registration/model";
import JenisPoli from "../service/jenis_poli/model";
import AsuransiPasien from "../service/asuransi_pasien/model";
import GenereteAntrian from "../service/generet_antrian/model";
import DaftarPetugas from "../service/daftar_petugas/model";
import RekamMedis from "../service/rekam_medis/model";
import Kamar from "../service/kamar/model";
import Pembayaran from "../service/pembayaran/model";
import AntrianModel from "../service/antrian/model";
import ListAsuransi from "../service/list_asuransi/model";
import GenereteRM from "../service/generete_rm/model";
import TarifUmum from "../service/tarif_umum/model";

export const Synchronize = async () => {
  try {
    await db.authenticate();
    await TarifUmum.sync({ alter: true });
    await GenereteRM.sync({ alter: true });
    await JenisPoli.sync({ alter: true });
    await PasienModel.sync({ alter: true });
    await ListAsuransi.sync({ alter: true });
    await AsuransiPasien.sync({ alter: true });
    await GenereteAntrian.sync({ alter: true });
    await Registration.sync({ alter: true });
    await Kamar.sync({ alter: true });
    await RekamMedis.sync({ alter: true });
    await DaftarPetugas.sync({ alter: true });
    await Pembayaran.sync({ alter: true });
    await AntrianModel.sync({ alter: true });
  } catch (err) {
    throw err;
  }
};
