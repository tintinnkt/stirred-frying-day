"use client";

import { actionLogin } from "@/app/actions/login_action";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import React, { useState } from "react";

const SignIn: React.FC = () => {
  const [submitError, setSubmitError] = useState<string>("");

  const handleLoginAction = (formData: FormData) => {
    actionLogin(formData).then((res) => {
      if (res.error) {
        setSubmitError(res.error);
      }
    });
  };

  return (
    <form action={handleLoginAction}>
      <Card className="mr-2 ml-2 bg-gray-100">
        <CardHeader>
          <span className="text-2xl font-bold">Sign Up</span>
        </CardHeader>
        <CardContent>
          <label>
            <span>Student</span>
            <input
              type="text"
              name="studentId"
              placeholder="Student ID"
              className="mt-1 mb-1 w-full rounded-lg border border-gray-500 p-2"
            />
          </label>
          <label>
            <span>Password</span>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="mt-1 mb-1 w-full rounded-lg border border-gray-500 p-2"
            />
          </label>
        </CardContent>
        <CardFooter className="block">
          <span className="p-1 text-red-500">{submitError}</span>
          <input
            type="submit"
            value="Sign In"
            className="w-full rounded-lg bg-blue-500 p-2 text-white"
          />
          <input type="hidden" name="redirectTo" value="/profile" />
        </CardFooter>
      </Card>
    </form>
  );
};

export default SignIn;
