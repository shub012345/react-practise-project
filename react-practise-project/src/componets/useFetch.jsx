import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"


const useFetch = (url) => {
    const [data, setData] = useState("");
    const [loading, setLoading] = useState("");
    const [error, setError] = useState("");

    useEffect(()=>{
       const fetchdata = async()=>{

        try{
            const response = await axios.get(url);
            setData(response.data);
            setLoading(false);
        }catch(error){
           setError(error)
        }
       }
fetchdata();
    },[url]);
    
    return { data, loading, error };
  
}

export default useFetch;