import { NextPage } from 'next';
import CustomTable from '@/components/table';
import { daftarUser } from '@/config/daftarUser';

interface Props {}

const DaftarUser: NextPage<Props> = ({}) => {
  return (
    <div className="w-full">
      <CustomTable
        data={daftarUser.data}
        columns={daftarUser.columns}
        title="daftar user"
        addTitle="+ tambah user"
        isAddPage
      />
    </div>
  );
};

export default DaftarUser;
