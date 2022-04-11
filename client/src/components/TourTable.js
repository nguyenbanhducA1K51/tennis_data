import React ,{Fragment,useState}from"react";
import DropDown from "./Dropdown";
import TourInfo from "./TourInfo";
const TourTable=()=>{
    const [ curtour, settour]=useState({})
    const searchTour = async (tour)=> {
        console.log(tour);
        try {
            console.log("run "+curtour.tourney_year);
            
        } catch (error) {
            console.log("errorrrr");
        }
        //e.preventDefault();
        try {
       console.log("one"+tour.tourname);

       console.log("two"+tour.touryear);
         const tourname=tour.tourname;
         const year=tour.year;
          const response = await fetch(
            `http://localhost:2000/all?tourname=${encodeURIComponent(tourname)}&year=${encodeURIComponent(year)}`,
            {
              method: "GET",
              headers: { "Content-Type": "application/json" },
              //body: JSON.stringify(body)
            }
          );
       const data=await response.json();
  
       console.log("data "+ data);
    //    console.log("cur "+ Object.keys(curtour));
    //     console.log(Object.values(curtour));
    //    console.log(tour[2]);
   
    //console.log(curtour.tourney_order);
    //console.log("curtour"+curtour);
    if(data.length!=0){
        settour(data[0]);
    }
      
    else{
        alert('we cant find your tournament, try out onother year!')    
    }
       
        }
        
        catch( Exception )
    {
        console.log('exception throw');
            
    };
    
    }
    return(
    <Fragment >
        <DropDown className="" searchTour={searchTour }/>

        <TourInfo tour={curtour}/>
        
        </Fragment>);



}
export default TourTable;