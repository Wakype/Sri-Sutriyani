import { NextPage } from 'next';
import CustomTable from '@/components/table';
import { daftarProduk } from '@/config/daftarProduk';

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <div className="w-full">
      <CustomTable
        data={daftarProduk.data}
        columns={daftarProduk.columns}
        title="daftar produk"
        addTitle="+ tambah produk"
        isAddPage
      />
    </div>
  );
};

export default Page;
