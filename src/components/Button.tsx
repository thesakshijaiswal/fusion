import { ButtonHTMLAttributes } from "react";
import { cva } from "class-variance-authority";

const classes = cva("border rounded-full px-6 font-medium", {
  variants: {
    variant: {
      primary: "bg-lime-400 text-neutral-950 border-lime-400",
      secondary: "border-white text-white bg-transparent",
    },
    size: {
      sm: "h-10",
      default: "h-12",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export default function Button(
  props: {
    variant: "primary" | "secondary";
    size?: "sm" | "default";
  } & ButtonHTMLAttributes<HTMLButtonElement>,
) {
  const { variant, className, size, ...otherProps } = props;

  return (
    <button className={classes({ variant, size, className })} {...otherProps} />
  );
}
