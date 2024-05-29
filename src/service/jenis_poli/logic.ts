import Kamar from "../kamar/model";
import JenisPoliAtribute from "./dto";
import JenisPoli from "./model";

class JenisPoliCrud {
  public async getAllJenisPoli(): Promise<JenisPoliAtribute[]> {
    const allPoli = await JenisPoli.findAll();
    return allPoli;
  }
  public async getAllJenisPoliById(id: string): Promise<JenisPoliAtribute> {
    const allPoli = await JenisPoli.findOne({ where: { id } });
    return allPoli!;
  }
  public async createPoli(data: any): Promise<boolean> {
    try {
      await JenisPoli.create({
        nama_poli: data.nama_poli,
      });
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
  public async updatePoli(data: any): Promise<boolean> {
    await JenisPoli.update(
      {
        nama_poli: data.nama_poli,
      },
      { where: { id: data.id } }
    );
    return true;
  }
  public async deletePoli(id: number): Promise<boolean> {
    await Kamar.destroy({ where: { id: id } });
    return true;
  }
}

export default new JenisPoliCrud();
