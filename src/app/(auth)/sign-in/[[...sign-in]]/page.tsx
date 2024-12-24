import { SignIn } from "@clerk/nextjs";
import React from "react";

const SignInPage: React.FC = () => {
  return (
    <main className="flex h-screen items-center justify-center p-3">
      <SignIn />
    </main>
  );
};

export default SignInPage;
