import { useLayoutEffect, useMemo, useState } from "react";
import { Box } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../context/AuthProvider";
import { useNavigate, useParams } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";

export interface LoginFields {
  email: string;
  password: string;
}
export interface SignupFields extends LoginFields {
  first_name: string;
  last_name: string;
}

const Auth = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { authPage } = useParams();

  useLayoutEffect(() => {
    if (user) navigate("/app");
  }, [user]);

  const schema = {
    login: yup.object({
      email: yup
        .string()
        .email("ایمیل نامعتبر میباشد")
        .required("فیلد ایمیل الزامی است"),
      password: yup
        .string()
        .min(3, "رمز عبور باید حداقل 6 حرف باشد")
        .required("فیلد رمز عبور الزامی میباشد"),
    }),
    signup: yup.object({
      first_name: yup.string().required("فیلد نام الزامی است"),
      last_name: yup.string().required("فیلد نام خانوادگی الزامی است"),
      email: yup
        .string()
        .email("ایمیل نامعتبر میباشد")
        .required("فیلد ایمیل الزامی است"),
      password: yup
        .string()
        .min(3, "رمز عبور باید حداقل 6 حرف باشد")
        .required("فیلد رمز عبور الزامی میباشد"),
    }),
  };

  const currentSchema = useMemo(() => {
    if (authPage === "login") return schema.login;
    if (authPage === "signup") return schema.signup;
    return yup.object({});
  }, [authPage]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(currentSchema),
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const props = { register, handleSubmit, errors };
  //get component base on url paramas
  const component =
    authPage === "login" ? (
      <Login {...props} />
    ) : authPage === "signup" ? (
      <Signup {...props} />
    ) : (
      <div>404</div>
    );
  return (
    <Box
      width="100%"
      height="100vh"
      backgroundColor="gray.200"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {component}
    </Box>
  );
};
export default Auth;
