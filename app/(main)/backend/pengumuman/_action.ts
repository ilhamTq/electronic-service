"use server";

import prisma from "@/lib/prisma";
import { PengumumanSchema, PengumumanEditSchema } from "@/src/schema/pengumuman";
import Pengumuman_Type from "@/src/types/pengumuman";
import { Prisma } from "@prisma/client";
import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export const savePengumuman = async (data: Pengumuman_Type) => {
  const result = PengumumanSchema.safeParse(data);

  if (result.success) {
    const sessionToken =
      cookies().get("next-auth.session-token")?.value ??
      cookies().get("__Secure-next-auth.session-token")?.value;

    const decoded = await decode({
      token: sessionToken,
      secret: String(process.env.NEXTAUTH_SECRET),
    });

    try {
      if (data.pengumuman_id)
        await prisma.pengumuman.update({
          data: {
            pengumuman_judul: data.pengumuman_judul,
            pengumuman_isi: data.pengumuman_isi,
          },
          where: {
            pengumuman_id: data.pengumuman_id
          }
        });
      else
        await prisma.pengumuman.create({
          data: {
            pengumuman_judul: data.pengumuman_judul,
            pengumuman_isi: data.pengumuman_isi,
          }
        })

    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        return { success: false, error: e.message }
      }
      throw e;
    }
    return { success: true, data: result };
  }
  if (result.error) {
    return { success: false, error: result.error.format() };
  }
};

export async function deletePengumuman(id: number) {
  const res = await prisma.pengumuman.update({
    where: { pengumuman_id: id },
    data: { pengumuman_deleted: new Date() },
  })
  return res
}