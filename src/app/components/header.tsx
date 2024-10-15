import React, { useState } from "react";
import Image from "next/image";

interface HeaderProps {
  onSearch: (search: string) => void;
}

export default function Header({ onSearch }: HeaderProps) {
  const [searchInput, setSearchInput] = useState<string>("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="flex w-full bg-mid-red-I h-20 justify-between px-2 md:px-8">
      <Image
        src="/images/logoProjetoSaude.png"
        alt="Company Logo"
        className="h-20 my-auto"
        width={100} // Defina a largura conforme necessário
        height={80} // Defina a altura conforme necessário
      />
      <div className="flex h-full items-center text-black">
        <input
          type="text"
          value={searchInput}
          onChange={handleSearchChange}
          placeholder="Pesquisar"
          className="text-sm p-2 lg:w-96 border rounded-md shadow-sm text-black focus:outline-light-red-I focus:ring-0 focus:border-transparent"
        />
      </div>
    </div>
  );
}
