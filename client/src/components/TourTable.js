import React, { Fragment, useState } from "react";
import DropDown from "./Dropdown";
import TourInfo from "./TourInfo";
//import { unstable_batchUpdates } from 'react-dom';
const TourTable = () => {
  const [state, setState] = useState({ curtour: {}, suggestionList: [] });
  //console.log("len  "+state.suggestionList);

  const searchTour = async (tour) => {
    try {
      const tourname = tour.name;
      const year = tour.year;
    
      const response = await fetch(
        `https://tennisforehand.xyz/api/all?tourname=${encodeURIComponent(
          tourname
        )}&year=${encodeURIComponent(year)}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = await response.json();

      //console.log("data " + data);

      if (data.length != 0) {
       
        setState((prevState) => {
          return {
            ...prevState,
            curtour: data[0],
            suggestionList: [],
          };
        });
      } else {
       
        const res = await fetch(
          `https://tennisforehand.xyz/api/validyear?tourname=${encodeURIComponent(
            tourname
          )}`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            
          }
        );
      
        const rawlist = await res.json();
        const yearlist = rawlist.map((year) => year.tourney_year);
        console.log("yearlist"+ yearlist);
        setState((prevState) => {
          return { ...prevState, suggestionList: yearlist };
        });
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  
  const DisplaySuggestion = ({ suggestionList }) => {
    return (
      <>
       

        {suggestionList.length !== 0 ? (
          <>
            
            <div
              className="border border-warning w-75"
              style={{ width: "500px", textAlign: "center" }}
            >
              <p className="text-warning">
                We can not find the tournament in that year, below is some
                suggestion year for your tournament
              </p>
            </div>
            <ul
              style={{ listStyleType: "none", padding: "7px", display: "flex" }}
            >
              {suggestionList.map((item) => (
                <li className="border rounded p-3 ">{item}</li>
              ))}
            </ul>
          </>
        ) : (
          <p></p>
        )}
      </>
    );
  };
  return (
    <Fragment>
      <DropDown className="" searchTour={searchTour} />
      <DisplaySuggestion suggestionList={state.suggestionList} />
      <TourInfo tour={state.curtour} />
    </Fragment>
  );
};
export default TourTable;
