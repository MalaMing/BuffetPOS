"use client";

import { ConfirmDialog } from "@/components/manager/confirmDialog";
import useToastHandler from "@/lib/toastHanlder";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useGetTables} from "@/api/manager/useTable";
import { BaseTableResponse} from "@/interfaces/table";
import TableCard from "@/components/manager/tableCard";
import LoadingAnimation from "@/components/manager/loadingAnimation";
import { useGetAllUnpaidInvoices } from "@/api/manager/useInvoice";
import DateTimeDisplay from "@/components/manager/clock";


export default function AllPaymentPage() {
  const {data:unpaidInvoices =[], isLoading: loadingUnpaidInvoices,refetch: refetchUnpaidInvoices } = useGetAllUnpaidInvoices();
  const {data:getTables =[], isLoading: loadingAvailableTables,refetch: refetchAvailableTables } = useGetTables();

  const filteredTables = getTables.filter(table =>
    unpaidInvoices.some(invoice => invoice.tableId === table.id)
  );
  
  if (loadingUnpaidInvoices || loadingAvailableTables) {
    return <LoadingAnimation />;
  }
  return (
    
    <div className="w-full flex flex-col gap-10">
      <div className="flex flex-row justify-between">
      </div>
      <div>
        {Array.isArray(filteredTables) && filteredTables.length > 0 ? (
          filteredTables.map((table: BaseTableResponse) => (
            <div key={table.id} className="flex flex-col items-center gap-3">
              <div className="flex flex-row items-center w-full mt-10">
                <div className="w-full font-bold px-2">
                  <TableCard key={table.id} table={table} refetchUnpaidInvoices={refetchUnpaidInvoices} />
                </div>
              </div>
              <div 
                className="w-[54rem] text-whereBlack overflow-x-scroll border-2 rounded-lg"
                style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                }}
              >
              </div>
            </div>
          ))
          ) : (
            <p>No tables now</p>
          )
        }
      </div>
    </div>
  );

  }
