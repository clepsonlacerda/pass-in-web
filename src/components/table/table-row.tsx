import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface TableRowProps extends ComponentProps<'tr'> { }

export function TableRow(props: TableRowProps) {
  return (
    <tr
      {...props}
      className="border border-white/10 hover:bg-white/10"
    />
  );
}