import * as React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "relative bg-white border border-slate-100 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6",
        className
      )}
      {...props}
    />
  );
});

Card.displayName = "Card";

export { Card };
export default Card;
