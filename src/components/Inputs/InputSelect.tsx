import { IoIosArrowDown } from "react-icons/io";

interface props {
  searchRegion: string;
  setSearchRegion: React.Dispatch<React.SetStateAction<string>>;
}
export const InputSelect = ({searchRegion, setSearchRegion}: props) => {
  return (
    <>
      <span className="relative right-[-11rem]">
        <IoIosArrowDown />
      </span>
      <select
        name="region"
        defaultValue="Filter-by-Region"
        className="bg-components w-48 appearance-none p-4 rounded-lg font-light " 
        onChange={(e) => setSearchRegion(e.target.value)}
      >
           <option value="Filter-by-Region" hidden>Filter by Region</option>
            <option value="Africa" >Africa</option>
            <option value="Americas">América</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europa</option>
            <option value="Oceania">Oceanía</option>

      </select>
    </>
  );
};
