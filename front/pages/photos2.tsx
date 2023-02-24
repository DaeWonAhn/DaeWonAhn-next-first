import dynamic from "next/dynamic";
import "smart-webcomponents-react/source/styles/smart.default.css";
import { useEffect, useState } from "react";
import axios from "axios";

//Dynamically import the Smart.Grid component
const Grid = dynamic(() => import("smart-webcomponents-react/grid"), {
  ssr: false, //no server-side rendering
  loading: () => <p>Loading...</p>,
});

const photos2 = () => {
  const URL = "http://dummy.restapiexample.com/api/v1/employees";
  const [data, setData] = useState([]);

  const columns = [
      {
        label: "id",
        dataField: "id",
        width: 200,
      },
      {
        label: "employee_name",
        dataField: "employee_name",
      },
    ],
    sorting = {
      enabled: true,
    },
    filtering = {
      enabled: true,
    },
    selection = {
      enabled: true,
      checkBoxes: {
        enabled: true,
      },
    },
    dataSourceSettings = {
      dataFields: [
        { name: "id", dataType: "number" },
        { name: "employee_name", dataType: "string" },
      ],
    };

  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
      const data = await axios.get("/board2");

      setData(data.data);
    };

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, []);

  /*
  useEffect(() => {
    const initDate async () => {
      const data2 = await data3()
    }
    a();
  },[]);
  
  */

  // [react] useEffect 훅에서 async await 함수 사용하기

  return (
    <div>
      <Grid
        id="grid"
        sorting={sorting}
        filtering={filtering}
        columns={columns}
        selection={selection}
        dataSource={setData}
        dataSourceSettings={dataSourceSettings}
      ></Grid>
    </div>
  );
};

export default photos2;
