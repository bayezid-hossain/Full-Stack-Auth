import Link from "next/link";
import React from "react";
import SignupForm from "./SignupForm";

const page = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-96 flex flex-col justify-center items-center">
      <h1 className="text-center text-2xl font-bold mb-4">
        Sign Up Page
      </h1>
      {/* sign up form */}
      <SignupForm />
      <div className="flex justify-between text-sm mt-2">
        <p>Already Have an account?</p>
        <Link className="underline" href={"/auth/signin"}>
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default page;
