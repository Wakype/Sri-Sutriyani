'use client';
import React from 'react';
import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { usePathname, useRouter } from 'next/navigation';
import CustomInput from '@/components/Input';
import CustomButton from '@/components/button';
import useCustomToast from '@/components/toast';

const validationSchema = Yup.object({
  namaProduk: Yup.string().required('Nama Produk is required'),
  merk: Yup.string().required('Merk is required'),
  harga: Yup.number()
    .required('Harga is required')
    .positive('Harga must be a positive number'),
  stok: Yup.number()
    .required('Stok is required')
    .min(0, 'Stok cannot be negative'),
});

const TambahProduk: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const currentNav = pathname?.split('/')[2];
  const showToast = useCustomToast();

  const initialValues = {
    namaProduk: '',
    merk: '',
    harga: '',
    stok: '',
  };

  const handleSubmit = async (values: typeof initialValues) => {
    showToast({
      title: 'Submitting...',
      description: 'Your product is being submitted.',
      status: 'info',
    });

    try {
      console.log(values);
      showToast({
        title: 'Success',
        description: 'Product has been added successfully.',
        status: 'success',
      });
      return router.replace(`/admin/${currentNav}`);
    } catch (error) {
      showToast({
        title: 'Error',
        description: 'An error occurred while adding the product.',
        status: 'error',
      });
    }
  };

  return (
    <div className="w-full p-4">
      <Box bg="white" p={6} rounded="md" shadow="md">
        <Heading as="h2" size="lg" mb={4} textTransform={'capitalize'}>
          tambah produk
        </Heading>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                <Field
                  as={CustomInput}
                  id="namaProduk"
                  name="namaProduk"
                  title="Nama Produk"
                  isInvalid={touched.namaProduk && !!errors.namaProduk}
                  errorMessage={errors.namaProduk}
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
                  type="number"
                  isInvalid={touched.harga && !!errors.harga}
                  errorMessage={errors.harga}
                />
                <Field
                  as={CustomInput}
                  id="stok"
                  name="stok"
                  title="Stok"
                  type="number"
                  isInvalid={touched.stok && !!errors.stok}
                  errorMessage={errors.stok}
                />
              </SimpleGrid>
              <div className="w-full flex justify-end mt-4">
                <CustomButton type="submit" size="md">
                  Tambah Produk
                </CustomButton>
              </div>
            </Form>
          )}
        </Formik>
      </Box>
    </div>
  );
};

export default TambahProduk;
