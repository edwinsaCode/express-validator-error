import PasienAttribute from "./dto";
import PasienModel from "./model";
import GenereteRMAtributes from "../generete_rm/dto";
import GenereteRM from "../generete_rm/model";

class PasienCrud {
  public async getAllPasien(): Promise<PasienAttribute[]> {
    const allPasien = await PasienModel.findAll();
    return allPasien;
  }

  public async getPasieByNoRM(no_rm: number): Promise<PasienAttribute> {
    const pasien = await PasienModel.findOne({ where: { no_rm: no_rm } });
    return pasien!;
  }

  public async deletPasienById(id: number): Promise<boolean> {
    await PasienModel.destroy({ where: { id: id } });
    return true;
  }

  private async getNoRM(): Promise<GenereteRMAtributes> {
    const tahun = new Date().getFullYear();
    const noRm = await GenereteRM.findOne({
      where: { tahun: tahun, aktif: true },
    });
    return noRm!;
  }
  private async createNoRM(data: any): Promise<boolean> {
    await GenereteRM.create({ tahun: data.tahun, aktif: data.aktif, no: 1 });
    return true;
  }
  private async updateNoRM(data: any): Promise<boolean> {
    await GenereteRM.update(
      { tahun: data.tahun, aktif: data.aktif, no: data.no },
      { where: { tahun: data.tahun } }
    );
    return true;
  }
  private async generateNoRM(): Promise<number> {
    const date = new Date().getFullYear();
    const tahun = date.toString().substring(2);
    let rm: string = "";
    let prefix = 0;

    const noRM = await this.getNoRM();
    if (noRM) {
      await this.updateNoRM({ tahun: date, aktif: 1, no: noRM.no + 1 });
      prefix = noRM.no + 1;
    } else {
      await this.createNoRM({ tahun: date, aktif: 1 });
      prefix = 1;
    }
    let formater = "";
    for (let i = 0; i < 5 - prefix.toString().length; i++) {
      formater += "0";
    }
    rm = tahun + formater + prefix;

    return parseInt(rm);
  }
  public async createPasien(data: any): Promise<boolean> {
    try {
      const no_rm = await this.generateNoRM();
      await PasienModel.create({
        no_rm: no_rm,
        nama: data.nama,
        nik: data.nik,
        alamat: data.alamat,
        kontak: data.kontak,
      });
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
}

export default new PasienCrud();
