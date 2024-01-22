import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';

const api_Key=process.env.REACT_APP_GIPHY_API_KEY;


function Tag() {
  const [Tag,setTag]=useState('car');
  const [gif,setgif]=useState();
  const [loading,setloading]=useState('false');
  function clickHandle(){
    //
    fetchData();
  }
  async function fetchData(){
    setloading(true);
    const url= `https://api.giphy.com/v1/gifs/random?api_key=${api_Key}&tag=${Tag}`;
    const {data}=await axios.get(url);
    const imgurl=data.data.images.downsized_large.url;
    //console.log(imgurl);
    setgif(imgurl);
    setloading(false);
   }


  useEffect(()=>{
    fetchData();
  },[]);

      function changehandler(e){
    setTag(e.target.value);
      }
  return (
    <div className=' bg-blue-500 w-1/2  items-center font-bold mt-[25px] rounded-lg border-black flex flex-col'>
     <h1 className='underline uppercase font-bold'> A Random Gifs</h1>

     
{
  loading ? (<Spinner/>) : (<img  alt='giphy' className='w-1/2' src={gif}/>)
}

<input
className='w-10/12 text-lg bg-green-200 py-2 rounded-lg w-100px text-center  mb-[3px]'
onChange={changehandler} value={Tag}
/>

     <button className='w-10/12  bg-green-200 py-2 rounded-lg w-100px text-center mt-[300px] ' onClick={clickHandle}>
      Generate
     </button>
    </div>
  )
}

export default Tag
