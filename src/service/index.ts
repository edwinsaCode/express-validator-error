import express, { Router } from "express";
import Registration from "./registration/router";
import Pasien from "./pasien/router";
import DaftarPetugas from "./daftar_petugas/router";
import Poli from "./jenis_poli/router";
import ListAsuransi from "./list_asuransi/router";
import Antrian from "./antrian/router";
import AsuransiPasien from "./asuransi_pasien/router";
import Kamar from "./kamar/router";

const service: Router = express();

service.use("/registration", Registration);
service.use("/pasien", Pasien);
service.use("/petugas", DaftarPetugas);
service.use("/poli", Poli);
service.use("/listasuransi", ListAsuransi);
service.use("/antrian", Antrian);
service.use("/asuransipasien", AsuransiPasien);
service.use("/kamar", Kamar);

export default service;
