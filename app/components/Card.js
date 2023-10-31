import { React, useState, useEffect } from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import axios from "axios";
import Image from "next/image";

const Card = (props) => {
  const data = props.data;
  console.log(data);
  const isPositiveChange = parseFloat(data.change_amount) > 0;
  const isNegativeChange = parseFloat(data.change_amount) < 0;
  const hrStyle = {
    border: "1px solid black",
  };
  const triangleStyle = {
    color: isPositiveChange ? "green" : isNegativeChange ? "red" : "black",
  };
  const triangleSymbol = isPositiveChange ? "▲" : isNegativeChange ? "▼" : "";
  const formattedChangePercentage = data.change_percentage.replace("-", "");
  const [companyName, setCompanyName] = useState("");
   

  return (
        
     <div className="bg-gray-400 p-10 m-5 w-80 cursor-pointer rounded-md shadow-md text-center  justify-center  " >
        {/* sm:pl-2 sm:ml-1 */}
        <div className="flex justify-between mb-2">
          <p className="text-lg font-bold text-black ">{data.ticker}</p>
          <p className="text-base font-semibold" style={triangleStyle}>
            {triangleSymbol} {formattedChangePercentage}
          </p>
        </div>
        <hr className="mb-2" style={hrStyle} />

        <div className="mb-2 text-sm">
          <p>Price: ${data.price}</p>       
          <p>Volume: {data.volume}</p>
          <p>Change Amount: ${data.change_amount}</p>
        </div>
        </div>
       

  );
};

export default Card;
