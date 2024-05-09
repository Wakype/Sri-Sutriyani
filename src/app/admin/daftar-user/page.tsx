import { NextPage } from 'next';
import CustomTable from '@/components/table';
import { daftarUser } from '@/config/daftarUser';

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <div className="w-full">
      <CustomTable
        data={daftarUser.data}
        columns={daftarUser.columns}
        title="daftar uuser"
      />
    </div>
  );
};

export default Page;
