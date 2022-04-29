import React ,{Fragment,useState}from"react";
const TourInfo=({tour})=>{

return (
<Fragment>
      {" "}
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Tour</th>
            <th>Description</th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
              <td>Tour Name</td>
              <td> {tour==null? "":tour.tourney_name}</td>
          </tr>
          
          <tr>
              <td>Tour year</td>
              <td> {tour==null? "":tour.tourney_year}</td>
          </tr>

          <tr>
              <td>Tour single winner</td>
              <td> {tour==null? "":tour.singles_winner_name}</td>
          </tr>
          <tr>
              <td>Tour location</td>
              <td> {tour==null? "":tour.tourney_location==null? "":tour.tourney_location}</td>
          </tr>
          <tr>
              <td>Tour surface</td>
              <td> {tour==null? "":tour.tourney_surface==null? "":tour.tourney_surface}</td>
          </tr>
          <tr>
              <td>Tour date</td>
              <td> {tour==null? "":tour.tourney_dates==null?"":tour.tourney_dates}</td>
          </tr>
          

        </tbody>
      </table>
    </Fragment>

)
}
export default TourInfo;