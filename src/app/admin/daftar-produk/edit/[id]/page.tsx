'use client';
import { NextPage } from 'next';
import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import CustomInput from '@/components/Input';
import CustomButton from '@/components/button';
import { daftarProduk } from '@/config/daftarProduk';

interface Props {
  params: any;
}

const validationSchema = Yup.object({
  nama_produk: Yup.string().required('Nama Produk is required'),
  merk: Yup.string().required('Merk is required'),
  harga: Yup.number().required('Harga is required'),
  stok: Yup.number()
    .required('Stok is required')
    .min(0, 'Stok must be a positive number'),
});

const EditProduk: NextPage<Props> = ({
  params,
}: {
  params: { id: number };
}) => {
  console.log(params.id);

  const product = daftarProduk.data.find(
    (product) => product.id === Number(params.id)
  );

  if (!product) {
    return <div className="capitalize">produk tidak ditemukan</div>;
  }

  const handleSubmit = async (values: typeof product) => {};

  return (
    <div className="w-full p-4">
      <Box bg="white" p={6} rounded="md" shadow="md">
        <Heading as="h2" size="lg" mb={4} textTransform={'capitalize'}>
          Edit Produk
        </Heading>
        <Formik
          initialValues={product}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                <Field
                  as={CustomInput}
                  id="nama_produk"
                  name="nama_produk"
                  title="Nama Produk"
                  isInvalid={touched.nama_produk && !!errors.nama_produk}
                  errorMessage={errors.nama_produk}
                />
                <Field
                  as={CustomInput}
                  id="merk"
                  name="merk"
                  title="Merk"
                  isInvalid={touched.merk && !!errors.merk}
                  errorMessage={errors.merk}
                />
                <Field
                  as={CustomInput}
                  id="harga"
                  name="harga"
                  title="Harga"
                  isInvalid={touched.harga && !!errors.harga}
                  errorMessage={errors.harga}
                />
                <Field
                  as={CustomInput}
                  id="stok"
                  name="stok"
                  title="Stok"
                  isInvalid={touched.stok && !!errors.stok}
                  errorMessage={errors.stok}
                />
              </SimpleGrid>

              <div className="w-full flex justify-end mt-4">
                <CustomButton type="submit" size="md">
                  Simpan
                </CustomButton>
              </div>
            </Form>
          )}
        </Formik>
      </Box>
    </div>
  );
};

export default EditProduk;
