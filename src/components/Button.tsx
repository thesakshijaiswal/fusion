import { HTMLAttributes } from "react";

export default function Button(
  props: {
    variants: "primary" | "secondary";
  } & HTMLAttributes<HTMLButtonElement>,
) {
  return <button></button>;
}
