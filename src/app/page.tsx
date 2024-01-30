import Countries from "@/components/countries/Countries";
import { getCountries } from "@/services";



export default async function Home() {
  const countries = await getCountries();
  const countriesName = countries.map((country) => country)

  return (
    <>
      <Countries countries={countriesName} />
    </>
  );
}
