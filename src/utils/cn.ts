import clsx from "clsx";
import { twMerge } from "tailwind-merge";

// Utility function to merge and conditionally apply class names
export function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}