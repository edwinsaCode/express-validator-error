import KamarAtribute from "./dto";
import Kamar from "./model";

class KamarCrud {
  public async createKamar(data: any): Promise<boolean> {
    try {
      await Kamar.create({
        nama_kamar: data.nama_kamar,
        jumlah_bed: data.jumlah_bed,
        tarif_per_malam: data.tarif_per_malam,
        list_asuransi_id: data.list_asuransi_id,
      });
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
  public async getAllKamar(): Promise<KamarAtribute[]> {
    const allKamar = await Kamar.findAll();
    return allKamar;
  }
  public async deleteKamar(id: number): Promise<boolean> {
    await Kamar.destroy({ where: { id: id } });
    return true;
  }
  public async updateKamar(data: any): Promise<boolean> {
    await Kamar.update(
      {
        nama_kamar: data.nama_kamar,
        jumlah_bed: data.jumlah_bed,
        tarif_per_malam: data.tarif_per_malam,
        list_asuransi_id: data.list_asuransi_id,
      },
      { where: { id: data.id } }
    );
    return true;
  }
}
export default new KamarCrud();
