import { useState } from "react";
import MapComp from "./components/MapComp";
import "./mNormalize.css";
import DataTable from "./components/DataTable";
const App = () => {
  const [coords, setCoords] = useState({
    ip: "192.212.174.101",
    location: {
      region: `Broolyn, NY 10001`,
      timezone: "-05:00",
      lat: "43.731567",
      lng: "7.414932",
    },
    isp: "SpaceX Starlink",
  });
  console.log(coords);
  const [loding, setLoding] = useState(false);
  const [error, setError] = useState("");

  const fetchLocation = async (ip: string, domain = "") => {
    try {
      setLoding(true);
      const data = await fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${
          import.meta.env.VITE_API_KEY
        }&ipAddress=${ip}&domain=${domain}`
      );
      const res = await data.json();
      setCoords(res);
      setLoding(false);
    } catch (err) {
      setLoding(false);
      setError((err as Error).message);
    }
  };

  function handleSubmit(e: any) {
    e.preventDefault();
    // eslint-disable-next-line prefer-const
    let ipValue = e.target.elements["ip"].value.trim();
    console.log(ipValue);
    const IP_REGEX = /^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}$/;
    const DOMAIN_REGEX =
      /(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/g;

    if (IP_REGEX.test(ipValue)) return fetchLocation(ipValue);

    if (DOMAIN_REGEX.test(ipValue)) return fetchLocation("", ipValue);
    setError("Please enter a valid domain name or Ip Address");
  }
  return (
    <div className="absolute inset-0  h-full w-full items-center px-5 py-4">
      <div className="flex flex-col justify-center items-center">
        <div className="text-4xl  font-semibold "> Track any IP Address</div>
        <form
          className=" flex items-center  max-w-[35rem] w-[85%] bg-white relative mt-5 rounded-xl"
          onSubmit={handleSubmit}
        >
          <input
            type="search"
            placeholder="Provide Ip address"
            name="ip"
            className="bg-contain  bg-white text-black	 px-4 py-4 rounded-xl w-[99%]  focus:outline-none "
          />
          <button
            className=" bg-black  rounded-e-xl  w-14  relative  px-4 py-4 cursor-pointer font-bold text-xl text-white flex"
            type="submit"
          >
            <SearchIcoin />
          </button>
        </form>
        <div className="mt-6">
          <DataTable info={coords} loding={loding} error={error} />
        </div>
        <MapComp positions={coords.location} isp={coords.isp} />
      </div>
    </div>
  );
};

export default App;

function SearchIcoin() {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="-0.5 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0" />

      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      />

      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M22 11.8201C22 9.84228 21.4135 7.90885 20.3147 6.26436C19.2159 4.61987 17.6542 3.33813 15.8269 2.58126C13.9996 1.82438 11.9889 1.62637 10.0491 2.01223C8.10927 2.39808 6.32748 3.35052 4.92896 4.74904C3.53043 6.14757 2.578 7.92935 2.19214 9.86916C1.80629 11.809 2.00436 13.8197 2.76123 15.6469C3.51811 17.4742 4.79985 19.036 6.44434 20.1348C8.08883 21.2336 10.0222 21.8201 12 21.8201"
          stroke="#ffffff"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />{" "}
        <path
          d="M2 11.8201H22"
          stroke="#ffffff"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />{" "}
        <path
          d="M12 21.8201C10.07 21.8201 8.5 17.3401 8.5 11.8201C8.5 6.30007 10.07 1.82007 12 1.82007C13.93 1.82007 15.5 6.30007 15.5 11.8201"
          stroke="#ffffff"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />{" "}
        <path
          d="M18.3691 21.6901C20.3021 21.6901 21.8691 20.1231 21.8691 18.1901C21.8691 16.2571 20.3021 14.6901 18.3691 14.6901C16.4361 14.6901 14.8691 16.2571 14.8691 18.1901C14.8691 20.1231 16.4361 21.6901 18.3691 21.6901Z"
          stroke="#ffffff"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />{" "}
        <path
          d="M22.9998 22.8202L20.8398 20.6702"
          stroke="#ffffff"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />{" "}
      </g>
    </svg>
  );
}
