import React from 'react';
import Background from "@/app/components/atoms/0.main/1.background";
import Header from "@/app/components/atoms/0.main/1.header";
import Container from "@/app/components/atoms/0.main/1.container";
import ContentWrapper from "@/app/components/atoms/0.main/1.content_wrapper";
import Header_Loginpage from "@/app/components/atoms/title_for_login";
import LoginForm from "./LoginForm"; // Adjust import path as necessary
import { signIn } from 'next-auth/react';
import { Login } from "@/app/components/interfaces/schema";
import { NextPage } from 'next';

const LoginPage: NextPage = () =>{

  return (
    <Container>
      <Background>
        <ContentWrapper>
          <Header>
            <Header_Loginpage />
          </Header>
          <LoginForm />
        </ContentWrapper>
      </Background>
    </Container>
  );
};

export default LoginPage;