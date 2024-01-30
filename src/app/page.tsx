import { Country } from "@/interfaces/Country";
import { CardCountry } from "../components/CardCountry/CardCountry";
import { InputSearch, InputSelect } from "@/components/Inputs";
import Link from "next/link";
import { getCountries } from "@/services";


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
            <Link href={`/country/${country.name.common}`} key={country.name.common}>
              <CardCountry
                key={country.name.common}
                name={country.name.common}
                population={country.population}
                flag={country.flag}
                region={country.region}
                capital={country.capital}
              />
            </Link>
          );
        })}
      </main>
    </>
  );
}
