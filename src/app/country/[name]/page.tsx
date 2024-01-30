import { Name, NativeName, Ves } from "@/interfaces/Country";
import { getCountryByCode, getCountryByName } from "@/services";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";

async function pageCountryName({ params }: { params: { name: string } }) {
  const country = await getCountryByName(params.name);
  const [{ name, population, flag, region, capital, languages, subregion, tld, currencies, borders }] = country
  const formattedPopulation = new Intl.NumberFormat('en-US').format(population)

  const curr: Ves[] = Object.values(currencies) 
  const [{ name: currName, symbol }] = curr

  const lang: string[] = Object.values(languages)
  lang.reverse()
  const language = lang.map((l) => l).join(", ")

  const fetchBorders = async (border: string[] | undefined) => {
    if (border) {
      const res = await Promise.all(
        border.map(async (b) => {
          const data = await getCountryByCode(b);
          const { name } = data[0]
          return (name.common)
        })
      )
      return res
    }

    return null
  }

  const bordersName = await fetchBorders(borders)


  const getNativeName = (name: Name) => {
    const nativeName: NativeName = name.nativeName
    const getName =  Object.values(nativeName)

    if(getName.length >= 2){
      const res = getName[getName.length - 1]
      return res
    }

    return nativeName
  }

  const { common } = getNativeName(name)


  return (
    <main className="mt-16 ml-20">
      <Link
        href="/"
        className=" pt-2 pb-2 bg-components shadow-lg rounded-md flex w-28 items-center justify-center gap-2 font-light"
      >
        <FaArrowLeftLong size={15} />
        <span className="">Back</span>
      </Link>

      <div className="mt-12 flex mr-20">
        <div className="relative ml-[-20px] w-[560px] h-[400px] border-[20px] rounded-xl  border-[#1F2C35] ">
            <Image
              src={flag}
              alt="profile-picture" 
              fill
              className="object-cover" 
            />
        </div>
        <div className="absolute w-1/2 right-4">
            <h2 className="text-3xl font-semibold">{name.common}</h2>
            <div className="flex flex-col flex-wrap h-36 w-[60%] gap-2 gap-x-20 mt-6">
              <p className="text-sm font-semibold">Native name: <span className="font-light">{common || name.common}</span></p>
              <p className="text-sm font-semibold">Population: <span className="font-light">{formattedPopulation}</span></p>
              <p className="text-sm font-semibold">Region: <span className="font-light">{region}</span></p>
              <p className="text-sm font-semibold">Sub Region: <span className="font-light">{subregion}</span></p>
              <p className="text-sm font-semibold">Capital: <span className="font-light">{capital}</span></p>
              <p className="text-sm font-semibold">Top Level Domain: <span className="font-light">{tld}</span></p>
              <p className="text-sm font-semibold">Currencies: <span className="font-light">{currName}</span></p>
              <p className="text-sm font-semibold">Languages: <span className="font-light">{language}</span></p>
            </div>
            <div className="flex items-center mt-12">
              <h3 className="mr-6">Border Countries:</h3>
              <div className="flex flex-wrap gap-3">
                {bordersName?.map((b) => {
                  return <p className="text-sm font-light bg-components shadow-lg rounded-md px-7 py-1" key={b}><Link href={`/country/${b}`}>{b}</Link></p>;
                })}
              </div>
            </div>
        </div>
      </div>
    </main>
  );
}

export default pageCountryName;