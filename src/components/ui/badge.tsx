import { tv } from "tailwind-variants";
import Text from "./text";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  selected?: boolean;
}

const badgeVariants = tv({
  base: "py-2 px-4 bg-gray-600 rounded-lg text-gray-200 hover:bg-gray-500 border border-gray-500 cursor-pointer transition-colors duration-300 ",
  variants: {
    selected: {
      true: "border-yellow-300 text-yellow-300 hover:bg-gray-600"
    },
    disabled: {
      true: "opacity-50 border-gray-600 bg-transparent hover:bg-transparent cursor-not-allowed"
    }
  },
  defaultVariants: {
    selected: false,
    disabled: false
  }
});

export default function Badge({
  children,
  className,
  selected,
  disabled,
  ...rest
}: BadgeProps) {
  return (
    <Text size="textMedium" asChild>
      <span
        aria-disabled={disabled}
        className={badgeVariants({ className, selected, disabled })}
        {...rest}
      >
        {children}
      </span>
    </Text>
  );
}
