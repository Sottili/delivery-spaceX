"use client";

import { useState } from "react";
import Link from "next/link";

// Validações e imports do Zod e React-Hook-Form
import {
  AddressEarthFormSchema,
  AddressEarthSchemaType,
} from "@/types/addressType";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const EarthFormAddress = () => {
  const { register, handleSubmit, formState } = useForm<AddressEarthSchemaType>(
    {
      resolver: zodResolver(AddressEarthFormSchema),
    }
  );

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const [currentStep, setCurrentStep] = useState(0);

  function handleNextStep() {
    setCurrentStep((prevState) => prevState + 1);
  }

  function handlePrevStep() {
    setCurrentStep((prevState) => prevState - 1);
  }

  const stepsEarth = [
    {
      id: "FIRST",
    },
    {
      id: "SECOND",
    },
    {
      id: "THREE",
    },
    {
      id: "FOUR",
    },
  ];

  return (
    <>
      <div className="flex bg-slate-900 flex-wrap bg-red-500 text-center rounded-md w-3/4 md:w-1/3 items-center justify-center mx-auto mt-5 mb-5">
        <div className="flex flex-col w-full justify-left mt-5 md:mt-10 text-white px-10">
          <h1 className="text-2xl md:text-2xl font-semibold">
            Você deseja cadastrar um endereço da Terra?
          </h1>
          <h3 className=" md:text-2xl font-semibold">
            Se sim, preencha o formulário a seguir para cadastrar seu endereço:
          </h3>
        </div>
        <div className="flex w-3/4 flex-col items-center mt-8">
          <form
            className="flex w-full flex-col pb-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            {stepsEarth[currentStep].id === "FIRST" && (
              <>
                <label className="text-white text-left">Cep:</label>
                <input
                  {...register("cep")}
                  className="p-3 mb-3 rounded-md"
                  type="text"
                  placeholder="Digite o CEP do local"
                />
                <label className="text-white text-left">Logradouro:</label>
                <input
                  {...register("logradouro")}
                  className="p-3 mb-3 rounded-md"
                  type="text"
                  placeholder="Digite o Logradouro"
                />
              </>
            )}
            {stepsEarth[currentStep].id === "SECOND" && (
              <>
                <label className="text-white text-left">Numero:</label>
                <input
                  {...register("numero")}
                  className="p-3 mb-3 rounded-md"
                  type="text"
                  placeholder="Digite o Numero do local"
                />
                <label className="text-white text-left">Bairro:</label>
                <input
                  {...register("bairro")}
                  className="p-3 mb-3 rounded-md"
                  type="text"
                  placeholder="Digite o Bairro"
                />
              </>
            )}
            {stepsEarth[currentStep].id === "THREE" && (
              <>
                <label className="text-white text-left">Estado:</label>
                <input
                  {...register("estado")}
                  className="p-3 mb-3 rounded-md"
                  type="text"
                  placeholder="Digite o Estado"
                />
                <label className="text-white text-left">Cidade:</label>
                <input
                  {...register("cidade")}
                  className="p-3 mb-3 rounded-md"
                  type="text"
                  placeholder="Digite a Cidade"
                />
              </>
            )}
            {stepsEarth[currentStep].id === "FOUR" && (
              <>
                <label className="text-white text-left">Pais:</label>
                <input
                  {...register("pais")}
                  className="p-3 mb-3 rounded-md"
                  type="text"
                  placeholder="Digite o Pais"
                />
              </>
            )}
            {currentStep <= stepsEarth.length - 1 &&
              stepsEarth[currentStep].id != "FOUR" && (
                <>
                  <button
                    onClick={handleNextStep}
                    className="bg-red-600	md:ml-3 hover:bg-red-700 mt-5 mb-5 text-white font-bold py-2 px-4 rounded"
                  >
                    Próximo
                  </button>
                </>
              )}
            {stepsEarth[currentStep].id != "FIRST" && (
              <>
                <button
                  onClick={handlePrevStep}
                  className="bg-red-600	md:ml-3 hover:bg-red-700 mt-0 mb-0 text-white font-bold py-2 px-4 rounded"
                >
                  Voltar
                </button>
              </>
            )}
            {stepsEarth[currentStep].id === "FOUR" && (
              <button className="bg-red-600	md:ml-3 hover:bg-red-700 mt-3 mb-0 text-white font-bold py-2 px-4 rounded">
                <Link
                  href="/delivery-items"
                  className="block text-white font-medium py-2 px-3 md:p-0"
                  aria-current="page"
                >
                  Cadastrar
                </Link>
              </button>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default EarthFormAddress;
