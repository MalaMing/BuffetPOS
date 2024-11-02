import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
   
  export function AddMenuDialog({ openDialog, setOpenDialog }: { openDialog: boolean, setOpenDialog: (open: boolean) => void }) {
    return (
      <Dialog open={openDialog}>
        <DialogContent className="sm:max-w-2xl w-full flex flex-col gap-6">
          <div className="flex flex-row h-full w-full gap-6">
              <div className="border-primary border rounded-lg w-5/12 min-h-[16rem]">
              </div>
              <div className="flex flex-col w-7/12 gap-3">
                  <div className="flex flex-col gap-2">
                      <div>Menu Name:</div>
                      <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                  </div>
                  <div className="flex flex-col gap-2">
                      <div>Type:</div>
                      <div className="dropdown w-full">
                          <div tabIndex={0} role="button" className="btn w-full">Select here</div>
                          <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                              <li><a>Item 1</a></li>
                              <li><a>Item 2</a></li>
                          </ul>
                      </div>
                  </div>
                  <div className="flex flex-col gap-2">
                      <div>Image:</div>
                      <input type="file" className="file-input file-input-bordered w-full" />
                  </div>
                
                
              </div>
          </div>
         
          <DialogFooter>
              <div className="btn btn-primary text-whereWhite" onClick={() => setOpenDialog(false)}>+ Add Menu</div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  }