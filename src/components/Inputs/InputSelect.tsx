import { IoIosArrowDown } from "react-icons/io";

export const InputSelect = () => {
  return (
    <>
      <span className="relative right-[-11rem]">
        <IoIosArrowDown />
      </span>
      <select
        name="region"
        defaultValue="Filter-by-Region"
        className="bg-components w-48 appearance-none p-4 rounded-lg font-light " 
      >
           <option value="Filter-by-Region" hidden>Filter by Region</option>
            <option value="Africa" >Africa</option>
            <option value="America">América</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europa</option>
            <option value="Oceania">Oceanía</option>

      </select>
    </>
  );
};
