import { NextPage } from 'next';
import CustomTable from '@/components/table';
import { riwayatTransaksi } from '@/config/riwayatTransaksi';

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <div className="w-full">
      <CustomTable
        data={riwayatTransaksi.data}
        columns={riwayatTransaksi.columns}
        title="daftar riwayat transaksi"
      />
    </div>
  );
};

export default Page;
