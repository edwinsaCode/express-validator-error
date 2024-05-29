import AntrianAttribute from "./dto";
import AntrianModel from "./model";

class AntrianCrud {
  public async createAntrian(data: any): Promise<boolean> {
    try {
      await AntrianModel.create({
        no_antrian: data.no_antrian,
        registrasi_id: data.registrasi_id,
      });
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
  public async getAllAntrian(): Promise<AntrianAttribute[]> {
    const allAntrian = await AntrianModel.findAll();
    return allAntrian;
  }
  public async deleteAntrian(id: number): Promise<boolean> {
    await AntrianModel.destroy({ where: { id: id } });
    return true;
  }
  public async updateAntrian(data: any): Promise<boolean> {
    await AntrianModel.update(
      {
        no_antrian: data.no_antrian,
        registrasi_id: data.registrasi_id,
      },
      { where: { id: data.id } }
    );
    return true;
  }
}
export default new AntrianCrud();
