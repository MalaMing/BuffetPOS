import { useMutation, useQuery } from "@tanstack/react-query";
import axiosInstance from "@/lib/axiosInstance";
import { AddCategoryRequest, CategoryDetailResponse } from "@/interfaces/category";

const getCategories = async () => {
    const { data } = await axiosInstance.get("/manage/categories");
    return data;
}

const getCategoryById = async (id: string) => {
    const { data } = await axiosInstance.get(`/manage/categories/${id}`);
    return data;
}

const addCategory = async (newCategory: AddCategoryRequest) => {
    const { data } = await axiosInstance.post("/manage/categories", newCategory);
    return data;
}

const useGetCategories = () => {
    return useQuery<CategoryDetailResponse[]>({
        queryKey: ["categories"],
        queryFn: getCategories,
        staleTime: 5 * 60 * 1000,
    });
}

const useGetCategoryById = (id: string) => {
    return useQuery<CategoryDetailResponse>({
        queryKey: ["categories", id],
        queryFn: () => getCategoryById(id),
        staleTime: 5 * 60 * 1000,
    });
}

const useAddCategory = () => {
    return useMutation({
        mutationFn: addCategory,
    });
}

export { useGetCategories, useGetCategoryById, useAddCategory };