import Image from "next/image";
import React from "react";

type Props = {
  image: string;
  name: string;
  status: string;
  species: string;
  gender: string;
};

export default function Card({ image, name, status, species, gender }: Props) {
  return (
    <div className="flex flex-col items-center justify-center relative w-full cursor-pointer">
      <Image
        src={image}
        alt={name}
        width={150}
        height={150}
        className="rounded-lg w-full"
      />
      <div className="text-sm font-semibold text-black flex items-center justify-between gap-2 absolute top-0 w-full p-4 bg-white/40">
        <p>
          <span className="text-red-500">Status:</span> {status}
        </p>
        <p>
          <span className="text-red-500">Gender:</span> {gender}
        </p>
        <p>
          <span className="text-red-500">Species:</span> {species}
        </p>
      </div>

      <div className="text-base font-semibold text-black flex items-center justify-center absolute bottom-0 w-full bg-white/40">
        <p>{name}</p>
      </div>
    </div>
  );
}
