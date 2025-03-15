import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import React from "react";

//TODO: More data to be added
const SignUp: React.FC = () => {
  return (
    <Card className="mr-2 ml-2 bg-gray-100">
      <CardHeader>
        <span className="text-2xl font-bold">Sign Up</span>
      </CardHeader>
      <CardContent>
        <div>
          <span>Student</span>
          <input
            type="text"
            placeholder="Student ID"
            className="mt-1 mb-1 w-full rounded-lg border border-gray-500 p-2"
          />
        </div>
        <div>
          <span>First name</span>
          <input
            type="text"
            placeholder="First name"
            className="mt-1 mb-1 w-full rounded-lg border border-gray-500 p-2"
          />
        </div>
        <div>
          <span>Last name</span>
          <input
            type="text"
            placeholder="Last name"
            className="mt-1 mb-1 w-full rounded-lg border border-gray-500 p-2"
          />
        </div>
        <div>
          <span>Email</span>
          <input
            type="text"
            placeholder="Email"
            className="mt-1 mb-1 w-full rounded-lg border border-gray-500 p-2"
          />
        </div>
        <div>
          <span>Password</span>
          <input
            type="password"
            placeholder="Password"
            className="mt-1 mb-1 w-full rounded-lg border border-gray-500 p-2"
          />
        </div>
        <div>
          <span>Confirm Password</span>
          <input
            type="password"
            placeholder="Password"
            className="mt-1 mb-1 w-full rounded-lg border border-gray-500 p-2"
          />
        </div>
      </CardContent>
      <CardFooter>
        <input
          type="submit"
          value="Sign Up"
          className="w-full rounded-lg bg-blue-500 p-2 text-white"
        />
      </CardFooter>
    </Card>
  );
};

export default SignUp;
