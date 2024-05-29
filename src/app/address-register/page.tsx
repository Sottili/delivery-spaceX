// Components
import EarthFormAddress from "@/components/earthFormAddress";
import MarsFormAddress from "@/components/marsFormAddress";
import Navbar from "@/components/navbar";

export default function AddressRegister() {
  return (
    <>
      <main className="max-w-screen-xl flex flex-row flex-wrap items-center justify-between md:justify-around mx-auto md:pt-10 md:mt-10">
        <MarsFormAddress />
        <EarthFormAddress />
      </main>
    </>
  );
}
