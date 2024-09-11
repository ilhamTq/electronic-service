import User_Type from "./users";

export default interface Pengumuman_Type {
pengumuman_id?: number;
pengumuman_judul: string;
pengumuman_isi: string;
pengumuman_created?: Date;
pengumuman_updated?: Date;
pengumuman_deleted?: Date;
createdBy?: User_Type;
}