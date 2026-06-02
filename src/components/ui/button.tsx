"use client";

import { tv } from "tailwind-variants";
import Text from "./text";
import { CircleNotchIcon } from "@phosphor-icons/react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  loading?: boolean;
  className?: string;
}

const buttonVariants = tv({
  base: "w-full sm:max-w-72 bg-yellow-300 p-4 border border-transparent hover:border-yellow-500 focus-visible:outline focus-visible:outline-[2px] focus-visible:outline-white rounded-md cursor-pointer transition-colors duration-300 flex items-center justify-center gap-2",
  variants: {
    loading: {
      true: "opacity-50 cursor-not-allowed hover:border-transparent"
    }
  },
  defaultVariants: {
    loading: false
  }
});

export default function Button({
  children,
  loading,
  className,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={buttonVariants({ className, loading })}
      disabled={loading}
      {...rest}
    >
      {loading && (
        <CircleNotchIcon className="animate-spin text-gray-900 size-5" />
      )}
      <Text size="titleMedium" className="text-gray-900">
        {children}
      </Text>
    </button>
  );
}
