"use client";
import React, { PropsWithChildren } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "./button";

const SubmitButton = ({ children }: PropsWithChildren) => {
  const { pending } = useFormStatus();
  return (
    <Button
      variant={"secondary"}
      type="submit"
      aria-disabled={pending}
      className="w-full font-bold"
    >
      {pending ? "Submitting..." : children}
    </Button>
  );
};

export default SubmitButton;
