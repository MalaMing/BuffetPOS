import MenuCard from "@/components/manager/menuCard";

export default function MenuPage() {
    return (
        <div className="w-full flex flex-col gap-10">
            <div className="flex flex-row justify-between">
                <label className="input input-bordered flex items-center gap-2 rounded-xl">
                    <input type="text" className="grow" placeholder="Search" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                        fillRule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clipRule="evenodd" />
                    </svg>
                </label>
                <div className="btn btn-success text-white font-bold text-lg">+ Add Menu</div>
            </div>
            <div className="grid grid-cols-3 gap-10">
                {
                    Array(10).fill(0).map((_, i) => (
                        <MenuCard key={i} />
                    ))
                }
            </div>
        </div>
    )
}