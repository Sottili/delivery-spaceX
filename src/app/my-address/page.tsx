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
  ];

  return (
    <>
      <main className="max-w-screen-xl flex flex-col flex-wrap items-center justify-between md:justify-around mx-auto md:pt-10 md:mt-10">
        <div>
          <h1 className="text-white text-5xl">Meus Endereços</h1>
        </div>
        <div className="flex flex-col py-5 bg-slate-900 flex-wrap bg-red-500 text-center rounded-md w-3/4 md:w-1/3 justify-center items-center mx-auto mt-5 mb-5">
          <div className="w-3/4">
            <div>
              <h1 className="text-white text-2xl mb-3">Edite seus endereços</h1>
            </div>
            {myAdressExample.map((item: any) => (
              <>
                <div
                  className="text-dark bg-white transition cursor-pointer ease-in-out delay-150 duration-300 hover:text-white hover:bg-orange-500 py-3 px-3 m-3 relative rounded-md"
                  key={item.id}
                >
                  <Link href="#">
                    {item.planet === "Earth" ? (
                      <div className="flex items-center justify-center relative">
                        <Image
                          className="w-10 absolute left-0"
                          src={earthIMG}
                          alt="Icone da Terra"
                        />
                        <h2>{item.logradouro}</h2>
                        <FaTrashCan className="absolute cursor-pointer right-0" />
                      </div>
                    ) : (
                      <div className="flex items-center justify-center relative">
                        <Image
                          className="w-8 absolute left-0"
                          src={marsIMG}
                          alt="Icone da Terra"
                        />
                        <h2>{item.local}</h2>
                        <FaTrashCan className="absolute cursor-pointer right-0" />
                      </div>
                    )}
                  </Link>
                </div>
              </>
            ))}
            <div>
              <button className="bg-red-600 w-3/4 mt-2 hover:bg-red-700 text-white font-bold py-2 rounded">
                <Link
                  href="/address-register"
                  className="block text-white font-medium py-2 md:p-0"
                  aria-current="page"
                >
                  Cadastre um endereço
                </Link>
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default MyAdress;
