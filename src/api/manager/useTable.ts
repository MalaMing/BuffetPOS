import { AddTableRequest, TableDetailResponse } from "@/interfaces/table";
import axiosInstance from "@/lib/axiosInstance";
import { useMutation, useQuery } from "@tanstack/react-query";

const getTables = async () => {
    const { data } = await axiosInstance.get("/manage/tables");
    return data;
}

const addTable = async (newTable: AddTableRequest) => {
    const { data } = await axiosInstance.post("/manage/tables", newTable);
    return data;
}

const getTableById = async (id: string) => {
    const { data } = await axiosInstance.get(`/manage/tables/${id}`);
    return data;
}

const useGetTables = () => {
    return useQuery<TableDetailResponse[]>({
        queryKey: ["tables"],
        queryFn: getTables,
        staleTime: 5 * 60 * 1000,
    });
}

const useGetTableById = (id: string) => {
    return useQuery<TableDetailResponse>({
        queryKey: ["tables", id],
        queryFn: () => getTableById(id),
        staleTime: 5 * 60 * 1000,
    });
}

const useAddTable = () => {
    return useMutation({
        mutationFn: addTable,
    });
}