import Image from "next/image"

interface Props {
    name: string;
    population: number;
    flag: string;
    region: string;
    capital: string[];
}

export const CardCountry = ({name, population, flag, region, capital}: Props) => {

  const formattedPopulation = new Intl.NumberFormat('en-US').format(population)

  return (
    <div className="bg-components relative flex flex-col rounded-md shadow-md w-64 min-h-[335px]">
        <div className="relative flex justify-center min-h-40">
          <Image
            src={flag}
            alt="profile-picture"
            fill
            className="object-cover rounded-t-md "
            priority={false}
          />
        </div>
        <div className="pl-6 pr-6 pt-6 pb-11">
          <h4 className="mb-2 block text-xl font-sans font-semibold leading-relaxed tracking-normal ">
            {name}
          </h4>
          <div className="flex flex-col gap-1">
            <p className="font-light font-sans text-sm">
              Populations: <span className="font-sans font-light">{formattedPopulation}</span>
            </p>
            <p className="font-sans text-sm">Region: <span className="font-sans font-light">{region}</span></p>
            <p className="font-sans text-sm">Capital: <span className="font-sans font-light">{capital}</span></p>
          </div>
        </div>  
      </div>  
  )
}
