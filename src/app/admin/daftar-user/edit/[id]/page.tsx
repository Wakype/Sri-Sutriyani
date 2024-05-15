'use client';
import { NextPage } from 'next';
import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import CustomInput from '@/components/Input';
import CustomButton from '@/components/button';
import { daftarUser } from '@/config/daftarUser';

interface Props {
  params: any;
}

const validationSchema = Yup.object({
  namaUser: Yup.string().required('Nama User is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long'),
});

const EditUser: NextPage<Props> = ({ params }: { params: { id: number } }) => {
  console.log(params.id);

  const user = daftarUser.data.find((user) => user.id === Number(params.id));

  if (!user) {
    return <div className="capitalize">user tidak ditemukan</div>;
  }

  const handleSubmit = async (values: typeof user) => {};

  return (
    <div className="w-full p-4">
      <Box bg="white" p={6} rounded="md" shadow="md">
        <Heading as="h2" size="lg" mb={4} textTransform={'capitalize'}>
          edit user
        </Heading>
        <Formik
          initialValues={user}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                <Field
                  as={CustomInput}
                  id="namaUser"
                  name="nama_user"
                  title="Nama User"
                  isInvalid={touched.nama_user && !!errors.nama_user}
                  errorMessage={errors.nama_user}
                />
                <Field
                  as={CustomInput}
                  id="email"
                  name="email"
                  title="Email"
                  type="email"
                  isInvalid={touched.email && !!errors.email}
                  errorMessage={errors.email}
                />
                <Field
                  as={CustomInput}
                  id="password"
                  name="password"
                  title="Password"
                  type="password"
                  isInvalid={touched.password && !!errors.password}
                  errorMessage={errors.password}
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

export default EditUser;
