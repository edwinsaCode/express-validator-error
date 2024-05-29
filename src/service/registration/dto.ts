export default interface RegisAtribute {
  id: number;
  asuransi: boolean;
  pasien_id: string;
  poli_id: string;
  asuransi_pasien_id?: string | null;
}
