'use client';

import useToastHandler from "@/lib/toastHanlder";
import { useState } from "react";
import { EditMenuDialog } from "./editMenuDialog";


export default function MenuCard() {

    const toaster = useToastHandler();
    const [ openDialog, setOpenDialog ] = useState(false);

    const deleteHandler = () => {
        toaster("Delete", "Delete success")
    }

    const editHandler = () => {
        setOpenDialog(true);
    }

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
                <img
                src="/assets/images/sample-salmon.svg"
                alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">M1 แซลมอนรมควัน</h2>
                    <p>type: ปลา</p>
                    <p>status: พร้่อม</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-info text-whereWhite" onClick={() => editHandler()}>edit</button>
                    <button className="btn btn-error text-whereWhite" onClick={() => deleteHandler()}>delete</button>
                </div>
            </div>
            <EditMenuDialog openDialog={openDialog} setOpenDialog={setOpenDialog} />
        </div>
    )
}