import ListAsuransiAtribute from "./dto";
import ListAsuransi from "./model";

class ListAsuransiCrud {
  public async createListAsuransi(data: any): Promise<boolean> {
    try {
      await ListAsuransi.create({
        nama_asuransi: data.nama_asuransi,
        aktif: data.aktif,
        persen_ditanggung: data.persen_ditanggung,
      });
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
  public async getAllListAsuransi(): Promise<ListAsuransiAtribute[]> {
    const allListAsuransi = await ListAsuransi.findAll();
    return allListAsuransi;
  }
  public async deleteListAsuransi(id: number): Promise<boolean> {
    await ListAsuransi.destroy({ where: { id: id } });
    return true;
  }
  public async updateListAsuransi(data: any): Promise<boolean> {
    await ListAsuransi.update(
      {
        nama_asuransi: data.nama_asuransi,
        aktif: data.aktif,
        persen_ditanggung: data.persen_ditanggung,
      },
      { where: { id: data.id } }
    );
    return true;
  }
}

export default new ListAsuransiCrud();
