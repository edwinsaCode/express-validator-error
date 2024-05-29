import AsuransiPasienAtribute from "./dto";
import AsuransiPasien from "./model";

class AsuransiPasienCrud {
  public async createAsuransiPasien(data: any): Promise<boolean> {
    try {
      await AsuransiPasien.create({
        no_asuransi: data.no_asuransi,
        kelas: data.kelas,
        pasien_id: data.pasien_id,
        asuransi_id: data.asuransi_id,
      });
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
  public async getAllAsuransiPasien(): Promise<AsuransiPasienAtribute[]> {
    const allAsuransiPasien = await AsuransiPasien.findAll();
    return allAsuransiPasien;
  }
  public async deleteAsuransiPasien(id: number): Promise<boolean> {
    await AsuransiPasien.destroy({ where: { id: id } });
    return true;
  }
}

export default new AsuransiPasienCrud();
