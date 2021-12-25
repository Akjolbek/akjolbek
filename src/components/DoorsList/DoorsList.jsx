import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {  Pagination, Empty } from "antd";
import { doorsContext } from "../../contexts/doorsContext";
import Filters from "../Filters/Filters";
import DoorsCard from "./DoorsCard";

const DoorsList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );
  const [page, setPage] = useState(
    searchParams.get("_page") ? searchParams.get("_page") : 1
  );
  const [limit, setLimit] = useState(
    searchParams.get("_limit") ? searchParams.get("_limit") : 8
  );
  const [brand, setBrand] = useState([]);
  const [price, setPrice] = useState([1, 100000]);
  const [showFilters, setShowFilters] = useState(false);

  const { getDoors, doors, doorsTotalCount } =
    useContext(doorsContext);
  useEffect(() => {
    setSearchParams({
      q: search,
      _page: page,
      _limit: limit,
      brand: brand,
      price_gte: price[0],
      price_lte: price[1],
    });
  }, []);
  useEffect(() => {
    getDoors();
  }, [searchParams]);
  useEffect(() => {
    setSearchParams({
      q: search,
      _page: page,
      _limit: limit,
      brand: brand,
      price_gte: price[0],
      price_lte: price[1],
    });
  }, [search, page, limit, brand, price]);
  console.log(doors);
  return (
    <div className="shop">
      <div> 
        <input style={{background: 'transparent', marginTop: '1%', color: 'white'}} className="inp-btn2"
        type="text"
         name="search" 
         value={search}
         placeholder="Search..."
         onChange={(e) => setSearch(e.target.value)} >
         </input>
        </div>
      <div className="doors-search">
      <div
          style={{ cursor: "pointer", marginLeft: '2%', color: 'white'}}
          onClick={() => setShowFilters(!showFilters)}
        >
          {showFilters ? <button style={{background: 'transparent', cursor: 'pointer', width: '180px', height: '40px',borderRadius: '10px', border: '5px solid white'}}>закрыть филтрацию</button> : <button style={{background: 'transparent', cursor: 'pointer', width: '180px', height: '40px',borderRadius: '10px', border: '5px solid white'}}>открыть фильтрацию</button>}
      </div>
       
      </div>
      {showFilters ? (
        <Filters
          brand={brand}
          setBrand={setBrand}
          price={price}
          setPrice={setPrice}
        />
      ) : null}
      <div style={{display: "flex", width: "100%", justifyContent: 'center', marginTop: '2%'}}>
       {/* <div style={{width: "10%"}}></div> */}
       <div className="doors-list" style={{width: "80%", flexWrap: "wrap", display: 'flex', justifyContent: 'center'}}>
        {doors.length > 0 ? (
          doors.map((item) => <DoorsCard item={item} />)
        ) : (
          <Empty style={{ marginBottom: "20px", marginLeft: '-25%' }} />
        )}
       </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Pagination
          onChange={(page, limit) => {
            setPage(page);
            setLimit(limit);
          }}
          current={+page}
          pageSize={+limit}
          defaultCurrent={1}
          total={+doorsTotalCount}
        />
      </div>
    </div>
  );
};

export default DoorsList;