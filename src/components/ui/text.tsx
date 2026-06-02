import { Slot } from "@radix-ui/react-slot";
import { tv } from "tailwind-variants";

type TextProps = {
  as?: React.HTMLElementType;
  children: React.ReactNode;
  size?:
    | "textSmall"
    | "textMedium"
    | "titleSmall"
    | "titleMedium"
    | "titleLarge";
  className?: string;
  asChild?: boolean;
};

const textVariants = tv({
  base: "font-bold leading-6 text-gray-300",
  variants: {
    size: {
      textSmall: "text-sm font-normal leading-5",
      textMedium: "text-base font-normal",
      titleSmall: "text-sm leading-5",
      titleMedium: "text-base",
      titleLarge: "text-3xl"
    }
  },
  defaultVariants: {
    size: "textMedium"
  }
});

export default function Text({
  asChild,
  size,
  className,
  as: Tag = "span",
  ...props
}: TextProps) {
  const Component = asChild ? Slot : Tag;

  return <Component className={textVariants({ size, className })} {...props} />;
}
