import { Input, VStack, Button, Box, Text, Link } from "@chakra-ui/react";
import { useState } from "react";
import type {
  UseFormHandleSubmit,
  UseFormRegister,
  FieldErrors,
} from "react-hook-form";
import { Link as RLink } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

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

const Signup = ({ register, handleSubmit, errors }: LoginFormProps) => {
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
          <Input
            key="signup-first-name"
            {...register("password")}
            placeholder="hello world"
          />
          <Box>
            <Input
              key="signup-email"
              {...register("email")}
              placeholder="hello world"
              mb={3}
            />
            <Text>{errors.email?.message}</Text>
          </Box>
          <Input
            key="signup-password"
            {...register("password")}
            placeholder="hello world"
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
      </Box>
    </form>
  );
};

export default Signup;
