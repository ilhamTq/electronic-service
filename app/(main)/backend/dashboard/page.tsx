import ComponentDashboard from '@/components/dashboard/components-dashboard-finance';
// import prisma from '@/lib/prisma';
import { Metadata } from 'next';
import React from 'react';
import { getJumlahPegawai, getSktm, getBelumNikah } from './fungsi';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';

export const metadata: Metadata = {
    title: 'Dashboard',
};

const Dashboard = async () => {
    const session = await getServerSession(authOptions);

    if (session?.user?.role && session?.user?.role > 4) return <h1>Selamat Datang</h1>;
    return (
        <ComponentDashboard
            pegawai = {await getJumlahPegawai()}
            sktm = {await getSktm()}
            belumNikah = {await getBelumNikah()}
        />
    );
};

export default Dashboard;
