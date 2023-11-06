"use client";

import { FileSearch } from "@phosphor-icons/react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
      <div className="flex-col justify-center items-center text-center">
        <h1 className="text-4xl text-accent100 font-bold flex pb-4">
          <FileSearch size={40} className="text-accent100" />
          NOT-FOUND
        </h1>
        <Link
          href="/"
          className="text-text100 hover:text-accent100 underline transition-all text-1xl">
          Kembali
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
