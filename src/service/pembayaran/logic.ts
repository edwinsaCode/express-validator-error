import PembayaranAtribute from "./dto";
import Pembayaran from "./model";

class PembayaranCrud {
  public async createPembayara(data: any): Promise<boolean> {
    try {
      await Pembayaran.create({
        total: data.total,
        status_paid: data.status_paid,
        registration_id: data.registration_id,
        asuransi_pasien_id: data.asuransi_pasien_id,
      });
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
  public async getAllPembayaran(): Promise<PembayaranAtribute[]> {
    const allPembayaaran = await Pembayaran.findAll();
    return allPembayaaran;
  }
  public async deletePembayaran(id: number): Promise<boolean> {
    await Pembayaran.destroy({ where: { id: id } });
    return true;
  }
  public async updatePembayaran(data: any): Promise<boolean> {
    await Pembayaran.update(
      {
        total: data.total,
        status_paid: data.status_paid,
        registration_id: data.registration_id,
        asuransi_pasien_id: data.asuransi_pasien_id,
      },
      { where: { id: data.id } }
    );
    return true;
  }
}

export default new PembayaranCrud();
