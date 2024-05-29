import JenisPoli from "../jenis_poli/logic";
import GenereteAntrianAtribute from "./dto";
import GenereteAntrian from "./model";

class GenereteAntrianCrud {
  public async getNoAntrianById(
    poli_id: string,
    tanggal: Date
  ): Promise<GenereteAntrianAtribute> {
    const generateNewAntrian = await GenereteAntrian.findOne({
      where: { poli_id: poli_id, tanggal: tanggal },
    });
    return generateNewAntrian!;
  }
  public async createAntrian(data: any): Promise<boolean> {
    await GenereteAntrian.create({
      no: 1,
      poli_id: data.poli_id,
      tanggal: data.tanggal,
    });
    return true;
  }
  public async updateAntrian(data: any): Promise<boolean> {
    await GenereteAntrian.update(
      {
        no: data.no,
        poli_id: data.poli_id,
        tanggal: data.tanggal,
      },
      { where: { poli_id: data.poli_id, tanggal: data.tanggal } }
    );
    return true;
  }
  public async generateAntrian(poli_id: string, date: Date): Promise<any> {
    try {
      let noAntrian = "";
      let prefix = 0;

      const generateNoAntrian = await this.getNoAntrianById(poli_id, date);
      if (generateNoAntrian) {
        console.log(generateNoAntrian);
        await this.updateAntrian({
          no: generateNoAntrian.no + 1,
          tanggal: date,
          poli_id: poli_id,
        });
        prefix = generateNoAntrian.no + 1;
      } else {
        await this.createAntrian({ poli_id: poli_id, tanggal: date });
        prefix = 1;
      }
      let formater = "";
      for (let i = 0; i < 5 - prefix.toString().length; i++) {
        formater = "0";
      }
      const poli = await JenisPoli.getAllJenisPoliById(poli_id);
      noAntrian = poli.nama_poli + "-" + formater + prefix;
      console.log(noAntrian);
      return noAntrian;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
  public async deleteAntrian(id: number): Promise<boolean> {
    await GenereteAntrian.destroy({ where: { id: id } });
    return true;
  }
}
export default new GenereteAntrianCrud();
