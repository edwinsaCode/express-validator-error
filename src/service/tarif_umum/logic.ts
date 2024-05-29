import TarifUmumAtribute from "./dto";
import TarifUmum from "./model";

class TarifUmumCrud {
  public async createTarifUmum(data: any): Promise<boolean> {
    try {
      await TarifUmum.create({
        jumlah_hari: data.jumlah_hari,
        total_bayar: data.total_bayar,
        poli_id: data.poli_id,
        kamar_id: data.kamar_id,
        rekam_medis_id: data.rekam_medis_id,
      });
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
  public async getAllTarifUmum(): Promise<TarifUmumAtribute[]> {
    const allTarif = await TarifUmum.findAll();
    return allTarif;
  }
  public async deleteTarifUmum(id: number): Promise<boolean> {
    await TarifUmum.destroy({ where: { id: id } });
    return true;
  }
  public async updateTarifUmum(data: any): Promise<boolean> {
    await TarifUmum.update(
      {
        jumlah_hari: data.jumlah_hari,
        total_bayar: data.total_bayar,
        poli_id: data.poli_id,
        kamar_id: data.kamar_id,
        rekam_medis_id: data.rekam_medis_id,
      },
      { where: { id: data.id } }
    );
    return true;
  }
}
export default new TarifUmumCrud();
