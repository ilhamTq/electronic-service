import { Metadata } from 'next';
import React from 'react';
import TablePengumuman from './TablePengumuman';
import prisma from '@/lib/prisma';
import { PengumumanEditSchema } from '@/src/schema/pengumuman';

export const metadata: Metadata = {
    title: 'Data Pengumuman',
};


const Pengumuman = async () => {
    return <TablePengumuman />;
};

export default Pengumuman;
