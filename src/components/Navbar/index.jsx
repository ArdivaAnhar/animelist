import Link from "next/link";
import InputSearch from "./InputSearch";

const Navbar = () => {
  return (
    <header className="bg-bg200 shadow-2xl">
      <div className="flex md:flex-row flex-col justify-between p-4 gap-2">
        <Link href="/" className="font-bold text-accent100 text-2xl">
          MyOwnVersAnimeList
        </Link>
        <InputSearch />
      </div>
    </header>
  );
};

export default Navbar;
