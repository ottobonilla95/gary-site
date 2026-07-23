"use client";

import type { FormEvent } from "react";
import { useState } from "react";

export function useFormMessage() {
  const [sent, setSent] = useState(false);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  };

  return { sent, submit };
}
