import Link from "next/link";

import earthIMG from "../../assets/img/earthPNG.png";
import marsIMG from "../../assets/img/marsPNG.png";
import Image from "next/image";

import { FaTrashCan } from "react-icons/fa6";

const MyAdress = () => {
  const myAdressExample = [
    {
      id: 31231,
      cep: "05750211",
      logradouro: "Rua faustino da silva",
      numero: "05750211",
      bairro: "Super Quadra Morumbi",
      estado: "São Paulo",
      cidade: "São Paulo",
      pais: "Brasil",
      planet: "Earth",
    },
    {
      id: 32113,
      lote: 40,
      local: "Fabrica SpaceX",
      planet: "Mars",
    },
    {
      id: 31131,
      cep: "05750211",
      logradouro: "Rua Exemplo",
      numero: "05750211",
      bairro: "Super Quadra Morumbi",
      estado: "São Paulo",
      cidade: "São Paulo",
      pais: "Brasil",
      planet: "Earth",
    },
    {
      id: 323113,
      lote: 40,
      local: "Fabrica Exemplo",
      planet: "Mars",
    },
  ];

  return (
    <>
      <main className="max-w-screen-xl flex flex-col flex-wrap items-center justify-between md:justify-around mx-auto md:pt-10 md:mt-10 px-2">
        <div>
          <h1 className="text-white text-center mt-10 text-5xl">
            Meus Endereços
          </h1>
        </div>
        <div className="flex flex-col py-5 bg-slate-900 flex-wrap bg-red-500 text-center rounded-md w-full md:w-2/3 lg:w-2/3 justify-center items-center mx-auto mt-5 mb-5">
          <div className="md:w-3/4 flex flex-col items-center justify-center">
            <div>
              <h1 className="text-white text-2xl mb-3">Edite seus endereços</h1>
            </div>
            {myAdressExample.map((item: any) => (
              <>
                <div
                  className="w-full text-dark bg-white transition cursor-pointer ease-in-out delay-150 duration-300 hover:text-white hover:bg-red-500 py-3 md:px-3 md:m-3 mt-3 relative rounded-md"
                  key={item.id}
                >
                  <Link href="#">
                    {item.planet === "Earth" ? (
                      <div className="w-full flex items-center justify-center relative">
                        <Image
                          className="w-10 md:w-9 absolute left-0"
                          src={earthIMG}
                          alt="Icone da Terra"
                        />
                        <h2>{item.logradouro}</h2>
                        <FaTrashCan className="absolute mr-1 md:mr-0 cursor-pointer right-0" />
                      </div>
                    ) : (
                      <div className="flex items-center justify-center relative">
                        <Image
                          className="w-8 ml-1 md:ml-0 md:w-9 absolute left-0"
                          src={marsIMG}
                          alt="Icone de Terra"
                        />
                        <h2>{item.local}</h2>
                        <FaTrashCan className="absolute mr-1 md:mr-0 cursor-pointer right-0" />
                      </div>
                    )}
                  </Link>
                </div>
              </>
            ))}
            <button className="bg-red-600 w-full mt-3 hover:bg-red-700 text-white font-bold rounded">
              <Link
                href="/address-register"
                className="block text-white font-medium py-2 px-2"
                aria-current="page"
              >
                Cadastre um endereço
              </Link>
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default MyAdress;
