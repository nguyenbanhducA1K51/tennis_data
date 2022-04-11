import React ,{Fragment,useState,useEffect,useRef}from"react";

const DropDown= ({searchTour})=>{

    //onst [tour,setTour]=useState({"tourname":"Wimbledon","year":2000});
    const tour=useRef({"tourname":"Wimbledon","year":2000});
const tournamentList=[
"Ocean City","Jackson WCT","Memphis WCT","Luxembourg","Springfield","Winston-Salem Open","Nancy","Cairo","Caracas","Lyon","ASB Classic","Maui","Auckland","Antalya Open","Fort Worth","Singapore","San Marino","Belgrade","Ancona","Vancouver WCT","Washington","Boca Raton","Bologna WCT","Newport","New Haven","Brussels","Cincinnati","Forest Hills","Mexico City WCT","Kuala Lumpur","Tehran WCT","Toulouse","Palm Springs","Sun City","Atlanta WCT","Orlando","San Remo","Palma","Moscow","Aegon International","Nice","Guaruja-2","Richmond","Hoylake","New Orleans","Quito","Aviles","Essen WCT","South African Open","ATP World Tour Masters 1000 Cincinnati","Colombus","Itaparica","Philadelphia WCT","Aircel Chennai Open","Coupe Rogers","Hampton","Bastad","Alamo WCT","Copenhagen","Oslo","Albany","Roanoke","San Jose","Rio de Janeiro","Bari","Grand Slam Cup","San Francisco","Barcelona Olympics","Jacksonville","Denver WCT","Copenhagen WCT","Fayez Sarofim & Co. US Men’s Clay Court Championship","J. Safra Sarasin Swiss Open Gstaad","Dubai Duty Free Tennis Championships","Abierto Mexicano de Tenis Mifel presentado por Cinemex","Chengdu","Tokyo Indoor","Boston","Hobart","Long Island","Winston-Salem","Hilton Head WCT","ATP World Tour Masters 1000 Miami","Sydney N.S.W.","London","Los Cabos","Napa","Salt Lake City","Hempstead WCT","Kitzbühel","BB&T Atlanta Open","Estoril","Toronto Indoor WCT","Los Angeles PSW","Shenzhen","Monterrey","La Quinta","Lafayette","BMW Open by FWU","Washington WTC","Millennium Estoril Open","s-Hertogenbosch","Bogota","Schenectady","Athens Olympics","Dublin","Dayton","Stowe","ATP Masters Series Hamburg","Hilversum","Kitzbuhel","Washington-2","Venice","Vina Del Mar","Indianapolis WCT","Pinehurst","Tulsa","Melbourne Indoor","Bristol","Las Vegas","ABN Amro World Tennis Tournament","Zaragoza","Palermo","Sydney Olympics","Republic Of China","Sawgrass Doubles","Vina del Mar","Birmingham","Brisbane","St. Louis","Rolex Paris Masters","'s-Hertogenbosch","Chicago","Midland WCT","Bucharest","Louisville WCT","Charleston","Livingston","Key Biscayne","Treviso","Båstad","Lisbon","San Jose CR","Boca West","ATP Masters Series Essen","Tanglewood","Christchurch","Shreveport","Tokyo WCT","Seattle","Des Moines","San Juan","Halle","Chicago WCT","Tennis Masters Cup","Scottsdale","Palm Harbor","Washington Indoor","ATP Masters Series Stockholm","Houston WCT","Melbourne","Open Sud de France","Dorado Beach","Shanghai","Birmingham WCT","ATP World Tour Masters 1000 Madrid","Open Parc Auvergne-Rhône-Alpes Lyon","La Costa WCT","Marbella","Orlando WCT","Cologne WCT","Chicago-2 WCT","Genova","Johannesburg - WCT","Charlotte WCT","St. Petersburg Open","Stratton Mountain","Adelaide","Nations Cup","Bombay","Dusseldorf","Guaruja","TEB BNP Paribas Istanbul Open","Istanbul","Brasilia","South Orange","St. Poelten","Johannesburg","Chengdu Open","Intrum Stockholm Open","Erste Bank Open 500","ATP Masters Series Canada","Bristol WCT","World Doubles WCT","Sao Paulo WCT","St. Petersburg WCT","Tokyo","Phoenix","Genova WCT","Wembley 1","European Open","Lagos","Bolzano","Ricoh Open","Masters Doubles WCT","Wellington","SkiStar Swedish Open","Cap D'Adge WCT","Dayton Indoor","Manchester","Bahamas","Gerry Weber Open","Tampa","New Delhi","Kitzbuehel","Marrakech","Baltimore WCT","Qatar ExxonMobil Open","Dubai","Brisbane International presented by Suncorp","Boston WCT","Beijing","Hamburg","Geneva","Nottingham","Florence","Detroit WCT","Montreal WCT","Baltimore","Munich","Australasian Championships","Umag","Rye Brook","Denver","ATP World Tour Masters 1000 Monte Carlo","Casablanca WCT","Calcutta","Los Angeles WCT","Madrid","Oeiras","New Orleans WCT","Bordeaux","Miami Open presented by Itaú","Aegon Championships","Seoul","Tempe","Cleveland","Johannesburg-2","Salisbury","Cleveland WCT","Adelaide-2","ATP Tour World Doubles Championship","Jackson","Murcia","Hartford WCT","Sopot","St. Petersburg","Indian Wells","Stockholm Open","Stuttgart","Lakeway","San Antonio WCT","Manila","St. Vincent","Antwerp","Guadalajara","Caracas WCT","ATP Masters Series Miami","Garanti Koza Sofia Open","Leicester","Zurich WCT","Merion","Delray Beach","Rosmalen","Maceio","Zagreb","Tucson WCT","Bahia","Paramus","Stockholm","Bangkok","Senigallia","Calgary","Durban","Mar Del Plata","ATP World Tour Masters 1000 Shanghai","London / Queen's Club","Dell Technologies Hall of Fame Open","Rakuten Japan Open Tennis Championships 2017","Richmond-WCT","Santiago","ATP Masters Series Madrid","Paris Indoor","Wembley","Dallas WCT","WCT Invitational","Berkeley","Naples WCT","ATP Masters Series Monte Carlo","Frankfurt","Johannesburg WCT","Fort Worth WCT","Shenzhen Open","Beijing Olympics","Perth","Ferrara","Cedar Grove","Aix en Provence","Shanghai Rolex Masters","Amersfoort","New York","Masters","Memphis","French Championships","Delray Beach WCT","Salisbury WCT","Berlin","Dallas","Las Vegas WCT","London Olympics","ATP Masters Series Indian Wells","Western & Southern Open","Tuscon","La Costa","Woodlands Doubles","Forest Hills WCT","Kuala Lumpur-2","Warsaw","Barcelona","Brussels WCT","Richmond WCT","Nuremberg","Sydney Indoor","Gstaad","Mercedes Cup","Washington WCT","Kiawah Island","Jakarta","Cologne","Catania","German Tennis Championships 2017","Roland Garros","Poertschach","Bretton Woods","Doha","Rotterdam","Philadelphia","Washington Indoor WCT","Athens","Toronto Indoor","Australian Open","Rotterdam WTC","Abierto Mexicano Telcel","Atlanta Olympics","Rotterdam WCT","Oahu","World Team Championship","Dortmund WCT","ATP World Tour Masters 1000 Paris","Fairfield","Amsterdam","Osaka","Kuala Lumpur-1","Brasil Open","Milan WCT","Valencia","Acapulco","Honolulu","Rancho Mirage","US Championships","ATP Masters Series Paris","Buenos Aires","Macon","London Indoor","Taipei","Split","Bournemouth","ATP Masters Series Cincinnati","Tournament of Champions WCT","Columbus WCT","Delray Beach Open","Khartoum","Sydney","ATP Doubles Challenge Cup","Metz","Rome WCT","Munich WCT","ATP World Tour Masters 1000 Rome","Vienna","Rome","Rio De Janeiro","Plava Laguna Croatia Open Umag","Oviedo","Linz","North Conway","Houston","Amsterdam WCT","Tel Aviv","Sofia","Beckenham","ATP World Tour Masters 1000 Indian Wells","Merano","Montpellier","Stockholm - WCT","Virginia Beach","Lacosta WCT","Columbus","Indianapolis","Helsinki","Sao Paulo","Hong Kong","Marseille","Rio Open presented by Claro","World Team Cup","Aptos","Barcelona Open Banc Sabadell","Seoul Olympics","Bologna","China Open","Memphis Open","Casablanca","Australian Open-2","Milan","Doubles Championship","VTB Kremlin Cup","Mumbai","Pepsi Grand Slam","Basel","Brighton","London WCT","Los Angeles","ATP Masters Series Rome","Tehran","Generali Open","Internazionali BNL d’Italia","Mutua Madrid Open","Los Angeles-2 WCT","Surbiton","Quebec WCT","Gazprom Hungarian Open","Citi Open","Toronto WCT","Nitto ATP Finals","Mexico City","Corpus Christi WCT","Barcelona WCT","Montreal / Toronto","ATP World Tour Masters 1000 Canada","Paris","Swiss Indoors Basel","Open 13 Marseille","Miami WCT","Lagos WCT","Gothenberg WCT","Rolex Monte-Carlo Masters","Sydney International","Wimbledon","ATP Masters Series Stuttgart","Australian Chps.","ATP Finals","Detroit","Ecuador Open","Bermuda","BNP Paribas Open","Banque Eric Sturdza Geneva Open","Montevideo","WCT Challenge Cup","Louisville","Laguna Niguel","Omaha","Eastbourne","Stuttgart Outdoor","Argentina Open","Strasbourg WCT","Sacramento","Sopot - WS","Hartford","Rio de Janeiro Olympic Games","Palm Desert WCT","Masters Doubles","Kansas City","Chennai","Quebec","ATP Tour World Championship","Tokyo Outdoor","Monte Carlo","Mallorca","Grand Prix Hassan II","Zell Am See WCT","Munich-2 WCT","Monte Carlo WCT","Oporto","Viña del Mar","Prague","Bangalore","Sydney Outdoor","Zurich","Monterrey WCT","Buzios","Charlotte","Moselle Open","Ho Chi Minh City","Fort Myers","Australian Championships","Sarasota","Houston-WCT","US Open","Ostrava","Aix-En-Provence","Atlanta","Tashkent","St. Louis WCT","Little Rock","Stuttgart Indoor","Nottingham 2","Miami"];
const [tourNameInput,setTourNameInput]=useState("")
const [tourYearInput,setTourYearInput]=useState(2017)
  const yearList=[1877,1878,1879,1880,1881,1882,1883,1884,1885,1886,
    1887,1888,1889,1890,1891,1892,1893,1894,1895,1896,
    1897,1898,1899,1900,1901,1902,1903,1904,1905,1906,
    1907,1908,1909,1910,1911,1912,1913,1914,1915,1916,
    1917,1918,1919,1920,1921,1922,1923,1924,1925,1926,
    1927,1928,1929,1930,1931,1932,1933,1934,1935,1936,
    1937,1938,1939,1940,1941,1942,1943,1944,1945,1946,
    1947,1948,1949,1950,1951,1952,1953,1954,1955,1956,
    1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,
    1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,
    1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,
    1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,
    1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,
    2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,
    2017];
  
    const tempListName  = useRef([]);
    const tempListYear=useRef([]);
    //console.log(x.includes("1a"));
    console.log("here "+tour.current.tourname+tour.current.year);
 
   // console.log(tempInputTour.current);
  const handleInputTourName=(e)=>{
   tempListName.current=tournamentList.filter(tour=>{
  
  return tour.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase());
  })
//console.log("li"+listtour);

setTourNameInput(e.target.value);}
const findTour=()=>{
  
  // console.log("on "+tour.tourname);

  // console.log("tw "+tour.touryear);
  searchTour(tour.current);
}

const clearInput=()=>{
  setTourNameInput("")
}
const clickTourName=(value)=>{  
  //tourNameInput=value;
  tour.current.tourname=value;
  
  
  setTourNameInput(value);
}


const clearYearInputState=()=>{
  setTourYearInput("");
}
const clickTourYear=(selectyear)=>{
tour.current.year=selectyear;
setTourYearInput(selectyear);
}
const handleInputTourYear = (event) => {
  //wotk on this part
  tempListYear.current=yearList.filter(tour=>{
  
    return tour.toString().includes(event.target.value.toString());
    })
  console.log("li"+tempListYear.current.length);
  
  setTourYearInput(event.target.value);}
return (
  <div>

   <InputTourYear
   
      yearList={tempListYear.current}
     tourYear={tourYearInput}
    
    propclick={clickTourYear}
    handleChangeYearInput={handleInputTourYear}
    clearYearInput={clearYearInputState}
      className="d-flex "
    />
    <InputTourName
    
    tourNameInput={tourNameInput}
    handleChange={handleInputTourName}
    tourList={tempListName.current}
    propclick={clickTourName}
    allTour={tournamentList}
    clearInput={clearInput}
    className="d-flex flex-column "
    
    />
    <div className="d-flex justify-content-center mt-3" >
<button className=" btn btn-success " onClick={findTour}> submit</button>
    
    </div>
    <div >
    <p > Yo {tour.current.tourname}!</p>
    </div>
   
  </div>
);
};


const InputTourName=({tourNameInput,handleChange,tourList,propclick,allTour,clearInput})=>{
  //console.log("here "+ tourNameInput.length+ JSON.stringify({tourNameInput}));
  console.log();
  const click =(value)=>{
    propclick(value)
  }
  return (
    //type="search"
    <>
   
    <div className="d-flex mt-3" >
    <label for="name" className="mr-2" >search for tour name</label>
    <div style={{marginLeft:"100px"}}>
<input className="mr-2 "  value={tourNameInput} onChange={handleChange} id="name" /> 


 <ul style={{listStyleType:"none",position:"absolute",cursor:"pointer",marginLeft:"-30px"}}> 


{
tourNameInput.length==0||allTour.includes(tourNameInput)? (<li></li>):( tourList.map((tour)=>(
 
  <li className="bg-white" key={tour} onClick={()=>click(tour)}>{tour}</li>

)) )
}
</ul>
</div>
<button onClick={clearInput} className="btn btn-warning " style={{height:"30px",verticalAlign:"center"}}>clear</button>
</div>


  </>
  )

}

      const InputTourYear = ({ tourYear, yearList,propclick, handleChangeYearInput,clearYearInput }) => {
        const click =(year)=>{
          propclick(year)
        }
      
        return (
          <>
          <div className="d-flex mt-3">
          <label for="number" className="d-flex justify-content-center mr-2  "> search for year from 1877 to 2017</label>
          <div >
          {/* onfocusout={()=>{}} */}
          <input className=" mr-2"  value={tourYear} onChange={handleChangeYearInput} id="number"/> 


 <ul style={{listStyleType:"none",position:"absolute",cursor:"pointer",padding:"7px"}}> 

 { console.log(document.getElementById("number"))}
{
  
 
  !document.getElementById("number")||tourYear.length==0||yearList.includes(tourYear)? (<li></li>):( yearList.map((year)=>(
 
  <li className="bg-white px-2" key={year} onClick={()=>click(year)}>{year}</li>

)) )
}
</ul>
</div>
<button onClick={clearYearInput} className="btn btn-warning " style={{height:"30px",verticalAlign:"center"}}>clear</button>
</div>    
    
         </>
        );
              }

export default DropDown

 {/* <select style={{Height:"200px",msOverflowY:"scroll"}}className="  w-25" value={value} onChange={onChange}>
              {yearList.map((year) => (
                <option value={year}>{year}</option>
              ))}
            </select> */}