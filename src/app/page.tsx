'use client';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import CustomButton from '@/components/button';
import CustomInput from '@/components/Input';
import { useRouter } from 'next/navigation';

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string().required('Password is required'),
});

export default function Home() {
  const router = useRouter();

  const handleLogin = async (
    values: { email: string; password: string },
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    if (
      values.email === 'admin@gmail.com' &&
      values.password === 'sri sutriyani'
    ) {
      router.replace('/admin/daftar-produk');
    } else {
      alert('Invalid email or password');
    }
    setSubmitting(false);
  };

  return (
    <main className="w-screen h-screen relative flex justify-center items-center bg-putih">
      <section className="rounded-3xl bg-[#F5F5F5] w-[40%] p-16 flex flex-col items-center gap-y-10">
        <h1 className="text-black font-bold text-2xl">Login Admin</h1>

        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          {({ isSubmitting }) => (
            <Form className="w-full flex flex-col gap-y-5">
              <Field
                as={CustomInput}
                id="email"
                title="Email"
                type="email"
                borderRadius={'full'}
                name="email"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500"
              />
              <Field
                as={CustomInput}
                id="password"
                title="Password"
                type="password"
                borderRadius={'full'}
                name="password"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500"
              />

              <div className="w-full flex justify-center">
                <CustomButton
                  type="submit"
                  borderRadius="full"
                  className="w-1/2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Logging in...' : 'Login'}
                </CustomButton>
              </div>
            </Form>
          )}
        </Formik>
      </section>

      <div className="absolute top-5 right-5 rounded-lg bg-primary p-2 px-5">
        <h1 className="text-white font-mono font-bold text-lg">CREDENTIALS</h1>
        <p className="text-white font-mono text-sm">Email : admin@gmail.com</p>
        <p className="text-white font-mono text-sm">Password : sri sutriyani</p>
      </div>
      <div className="absolute bottom-5 left-5 rounded-lg bg-primary p-2 px-5">
        <p className="text-white font-mono text-sm">© 2024 Sri Sutriyani</p>
      </div>
    </main>
  );
}
