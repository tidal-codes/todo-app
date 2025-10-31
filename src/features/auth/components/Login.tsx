import { Input, VStack, Button, Box, Text, Link } from "@chakra-ui/react";
import { useState } from "react";
import { useAuth } from "../context/AuthProvider";
import { Link as RLink } from "react-router-dom";
import type {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import Field from "@/shared/ui/Field";

interface LoginFormProps {
  handleSubmit: UseFormHandleSubmit<
    {
      email: string;
      password: string;
    },
    {
      email: string;
      password: string;
    }
  >;
  register: UseFormRegister<{
    email: string;
    password: string;
  }>;
  errors: FieldErrors<{
    email: string;
    password: string;
  }>;
}

const Login = ({ register, handleSubmit, errors }: LoginFormProps) => {
  const { signIn } = useAuth();
  const [loading, setLoading] = useState(false);
  const onSubmit = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    setLoading(true);
    await signIn({ email, password });
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        width="100vw"
        maxWidth="350px"
        backgroundColor="white"
        p={3}
        borderRadius="md"
        border="1px solid"
        borderColor="gray.300"
      >
        <Box width="100%">
          <Text textAlign="start">ورود به حساب کاربری</Text>
        </Box>
        <Box py={3}>
          <Field
            key="login-email"
            label="ایمیل"
            error={errors.email?.message}
            register={register}
            registerValue="email"
          />
          <Field
            key="login-password"
            label="رمز عبور"
            error={errors.password?.message}
            register={register}
            registerValue="password"
          />
        </Box>
        <VStack width="100%">
          <Button width="100%" type="submit" loading={loading}>
            ورود
          </Button>
          <Button width="100%" variant="outline">
            ورود با حساب گوگل
          </Button>
        </VStack>

        <Text>
          اکانتی ندارید ؟<RLink to="/auth/signup">ثبت نام</RLink>
        </Text>
      </Box>
    </form>
  );
};

export default Login;
