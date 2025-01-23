"use client";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import Head from "next/head";
import Login from "./component/Login";

const LoginBox = () => {
  return (
    <>
        <Head>
        <title>Your Website Name | Login</title>
        <meta name="description" content="Login page for LoginKaro. Secure your account with ease." />
        <meta name="keywords" content="login, website, authentication, secure login" />
        <meta name="author" content="LoginKaro" />
      </Head>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        bgcolor="#f5f5f5"
      >
        <Login />
      </Box>
    </>
  );
};

export default LoginBox;
