import { useState, useEffect } from 'react'
import Temprature from './Components/Temprature'
import Highlights from './Components/Highlights'

function App() {
  const [city, setCity] = useState("Islamabad");
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!city) return; 

    const url = `https://api.weatherapi.com/v1/current.json?key=3901c2cdb6434fa7b8855928251905&q=${city}&aqi=no`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Weather data not found");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((e) => {
        console.error("Error fetching weather:", e);
      });
  }, [city]);

return (
    <>
   <div className="bg-slate-800 min-h-screen flex flex-col md:flex-row items-start gap-10 px-4 md:px-16 py-10">
  {/* Left */}
  <div className="w-full md:w-1/4 md:mt-20">
    {data && (
      <Temprature
        setCity={setCity}
        stats={{
          temp: data.current.temp_c,
          condition: data.current.condition.text,
          isDay: data.current.is_day,
          location: data.location.name,
          time: data.location.localtime,
        }}
      />
    )}
  </div>

  {/* Right */}
  <div className="w-full md:w-2/4 md:ml-25 mt-10 md:mt-20">
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid md:grid-cols-2 gap-6">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-200 col-span-1 md:col-span-2">
        Today's Highlights
      </h2>

      {data && (
        <>
          <Highlights
            status={"wind status"}
            stats={{
              speed: data.current.wind_mph,
              dir: data.current.wind_dir,
            }}
          />
          <Highlights
            status={"humidity"}
            stats={{
              humidity: data.current.humidity,
            }}
          />
          <Highlights
            status={"visibility"}
            stats={{
              vis: data.current.vis_miles,
            }}
          />
          <Highlights
            status={"Air pressure"}
            stats={{
              pres: data.current.pressure_mb,
            }}
          />
        </>
      )}
    </div>
  </div>
</div>

      
    </>
  )
}

export default App
