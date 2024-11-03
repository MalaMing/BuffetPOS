"use client";
import { AddTableRequest, BaseTableResponse } from "@/interfaces/table";
import React, { useState } from "react";
import TableNameCard from "../../../components/TableNameCard";
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import ModifyPriceDialog from "@/components/manager/ModifyPriceDialog";
import { useAddTable, useGetTables } from "@/api/manager/useTable";
import { useForm } from "react-hook-form";
import LoadingAnimation from "@/components/manager/loadingAnimation";

const page = () => {
    const [openModifyPriceDialog, setOpenModifyPriceDialog] = useState(false);
    const [netPricePerPerson, setNetPricePerPerson] = useState(250);
    const [ openCreateTableDialog, setOpenCreateTableDialog ] = useState(false);
 
    const { data: tables, isLoading: loadingTables, refetch: refetchTables } = useGetTables();
    const addTable = useAddTable();

    const {
        register: tableNameForm,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();

    if (loadingTables) {
        return <LoadingAnimation/>;
    }

    const onSubmit = async (data: any) => {
        console.log(data);
        const addTableData: AddTableRequest = {
            tableName: data.tableName,
        };

        await addTable.mutateAsync(addTableData, {
            onSuccess: () => {
                alert("เพิ่มโต๊ะสำเร็จ");
            },
            onError: (error) => {
                alert("เพิ่มโต๊ะไม่สำเร็จ");
            },
        });
        refetchTables();
        setOpenCreateTableDialog(false);
    };

    return (
        <div className="p-10 font-bold">
            <p className="text-4xl my-4 ">ตั้งค่าร้าน</p>
            <div className="flex m-4 justify-between">
                <p className="text-xl flex flex-row items-center">รายการโต๊ะทั้งหมด: {tables?.length} โต๊ะ</p>
                <Dialog open={openCreateTableDialog} onOpenChange={setOpenCreateTableDialog} >
                    <DialogTrigger>
                        <div
                            className="text-lg btn bg-success text-white font-normal w-36"
                        >
                            <img src="\assets\navbar-logo\plusSign.svg" />
                            เพิ่มโต๊ะ
                        </div>
                    </DialogTrigger>
                    <DialogContent>
                        <div className="py-10 align-middle gap-6 flex items-center">
                            <label className="text-2xl font-bold">ชื่อโต๊ะ: </label>
                            <input className="rounded border-2 h-12 w-80 p-3" {...tableNameForm(`tableName`, { required: true })} type="text" />
                        </div>
                        <div className="flex">
                            <DialogClose asChild>
                                <Button className="font-bold ml-auto btn text-xl text-white bg-error rounded-xl" >
                                    ยกเลิก
                                </Button>
                            </DialogClose>
                            <button className="text-xl ml-3 btn bg-success rounded-xl text-white" onClick={
                                handleSubmit(onSubmit)
                            }>เพิ่มโต๊ะ</button>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
            <div className="overflow-y-auto h-96">
                {tables && tables.map((data: BaseTableResponse) => (
                    <TableNameCard key={data.id} detail={data} />
                ))}
            </div>
            <div className="mt-16">
                <p className="text-3xl">
                    ราคาอาหารต่อหัวสุทธิ : {netPricePerPerson} บาท
                </p>
                <button className="btn bg-primary text-white text-lg font-base mt-5" onClick={() => setOpenModifyPriceDialog(true)}>
                    แก้ไขราคา
                </button>
                <ModifyPriceDialog 
                    openDialog={openModifyPriceDialog} 
                    setOpenDialog={setOpenModifyPriceDialog} 
                    price={netPricePerPerson} 
                    onSave={(newPrice) => setNetPricePerPerson(newPrice)}
                />
            </div>
        </div>
            );
};

export default page;
