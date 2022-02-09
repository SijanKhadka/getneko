import { useEffect, useState } from "react";

export const useFetch = (url) => {
//   const [catData, setCatData] = useState({ id: null, tags:null, url: "" });
// //   const [catImg, setCatImg] = useState('')
//   useEffect(() => {
//     const fetchApi = async (url) => {
//       fetch(await url)
//         .then((x) => x.json())
//         .then((y) => setCatData({id: y.id, tags: y.tags, url: y.url}));
//     };

//     fetchApi(url);

    
//   }, [url]);


  const [catData, setCatData] = useState('');
  //   const [catImg, setCatImg] = useState('')
    useEffect(() => {
      const fetchApi = async (url) => {
        fetch(await url)
          .then((x) => x.json())
          .then((y) => setCatData(y[Math.floor(Math.random() * 50)].id));
      };
  
      fetchApi(url);
  
      
    }, [url]);

//   useEffect(() => {
//     const fetch2 = async (a) => {
//         fetch(await a)
//           .then((x) => x.blob())
//           .then((y) => {
//               setCatImg(y)
//               console.log(y)
//           });
//       };
  
//       fetch2(catData);
  
//   }, [catData])
  
  return catData;
};
