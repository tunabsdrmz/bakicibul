export enum Gender {
  All = "All",
  Male = "Male",
  Female = "Female",
  Genderless = "Genderless",
  Unknown = "Unknown",
}

export enum Status {
  All = "All",
  Alive = "Alive",
  Dead = "Dead",
  Unknown = "Unknown",
}

export interface RickAndMortyCharacters {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: any;
  };
  results: {
    id: number;
    name: string;
    status: Status;
    species: string;
    type: string;
    gender: Gender;
    origin: {
      name: string;
      url: string;
    };
    location: {
      name: string;
      url: string;
    };
    image: string;
    episode: string[];
    url: string;
    created: string;
  }[];
}
