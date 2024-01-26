import { Country } from "@/interfaces/Country";
import { CardCountry } from "../components/CardCountry/CardCountry";
import { InputSearch, InputSelect } from "@/components/Inputs";

const getCountries = async (): Promise<Country[]> => {
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
    border: country.borders,
    tld: country.tld,
    language: country.languages,
  }));

  return country;
};

export default async function Home() {
  const countries = await getCountries();

  return (
    <>
      <div className="grid grid-cols-2 items-center mt-5">
        <div className="flex m-5 ml-14 justify-start">
          <InputSearch />
        </div>
        <div className="m-5 mr-16  flex items-center justify-end">
          <InputSelect />
        </div>
      </div>
      <main className=" grid grid-cols-4 gap-[75px] min-h-screen pl-20 pr-20 pt-6 justify-center">
        {countries.map((country) => {
          return (
            <CardCountry
              key={country.name.common}
              name={country.name.common}
              population={country.population}
              flag={country.flag}
              region={country.region}
              capital={country.capital}
            />
          );
        })}
      </main>
    </>
  );
}
