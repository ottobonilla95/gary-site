"use client";

import {
  createContext,
  useContext,
  useState,
  type ButtonHTMLAttributes,
  type ReactNode,
} from "react";
import { BookingDialog } from "@/components/booking-dialog";
import type { Language } from "@/lib/i18n";

type BookingContextValue = {
  openBooking: (description?: string) => void;
};

const BookingContext = createContext<BookingContextValue | null>(null);

export function BookingProvider({
  children,
  language,
}: {
  children: ReactNode;
  language: Language;
}) {
  const [open, setOpen] = useState(false);
  const [description, setDescription] = useState("");

  function openBooking(nextDescription = "") {
    setDescription(nextDescription);
    setOpen(true);
  }

  return (
    <BookingContext.Provider value={{ openBooking }}>
      {children}
      <BookingDialog
        language={language}
        open={open}
        initialDescription={description}
        onClose={() => setOpen(false)}
      />
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) throw new Error("useBooking must be used within BookingProvider");
  return context;
}

type BookingButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> & {
  description?: string;
};

export function BookingButton({
  children,
  className = "",
  description,
  onClick,
  ...props
}: BookingButtonProps) {
  const { openBooking } = useBooking();

  return (
    <button
      {...props}
      type="button"
      className={`booking-trigger ${className}`.trim()}
      aria-haspopup="dialog"
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) openBooking(description);
      }}
    >
      {children}
    </button>
  );
}
