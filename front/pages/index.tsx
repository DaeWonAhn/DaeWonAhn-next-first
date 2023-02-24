import styles from "@/styles/Home.module.css";
import { Stack, Button } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";

// *******************************
// grd
//

const Home = () => {
  useEffect(() => {
    axios
      .get("/board")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <main className="py-5">
        <div className="container py-10 px-10 mx-0 min-w-full grid place-items-center">
          <h1 className="text-xl md:text-5xl text-center font-bold py-10">
            home
          </h1>
          <p className="no-underline md:underline">ㅁㄴㅁㄴㅁㄴㅁㄴ</p>
        </div>
      </main>
    </>
  );
};

export default Home;

// async로 변환하기
async function btn1Click() {
  const response = await axios.get("/board2");
  console.log(response);
}
