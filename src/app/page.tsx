import HomeComponent from "@/components/home";
import { HomeEndpoint } from "@/types/api/endpoint";
import { RickAndMortyCharacters } from "@/types/model/home";
import React, { Suspense } from "react";

async function GetAllCharacters() {
  const data = await fetch(HomeEndpoint.GetAllCharacters, { cache: "default" }).then(
    (res) => res.json()
  );

  return data as RickAndMortyCharacters;
}
export default async function Home() {
  const data = await GetAllCharacters();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeComponent data={data} />
    </Suspense>
  );
}
