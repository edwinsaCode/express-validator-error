import RekamMedisAtribute from "./dto";
import RekamMedis from "./model";

class RekamMedisCrud {
  public async createRekamMedi(data: any): Promise<boolean> {
    try {
      await RekamMedis.create({
        deskripsi: data.deskripsi,
        tindakan: data.tindakan,
        registrasi_id: data.registrasi_id,
        kamar_id: data.kamar_id,
      });
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
  public async getAllRekamMedis(): Promise<RekamMedisAtribute[]> {
    const allRM = await RekamMedis.findAll();
    return allRM;
  }
  public async deleteRekamMedis(id: number): Promise<boolean> {
    await RekamMedis.destroy({ where: { id: id } });
    return true;
  }
  public async updateRekamMedis(data: any): Promise<boolean> {
    await RekamMedis.update(
      {
        deskripsi: data.deskripsi,
        tindakan: data.tindakan,
        registrasi_id: data.registrasi_id,
        kamar_id: data.kamar_id,
      },
      { where: { id: data.id } }
    );
    return true;
  }
}
export default new RekamMedisCrud();
