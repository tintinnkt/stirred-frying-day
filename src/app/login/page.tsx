import SignIn from "@/components/Signin";
import SignUp from "@/components/Signup";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

const LoginAndSignUp: React.FC = () => {
  return (
    <div className="w-screen">
      <Tabs defaultValue="Sign In">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="Sign In">Sign in</TabsTrigger>
          <TabsTrigger value="Sign Up">Sign up</TabsTrigger>
        </TabsList>
        <TabsContent value="Sign In">
          <SignIn />
        </TabsContent>
        <TabsContent value="Sign Up">
          <SignUp />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LoginAndSignUp;
