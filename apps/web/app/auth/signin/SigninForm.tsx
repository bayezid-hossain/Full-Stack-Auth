"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SubmitButton from "@/components/ui/SubmitButton";
import { signin } from "@/lib/auth";
import Link from "next/link";
import React, { useActionState } from "react";

const SigninForm = () => {
  const [state, action] = useActionState(signin, undefined);
  return (
    <form action={action}>
      <div className="flex flex-col gap-2 w-64">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            placeholder="john@example.com"
            type="email"
          />
          {state?.error?.email && (
            <p className="text-sm text-red-700">
              {state.error.email}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
          />
          {state?.error?.password && (
            <div className="text-sm text-red-700">
              <p>Password must:</p>
              <ul>
                {state.error.password.map((error) => (
                  <li className="text-xs" key={error}>
                    {error}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <Link href={"#"} className="text-sm underline">
          Forgot your password?
        </Link>
        <SubmitButton>Sign In</SubmitButton>
        <div className="flex justify-center gap-x-2  text-sm">
          <p>Don't have an account?</p>
          <Link
            className="text-sm underline"
            href={"/auth/signup"}
          >
            Sign Up
          </Link>
        </div>
      </div>
    </form>
  );
};

export default SigninForm;
