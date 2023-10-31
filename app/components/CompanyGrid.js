import { React, useState, useEffect } from "react";
import Link from "next/link";
import Card from "./Card";

export default function CompanyGrid(props) {
  const route = props.route;
  const [page, setPage] = useState(1);
  const [companies, setCompanies] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [initialLoadComplete, setInitialLoadComplete] = useState(false);

  const fetchMoreData = async (pageNum) => {
    setLoading(true);

    try {
      const apiResponse = await fetch(`/api/${route}?page=${pageNum}`, {
        next: { revalidate: 300 },
      });
      const data = await apiResponse.json();
      const companies = data[`${route}`];

      if (companies?.length === 1) {
        setHasMore(false); //   data to load?
      } else {
        setCompanies([...companies, ...companies]);
        setPage(pageNum + 1);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    setLoading(false);
  };

  useEffect(() => {
    if (!initialLoadComplete) {
      fetchMoreData(page);
      setInitialLoadComplete(true);
    }
  }, [initialLoadComplete]);
  

  return (
    <>
    <div  style={{display:'flex', flexWrap:'wrap', justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
           {/* className="w-full grid  gap-4 justify-between  lg:grid-cols-5"> */}
            {/* sm:{grid-cols-2 mx-5} */}
            {companies.map((company, index) => 
            {if(index<20)
              {
             return (
               
               <div key={index}>
                  <Link href={`/stocks/${company.ticker}`} passHref>
                    <Card data={company} />
                  </Link>
                </div>
              )
            }}
            )}
          </div> 
      {/* </div> */}
      <div className=" self-center w-100vw flex justify-center items-center		">
        <Link href="/explore" >
         
      <button className="rounded bg-slate-700 h-fit-content w-fit-content text-white p-1 ">Load More</button>
      </Link>
            </div>            
    </>
  );
}
