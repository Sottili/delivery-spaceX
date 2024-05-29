// Images
import astronautCallHome from "../assets/img/astronaut.png";

// Next Components
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="max-w-screen-xl relative flex flex-wrap items-center justify-between md:justify-around mx-auto p-4 md:pt-10 md:mt-10">
        <div className="flex w-full justify-left mt-10 md:mt-10 md:pt-10 pt-0">
          <h2 className="text-white text-4xl md:text-5xl font-semibold">
            Welcome to SpaceX <br /> Delivery Station!
          </h2>
        </div>
        <div className="flex w-full flex-col justify-left mt-8">
          <h2 className="text-white text-2xl md:text-2xl font-semibold">
            O delivery mais qualificado te espera aqui <br />
            Está pronto para ir atrás dos seus desejos?
            <br /> A SpaceX Delivery te leva até lá!
          </h2>
          <div className="flex w-full flex-wrap mt-8">
            <button className="bg-red-600	mr-3 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              <Link
                href="/address-register"
                className="block text-white font-medium py-2 px-3 md:p-0"
                aria-current="page"
              >
                Register Address
              </Link>
            </button>
            <button className="bg-red-600	ml-3 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              <Link
                href="/delivery-items"
                className="block text-white font-medium py-2 px-3 md:p-0"
                aria-current="page"
              >
                Delivery Items
              </Link>
            </button>
          </div>
        </div>
        <Image
          className="absolute invisible md:visible right-0 top-10"
          alt="Astronauta"
          src={astronautCallHome}
        />
      </div>
    </>
  );
}
