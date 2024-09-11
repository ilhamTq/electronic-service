import prisma from '@/lib/prisma';

export const getJumlahPegawai = async () => {
    return await prisma.users.count({
        where: {
            user_deleted: null,
        },
    });
};

export const getSktm = async () => {
    return await prisma.sktm.count({
        where: {
            sktm_deleted: null,
        },
    });
};

export const getBelumNikah = async () => {
    return await prisma.belumNikah.count({
        where: {
            nikah_deleted: null,
        }
    })
}
