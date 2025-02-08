"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SubmitButton from "@/components/ui/SubmitButton";
import { signup } from "@/lib/auth";
import React, { useActionState } from "react";
import { useFormState } from "react-dom";

const SignupForm = () => {
  const [state, action] = useActionState(signup, undefined);

  return (
    <form action={action}>
      <div className="flex flex-col gap-4">
        {state?.message && (
          <p className="text-sm text-red-700">
            {state.message}
          </p>
        )}

        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="John Doe"
          />
          {state?.error?.name && (
            <p className="text-sm text-red-700">
              {state.error.name}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            placeholder="john@example.com"
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
        <SubmitButton>Sign Up</SubmitButton>
      </div>
    </form>
  );
};

export default SignupForm;
