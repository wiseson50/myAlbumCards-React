import React from "react";
import { useState, useEffect } from "react";

function Home() {
  const [myapi, setMyapi] = useState([]);

  const [button, setButton] = useState(null);

  function fetchMyapi() {
    fetch(
      `https://api.discogs.com/database/search?country=usa&{country}per_page=100&page=1&token=pJmeSLIiWlCKdZyPxmcniIGmtGuPkbsrORzkDqUs`
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setMyapi(result.results);
      })
      .catch((error) => console.log("error", error));
  }

  useEffect(() => {
    fetchMyapi();
  }, []);

  return (
    <div>
      <select className="form-select" aria-label="Default select example">
        <option selected>Select Country</option>
        <option value="1">Nigeria</option>
        <option value="2">Germany</option>
        <option value="3">France</option>
     
      </select>







      <div
        style={{ backgroundColor: "orange" }}
        className=" row  cols={2} md={8} g-4"
      >
        {myapi &&
          myapi.map((data) => {
            
            return (
              <div className="card" key={data.id}>
                <img
                  src={data.cover_image}
                  className="card-img-top"
                  alt="..."
                />

                <p className="card-body"></p>
                <p className="card-title">{data.title}</p>
                <h5>{data.year}</h5>
              </div>
            );
          })}
      </div>



      
    </div>
  );
}

export default Home;
