import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
} from "@/components/ui/dialog"
import { useEditPricePerPerson } from '@/api/manager/useSetting';

type ModifyPriceDialogProps = {
    openDialog: boolean;
    setOpenDialog: (open: boolean) => void;
    price: number;
    onSave: (newPrice: number) => void;
    refetchPricePerPerson: () => void;
};


const ModifyPriceDialog = ({ openDialog, setOpenDialog, price, onSave, refetchPricePerPerson }: ModifyPriceDialogProps) => {

    const editPricePerPerson = useEditPricePerPerson();
    const [inputPrice, setInputPrice] = useState(price);

    const handleSave = async () => {

        await editPricePerPerson.mutateAsync({ price: inputPrice }, {
            onSuccess: () => {
                refetchPricePerPerson();
                alert("แก้ไขราคาสำเร็จ");
            },
            onError: (error) => {
                alert("แก้ไขราคาไม่สำเร็จ");
            },
        });

        onSave(inputPrice);
        setOpenDialog(false);
    };

  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
            <DialogContent>
                <div className="py-10 align-middle gap-6 flex items-center">
                    <label className="text-2xl font-bold">ราคา: </label>
                    <input
                        type="number"
                        className="rounded border-2 h-12 w-80 p-3"
                        value={inputPrice}
                        onChange={(e) => setInputPrice(Number(e.target.value))}
                    />
                </div>
                <div className="flex">
                    <DialogClose asChild>
                        <Button className="font-bold ml-auto btn text-xl text-white bg-error rounded-xl" >
                            ยกเลิก
                        </Button>
                    </DialogClose>
                    <button className="text-xl bg-primary btn rounded-xl text-white ml-3" onClick={handleSave}>บันทึก</button>
                </div>
            </DialogContent>
        </Dialog>
  )
}

export default ModifyPriceDialog