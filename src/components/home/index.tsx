"use client";
import { Gender, RickAndMortyCharacters, Status } from "@/types/model/home";
import React, { useMemo } from "react";
import Card from "./Card";

type Props = {
  data: RickAndMortyCharacters;
};

export default function Home({ data }: Props) {
  const [status, setStatus] = React.useState("All");
  const [gender, setGender] = React.useState("All");

  const formattedData = useMemo(() => {
    if (status === Status.All && gender === Gender.All) return data.results;
    if (status === Status.All && gender !== Gender.All)
      return data.results.filter((item) => item.gender === gender);
    if (gender === Gender.All && status !== Status.All)
      return data.results.filter((item) => item.status === status);

    return data.results
      .filter((item) => item.status === status)
      .filter((item) => item.gender === gender);
  }, [status, gender]);

  return (
    <section className="h-full w-full flex flex-col  items-center justify-center gap-6 p-8">
      <p className="font-bold text-2xl text-black">Rick And Morty Characters</p>
      <div className="flex items-center justify-center gap-4 md:ml-auto md:pr-6">
        <div className="flex flex-col items-start justify-center gap-2 text-black">
          <label htmlFor="status">Status</label>
          <select
            onChange={(e) => setStatus(e.target.value)}
            id="status"
            name="status"
            className="p-2 border border-gray-300 rounded-lg"
            defaultValue={status}>
            <option value="All">All</option>
            <option value="Alive">Alive</option>
            <option value="Dead">Dead</option>
            <option value="Unknown">Unknown</option>
          </select>
        </div>
        <div className="flex flex-col items-start justify-center gap-2 text-black">
          <label htmlFor="gender">Gender</label>
          <select
            onChange={(e) => setGender(e.target.value)}
            id="gender"
            name="gender"
            className="p-2 border border-gray-300 rounded-lg"
            defaultValue={gender}>
            <option value="All">All</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="Genderless">Genderless</option>
            <option value="Unknown">Unknown</option>
          </select>
        </div>
      </div>
      {/* Cards */}
      <div className="gap-4 w-full p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 h-full overflow-y-auto">
        {formattedData.map((item) => (
          <Card
            key={item.id}
            name={item.name}
            image={item.image}
            status={item.status}
            species={item.species}
            gender={item.gender}
          />
        ))}
      </div>
    </section>
  );
}
