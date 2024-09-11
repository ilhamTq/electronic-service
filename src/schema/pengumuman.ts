import { z } from "zod";

export const PengumumanSchema = z.object({
    pengumuman_id: z.number().optional(),
    pengumuman_judul: z.string({
        required_error: "Judul is Required"
    }),
    pengumuman_isi: z.string({
        required_error: "Konten Is Required"
    })
});

export const PengumumanEditSchema = z.object({
    pengumuman_id: z.number().optional(),
    pengumuman_judul: z.string({
        required_error: "Judul is Required"
    }),
    pengumuman_isi: z.string({
        required_error: "Konten Is Required"
    })
});
