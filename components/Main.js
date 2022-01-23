import { useState } from "react"
import CreateForm from "./CreateForm";
import ReportTable from "./ReportTable";
import Footer from "./Footer";
// import { hourly_sales } from "../data.js";



export default function Main() {

  const hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']
  const [totalLocationData, setTotalLocationData] = useState([])

  function handleForm(e) {
    e.preventDefault();
    const [location, minCust, maxCust, avgCust] = e.target
    
    let storeDailyTotal = 0
    const hourlySale = hoursOfOperation.map(hour => {
      const randomNumCus = Math.floor(Math.random() * (maxCust.value - minCust.value + 1)) + minCust.value
      const numCookiesSold = randomNumCus * avgCust.value
      storeDailyTotal = storeDailyTotal + numCookiesSold
      return numCookiesSold
    })

    const locationData = { "location": location.value, "hourlySales":hourlySale, "dailyTotal":storeDailyTotal }
    setTotalLocationData([...totalLocationData, locationData]);
  }

  return (
      <>    
      <main>
      <div className=' bg-emerald-300 w-3/4 mx-auto my-5 rounded-md'>
        <h2 className=' text-center py-3 font-semibold text-xl'>Create Cookie Stand</h2>
        <CreateForm handleForm={handleForm} />
      </div>
      <ReportTable data={totalLocationData} times = {hoursOfOperation} />
      {/* <Footer data={totalLocationData} /> */}
    </main>
    
    </>

  )
}