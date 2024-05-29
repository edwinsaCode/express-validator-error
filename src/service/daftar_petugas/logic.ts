import DaftarPetugasAtribute from "./dto";
import DaftarPetugas from "./model";

class DaftarPetugasCrud {
  public async createDaftarPetugas(data: any): Promise<boolean> {
    try {
      await DaftarPetugas.create({
        nama_petugas: data.nama_petugas,
        tupoksi: data.tupoksi,
        poli_id: data.poli_id,
      });
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
  public async getAllDaftarPetugas(): Promise<DaftarPetugasAtribute[]> {
    const allDaftarPetugas = await DaftarPetugas.findAll();
    return allDaftarPetugas;
  }
  public async deleteDaftarPetugas(id: number): Promise<boolean> {
    await DaftarPetugas.destroy({ where: { id: id } });
    return true;
  }
  public async updateRegis(data: any): Promise<boolean> {
    await DaftarPetugas.update(
      {
        nama_petugas: data.nama_petugas,
        tupoksi: data.tupoksi,
        poli_id: data.poli_id,
      },
      { where: { id: data.id } }
    );
    return true;
  }
}

export default new DaftarPetugasCrud();
