import React, { useState, useEffect } from "react";
import Head from "next/head";

const index = () => {
  const [catData, setCatData] = useState("");
  const [url, setURL] = useState({ url: null, tags: [], new: false });
  const api_url = "https://cataas.com/api/cats";
  // let catData;
  // function run() {
  //   catData = useFetch(api_url);
  //   setURL({ url: `https://cataas.com/cat/${catData}`, new: true });
  // }
  // setURL(`https://cataas.com${catData}`);

  useEffect(() => {
    if (!url.url)
      setURL({
        url: "https://media2.giphy.com/media/l41YrkD7I6LnwFd4Y/giphy.gif?cid=ecf05e47xpf3l2g89fy477tmi1inl0pov5phhqbn63bxmvgn&rid=giphy.gif&ct=g",
        tags: [],
        new: true,
      });
    const fetchApi = async (url) => {
      fetch(await url)
        .then((x) => x.json())
        .then((y) => setCatData(y[Math.floor(Math.random() * y.length)].id));
    };
    fetchApi(api_url);
    // setURL({url:'https://media3.giphy.com/media/CjmvTCZf2U3p09Cn0h/giphy.gif?cid=ecf05e479vafl7hrnl8vutt31d5q94905d1upatbpj6a6lt2&rid=giphy.gif&ct=g', new:true})
  }, []);

  return (
    <>
      <Head>
        <title>Get Neko!</title>
        <meta
          name="description"
          content="Summon random cats from the neko-dimension nyan!"
        />
        <meta property="og:title" content="Get Neko!" />
        <meta
          property="og:description"
          content="Summon random cats from the neko-dimension nyan!"
        />
        <meta
          property="og:image"
          content="https://i.kym-cdn.com/photos/images/newsfeed/002/205/323/176.jpg"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="App">
        <button
          onClick={() => {
            const fetchApi = async (url) => {
              fetch(await url)
                .then((x) => x.json())
                .then((y) => {
                  setCatData(y[Math.floor(Math.random() * y.length)].id);
                });
            };
            fetchApi(api_url);
            const woohoo = async (catData) => {
              await catData;
              setURL({ url: `https://cataas.com/cat/${catData}`, new: true });
            };
            woohoo(catData);
          }}
        >
          GET{" "}
          <span>
            <img src="https://see.fontimg.com/api/renderfont4/PKoKx/eyJyIjoiZnMiLCJoIjozNCwidyI6MjAwMCwiZnMiOjE3LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/cmFuZG9t/anggota.png" />
          </span>{" "}
          NEKO! <span>😼</span>
        </button>
        {/* <button>GIFS</button>
        <a href={url.url}>Image</a> */}
        <div>{url.new && <img src={url.url} />}</div>
      </div>
      <footer>
        Made by{" "}
        <a
          href="https://instagram.com/sijanxo"
          target="_blank"
          rel="noreferrer"
          nofollow
        >
          Sijan
        </a>{" "}
        &copy; <span className="code">lhol lhmao</span>
      </footer>
    </>
  );
};

export default index;
