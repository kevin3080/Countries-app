import { Country } from "@/interfaces/Country";

export const getCountries = async (): Promise<Country[]> => {
    const data = await fetch("https://restcountries.com/v3.1/all").then((res) =>
      res.json()
    );
  
    const country: Country[] = data.map((country: Country) => ({
      name: country.name,
      population: country.population,
      flag: country.flags.svg,
      region: country.region,
      subregion: country.subregion,
      capital: country.capital,
      currencies: country.currencies,
      borders: country.borders,
      tld: country.tld,
      language: country.languages,
    }));
  
    return country;
  };

  export const getCountryByName = async (name: string): Promise<Country[]> => {
    const data = await fetch(`https://restcountries.com/v3.1/name/${name}`).then((res) => 
    res.json());


    const country: Country[] = data.map((country: Country) => ({
      name: country.name,
      population: country.population,
      flag: country.flags.svg,
      region: country.region,
      subregion: country.subregion,
      capital: country.capital,
      currencies: country.currencies,
      borders: country.borders,
      tld: country.tld,
      languages: country.languages,
    }));
  
    return country;
  }

  export const getCountryByCode = async (code: string): Promise<Country[]> => {
    const data = await fetch(`https://restcountries.com/v3.1/alpha/${code}`).then((res) =>
      res.json());

      const country: Country[] = data.map((country: Country) => ({
        name: country.name,
        population: country.population,
        flag: country.flags.svg,
        region: country.region,
        subregion: country.subregion,
        capital: country.capital,
        currencies: country.currencies,
        borders: country.borders,
        tld: country.tld,
        languages: country.languages,
      }));

      return country
  }

