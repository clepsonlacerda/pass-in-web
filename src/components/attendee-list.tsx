import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreHorizontal, Search } from "lucide-react";
import { IconButton } from "./icon-button";
import { Table } from "./table/table";
import { TableHeader } from "./table/table-header";
import { TableCell } from "./table/table-cell ";
import { TableRow } from "./table/table-row";

export function AttendeeList() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3 items-center">
        <h1 className="text-2xl font-bold">
          participantes
        </h1>

        <div
          className="px-3 w-72 py-1.5 border border-white/10 rounded-lg text-sm flex items-center gap-3"
        >
          <Search className="size-4 text-emerald-300" />
          <input className="bg-transparent flex-1 outline-none border-0 p-0 text-sm" placeholder="Burcar participantes" />
        </div>
      </div>

      <Table className="w-full">
        <thead>
          <tr className="border border-white/10">
            <TableHeader style={{ width: 48 }} >
              <input type="checkbox" className="size-4 bg-black/20 rounded border border-white/10" />
            </TableHeader>
            <TableHeader>Código</TableHeader>
            <TableHeader>Participantes</TableHeader>
            <TableHeader>Data de inscrições</TableHeader>
            <TableHeader>Date do check-in</TableHeader>
            <TableHeader style={{ width: 64 }} />
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 8 }).map((_, i) => (
            <TableRow key={i} >
              <TableCell>
                <input type="checkbox" className="size-4 bg-black/20 rounded border border-white/10" />
              </TableCell>
              <TableCell>12345</TableCell>
              <TableCell>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-white">clepson lacerda</span>
                  <span>clepson@bvb.com</span>
                </div>
              </TableCell>
              <TableCell>7 dias atras</TableCell>
              <TableCell>3 dias atras</TableCell>
              <TableCell>
                <IconButton transparent={true} >
                  <MoreHorizontal className="size-4" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <TableCell colSpan={3}>
              mostrando 10 de 285 itens
            </TableCell>
            <TableCell className="text-right" colSpan={3}>
              <div className="inline-flex items-center gap-8">
                <span>
                  página 1 de 23
                </span>
                <div className="flex gap-1.5">
                  <IconButton>
                    <ChevronsLeft className="size-4" />
                  </IconButton>
                  <IconButton>
                    <ChevronLeft className="size-4" />
                  </IconButton>
                  <IconButton>
                    <ChevronRight className="size-4" />
                  </IconButton>
                  <IconButton>
                    <ChevronsRight className="size-4" />
                  </IconButton>
                </div>
              </div>
            </TableCell>
          </tr>
        </tfoot>
      </Table>
    </div>
  );
}