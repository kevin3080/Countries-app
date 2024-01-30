'use client';
import Link from "next/link";
import { InputSearch, InputSelect } from "../Inputs";
import { CardCountry } from "../CardCountry";
import { Country } from "@/interfaces/Country";
import { useEffect, useState } from "react";

interface countries {
    countries: Country[];
}

function Countries({countries}:countries) {
    const [country, setCountry] = useState<Country[]>([]);
    const [search, setSearch] = useState("");
    const [searchRegion, setSearchRegion] = useState("");
   
    const searcher = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    let results: Country[] = []
    if(!search){
        results = country
    } else {
        results = country.filter((data) => data.name.common.toLowerCase().includes(search.toLowerCase()))
    }
    if(searchRegion){
        results = results.filter((data) => data.region === searchRegion)
    }
    
    useEffect(() => {
        setCountry(countries)
    }, [countries])

  return (
    <>
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center mt-5">
            <div className="flex m-5 sm:ml-12 justify-items-start">
                <InputSearch searcher={searcher} search={search} />
            </div>
            <div className="m-5 ml-7 sm:ml-14 sm:mr-[4.5rem] flex items-center justify-start sm:justify-end">
                <InputSelect searchRegion={searchRegion} setSearchRegion={setSearchRegion}/>
            </div>
        </div>
        <main className=" grid grid-cols-1 justify-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[75px] min-h-screen sm:pl-20 sm:pr-20 pt-6">
            {results?.map((country) => {
            return (
                <Link href={`/country/${country?.name.common}`} key={country?.name.common}>
                <CardCountry
                    key={country?.name.common}
                    name={country?.name.common}
                    population={country?.population}
                    flag={country?.flag}
                    region={country?.region}
                    capital={country?.capital}
                />
                </Link>
            );
            })}
        </main>
    </>
  )
}

export default Countries