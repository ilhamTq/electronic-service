'use client';
// import Dropdown from '@/components/dropdown';
import IconCircleCheck from '@/components/icon/icon-circle-check';
import IconEye from '@/components/icon/icon-eye';
// import IconHorizontalDots from '@/components/icon/icon-horizontal-dots';
import IconInfoCircle from '@/components/icon/icon-info-circle';
import { formatNumber } from '@/lib/format_number';
// import { IRootState } from '@/store';
import dayjs from 'dayjs';
import Link from 'next/link';
// import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';

// Import Prisma functions

// Modify ComponentsDashboard component
const ComponentsDashboard = ({
    pegawai,
    sktm,
    belumNikah,
}: {
    pegawai: number;
    sktm: number;
    belumNikah: number;
}) => {
    return (
        <div>
            <ul className="flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link href="/dashboard" className="text-primary hover:underline">
                        Dashboard
                    </Link>
                </li>
            </ul>
            <div className="pt-5">
                <div className="mb-6 grid grid-cols-1 gap-6 text-white sm:grid-cols-2 xl:grid-cols-4">
                    <div className="panel bg-gradient-to-r from-cyan-500 to-cyan-400">
                        <div className="flex justify-between">
                            <div className="text-md font-semibold ltr:mr-1 rtl:ml-1">Jumlah Pegawai</div>
                        </div>
                        <div className="mt-5 flex items-center">
                            <div className="text-3xl font-bold ltr:mr-3 rtl:ml-3"> {pegawai} </div>
                        </div>
                    </div>

                    <div className="panel bg-gradient-to-r from-violet-500 to-violet-400">
                        <div className="flex justify-between">
                            <div className="text-md font-semibold ltr:mr-1 rtl:ml-1">Jumlah SKTM</div>
                        </div>
                        <div className="mt-5 flex items-center">
                            <div className="text-3xl font-bold ltr:mr-3 rtl:ml-3"> {sktm} </div>
                        </div>
                    </div>

                    <div className="panel bg-gradient-to-r from-blue-500 to-blue-400">
                        <div className="flex justify-between">
                            <div className="text-md font-semibold ltr:mr-1 rtl:ml-1">Jumlah Surat Keterangan Belum Menikah</div>
                        </div>
                        <div className="mt-5 flex items-center">
                            <div className="text-3xl font-bold ltr:mr-3 rtl:ml-3"> {belumNikah} </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComponentsDashboard;

