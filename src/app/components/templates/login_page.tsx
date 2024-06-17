import React, { useState } from "react";
import Background from "../atoms/0.main/1.background";
import Header from "../atoms/0.main/1.header";
import Container from "../atoms/0.main/1.container";
import ContentWrapper from "../atoms/0.main/1.content_wrapper";
import Header_Loginpage from "../atoms/title_for_login";
import LoginForm from "../molecules/LoginForm";
import { signIn } from 'next-auth/react';
import { Login } from "@/app/components/interfaces/schema";

const LoginPage: React.FC = () => {
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (identifier: string, password: string, type: string) => {
    try {
      const result = await signIn('credentials', {
        redirect: false,
        identifier,
        password,
        type
      });

      if (result?.error) {
        setError(result.error);
      } else {
        setError(null);
        // Redirect to a protected page or dashboard
        window.location.href = '/protected-page';
      }
    } catch (error) {
      console.error('Login failed:', error);
      setError('Login failed. Please try again.');
    }
  };

  return (
    <Container>
      <Background>
        <ContentWrapper>
          <Header>
            <Header_Loginpage />
          </Header>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <LoginForm onSubmit={handleSubmit} />
        </ContentWrapper>
      </Background>
    </Container>
  );
}

export default LoginPage;