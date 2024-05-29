import GenereteAntrianCrud from "../generet_antrian/logic";
import JenisPoli from "../jenis_poli/model";
import PasienModel from "../pasien/model";
import RegisAtribute from "./dto";
import RegistrationModel from "./model";
import AntrianCrud from "../antrian/logic";

class RegistrasiCrud {
  public async createRegis(
    data: Omit<RegisAtribute, "id"> & { tanggal: Date }
  ): Promise<boolean> {
    try {
      console.log(data.tanggal);
      const antrian = await GenereteAntrianCrud.generateAntrian(
        data.poli_id,
        data.tanggal
      );
      const regisSave = await RegistrationModel.create({
        asuransi: data.asuransi,
        pasien_id: data.pasien_id,
        poli_id: data.poli_id,
        asuransi_pasien_id:
          data.asuransi_pasien_id!.length > 0 ? data.asuransi_pasien_id : null,
      });
      await AntrianCrud.createAntrian({
        no_antrian: antrian,
        registrasi_id: regisSave.id,
      });
      return true;
    } catch {
      return false;
    }
  }
  public async getAllRegis(): Promise<RegisAtribute[]> {
    const allRegis = await RegistrationModel.findAll();
    return allRegis;
  }
  public async deleteRegis(id: number): Promise<boolean> {
    await RegistrationModel.destroy({ where: { id: id } });
    return true;
  }
  public async updateRegis(data: any): Promise<boolean> {
    await RegistrationModel.update(
      {
        asuransi: data.asuransi,
        pasien_id: data.pasien_id,
        poli_id: data.poli_id,
        asuransi_pasien_id: data.asuransi_pasien_id,
      },
      { where: { id: data.id } }
    );
    return true;
  }
  public async getAllRegistrationWithPasienAndPoli(): Promise<RegisAtribute[]> {
    const allRegistration = await RegistrationModel.findAll({
      include: [
        {
          model: PasienModel,
          attributes: { exclude: ["createdAt", "updatedAt"] },
          as: "pasien",
        },
        { model: JenisPoli, attributes: ["nama_poli"] },
      ],
      attributes: ["id", "asuransi", "pasien_id"],
      order: [["id", "ASC"]],
    });
    return allRegistration;
  }
}
export default new RegistrasiCrud();
