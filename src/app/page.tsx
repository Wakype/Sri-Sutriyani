'use client';
import CustomButton from '@/components/button';
import CustomInput from '@/components/Input';
import { useRouter } from 'next/navigation';

export default function Home() {
  const route = useRouter();
  return (
    <main className="w-screen h-screen flex justify-center items-center bg-putih">
      <section className="rounded-3xl bg-[#F5F5F5] w-[40%] p-16 flex flex-col items-center gap-y-10">
        <h1 className="text-black font-bold text-2xl">Login Admin</h1>

        <div className="w-full flex flex-col gap-y-5">
          <CustomInput
            id="email"
            title="Email"
            type="email"
            borderRadius={'full'}
            // values={values.title}
            // handleChange={handleChange}
            // handleBlur={handleBlur}
            // isInvalid={!!errors?.title}
            // errorMessage={errors?.title}
          />
          <CustomInput
            id="password"
            title="Password"
            type="password"
            borderRadius={'full'}
            // values={values.title}
            // handleChange={handleChange}
            // handleBlur={handleBlur}
            // isInvalid={!!errors?.title}
            // errorMessage={errors?.title}
          />
        </div>

        <CustomButton
          borderRadius="full"
          className="w-1/2"
          onClick={() => route.replace('/admin/daftar-produk')}
        >
          Login
        </CustomButton>
      </section>
    </main>
  );
}
