import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link, useSearchParams } from "react-router-dom";
import { Button, Empty } from "antd";
import { doorsContext } from "../../contexts/doorsContext";
import CommentList from "../Comments/CommentList";
import DoorsCard from "../DoorsList/DoorsCard";

const DetailsDoor = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );
  const [page] = useState(
    searchParams.get("_page") ? searchParams.get("_page") : 1
  );
  const [limit] = useState(
    searchParams.get("_limit") ? searchParams.get("_limit") : 8
  );
  const [brand] = useState([]);
  const [price] = useState([1, 100000]);
  const { getDoors, doors } = useContext(doorsContext);
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
  }, []);
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
  console.log(doors);
  const { id } = useParams();
  const { getOneDoor, oneDoor } = useContext(doorsContext);
  const [door, setDoor] = useState(null);
  useEffect(() => {
    getOneDoor(id);
  }, []);
  useEffect(() => {
    setDoor(oneDoor);
  }, [oneDoor])
  return (
    <div className="container" style={{ marginTop: "20px" }}>
      {door ? (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <div style={{ width: "370px", height: '450px' }}>
                <div>
                  <img style={{width: "100%", height: '400px', borderRadius: '5%'}} src={door.image} alt="" />
                </div>
            </div>
            <div style={{ width: "40vw" }}>
              <h2 style={{color: 'white', marginLeft: '-25%'}}>{door.brand}</h2>
              <h2 style={{color: 'white', marginLeft: '-25%'}}>{`${door.price} сом`}</h2>
              <Link to="/creditForm">
              <Button
                size="large"
                style={{ margin: "15px 0px", width: "200px", background:"#001489", color:"white", marginLeft: '-25%', borderRadius: '5px' }}
              >
                КУПИТЬ
              </Button>
              </Link>
            </div>
          </div>
          <CommentList id={door.id}/>
          <div style={{marginTop: '3%'}}>
          <h1 style={{display: 'flex', justifyContent: 'center', color: 'white'}}>Вам также может понравиться</h1>
        </div>
        
       <div className="doors-list" style={{width: "100%", display: 'flex', flexWrap: 'wrap'}}>
        {doors.length > 0 ? (
          doors.map((item) => <DoorsCard item={item} />)
        ) : (
          <Empty style={{ marginBottom: "20px", marginLeft: '-25%' }} />
        )}
       </div>
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default DetailsDoor;