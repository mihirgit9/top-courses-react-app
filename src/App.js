import React from "react";
import { Navbar } from "./components/Navbar";
import { Filter } from "./components/Filter";
import { Cards } from "./components/Cards";
import { Loading } from "./components/Loading" ;
import { filterData, apiUrl } from "./data";
import { useState, useEffect } from "react";
import {toast} from "react-toastify";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchApi(url){
    setLoading(true);
    try{
      const response = await fetch(url);
      const data =await response.json();
      setLoading(false);
      setCourses(data.data);
    }
    catch(err){
      toast.error("Something Went Wrong, Try Again");
    }
    
  }

  useEffect(()=>{
    fetchApi(apiUrl);
  }, [])


  return(
    <div>
      <Navbar></Navbar>
      <Filter filterData={filterData} category={category} setCategory={setCategory}></Filter>
      {
        loading ? <Loading></Loading> : <Cards courses={courses} category={category}></Cards>
      }
    </div>
  );
};

export default App;
