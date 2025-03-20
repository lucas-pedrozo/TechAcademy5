import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva("bg-black", {
  variants: {
  },
});

function Button({
  className,
  ...props
}: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants>) {
  return (
    <button
      data-slot="button"
      className={cn(buttonVariants({ className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
