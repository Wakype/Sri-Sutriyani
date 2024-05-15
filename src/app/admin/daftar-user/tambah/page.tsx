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
  namaUser: Yup.string().required('Nama User is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm Password is required'),
});

const TambahUser: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const currentNav = pathname?.split('/')[2];
  const showToast = useCustomToast();

  const initialValues = {
    namaUser: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const handleSubmit = async (values: typeof initialValues) => {
    showToast({
      title: 'Submitting...',
      description: 'Your user is being submitted.',
      status: 'info',
    });

    try {
      console.log(values);
      showToast({
        title: 'Success',
        description: 'User has been added successfully.',
        status: 'success',
      });
      return router.replace(`/admin/${currentNav}`);
    } catch (error) {
      showToast({
        title: 'Error',
        description: 'An error occurred while adding the user.',
        status: 'error',
      });
    }
  };

  return (
    <div className="w-full p-4">
      <Box bg="white" p={6} rounded="md" shadow="md">
        <Heading as="h2" size="lg" mb={4} textTransform={'capitalize'}>
          tambah user
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
                  id="namaUser"
                  name="namaUser"
                  title="Nama User"
                  isInvalid={touched.namaUser && !!errors.namaUser}
                  errorMessage={errors.namaUser}
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
                <Field
                  as={CustomInput}
                  id="confirmPassword"
                  name="confirmPassword"
                  title="Confirm Password"
                  type="password"
                  isInvalid={
                    touched.confirmPassword && !!errors.confirmPassword
                  }
                  errorMessage={errors.confirmPassword}
                />
              </SimpleGrid>
              <div className="w-full flex justify-end mt-4">
                <CustomButton type="submit" size="md">
                  Tambah User
                </CustomButton>
              </div>
            </Form>
          )}
        </Formik>
      </Box>
    </div>
  );
};

export default TambahUser;
