"use client";

import Link from "next/link";

// Validações e imports do Zod e React-Hook-Form
import {
  AddressMarsSchemaType,
  AddressMarsFormSchema,
} from "@/types/addressType";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function MarsFormAddress() {
  const { register, handleSubmit, formState } = useForm<AddressMarsSchemaType>({
    resolver: zodResolver(AddressMarsFormSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <div className="flex flex-wrap bg-red-500 text-center rounded-md w-3/4 md:w-1/3 items-center justify-center mx-auto mt-5 mb-5">
        <div className="flex flex-col w-full justify-left mt-5 md:mt-10 text-white px-10">
          <h1 className="text-2xl md:text-2xl font-semibold">
            Você deseja cadastrar um lote de Marte?
          </h1>
          <h3 className=" md:text-2xl font-semibold">
            Se sim, preenche o formulário a seguir para cadastrar seu endereço:
          </h3>
        </div>
        <div className="flex flex-col items-center mt-8">
          <form
            className="flex w-full flex-col pb-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label className="text-white text-left">
              Nome da Fábrica ou Local:
            </label>
            <input
              {...register("localName")}
              className="p-3 mb-3 rounded-md"
              type="text"
              placeholder="Digite o Local"
            />
            <label className="text-white text-left">Lote:</label>
            <input
              {...register("lote")}
              className="p-3 mb-3 rounded-md"
              type="text"
              placeholder="Digite o Lote do local"
            />
            <button className="bg-red-600	md:ml-3 hover:bg-red-700 mt-5 mb-5 text-white font-bold py-2 px-4 rounded">
              <Link
                href="/delivery-items"
                className="block text-white font-medium py-2 px-3 md:p-0"
                aria-current="page"
              >
                Cadastrar endereço
              </Link>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
