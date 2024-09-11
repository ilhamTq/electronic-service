// import { authOptions } from "@/lib/authOptions";
import prisma from "@/lib/prisma";
import { TURBO_TRACE_DEFAULT_MEMORY_LIMIT } from "next/dist/shared/lib/constants";
// import { getServerSession } from "next-auth";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  // const page = Number(searchParams.get('page'));
  // const limit = Number(searchParams.get('limit'));
  const q = searchParams.get("q");
  // const ttd = searchParams.get('ttd');
  const sortField = searchParams.get("sortField");
  const sortDirection = searchParams.get("sortDirection");
  //   const session = await getServerSession(authOptions);

  // if (!searchParams.get("page") || !searchParams.get("limit")) return Response.json({ message: "invalid" });
  const data = await prisma.tani.findMany({
    select: {
      tani_id: true,
      tani_nomor: true,
      tani_nama: true,
      tani_jabatan: true,
      tani_sekretariat: true,
      tani_alamat: true,
      tani_keperluan: true,
      tani_tujuanBantuan: true,
      ttd_tani: {
        select: {
          user_nama: true,
          jabatan: {
            select: {
              jabatan_nama: true,
            },
          },
        },
      },
    },
    // take: limit ? limit : undefined,
    // skip: page === 1 ? 0 : limit * (page - 1),
    where: {
      tani_nama: { contains: q ?? undefined },
      tani_deleted: null,
    },
    orderBy: sortField ? { [sortField]: sortDirection } : { tani_nama: "asc" },
  });
  let total = 0;
  //   if (searchParams.get("page") && searchParams.get("limit"))
  //     total = await prisma.users.count({ where: { user_nama: { contains: q ?? undefined }, user_level: { gt: 1 }, user_opd: Number(session?.user?.opd), user_deleted: null } });

  return Response.json({ data, total });
}
