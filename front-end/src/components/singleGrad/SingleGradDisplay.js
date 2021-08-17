import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getGradById } from "../../utils/apiFetcher";
import LoadingScreen from "../LoadingScreen";
import SingleGradHTML from "./SingleGradHTML";


export default function SingleGradDisplay(){
  const [grad, setGrad] = useState({});
  const [error, setError] = useState(null);
  const gradId = useParams().graduate_id;
  const [showLoader, setLoader] = useState(true);
  console.log("GRAD", grad);
  useEffect(()=>{
    async function loadGrad(id){
      return await getGradById(id)
        .then(setGrad)
        .catch(setError)
        .then(()=>setLoader(false));
    }

    loadGrad(gradId);
  }, [gradId])
  
  return showLoader ? <LoadingScreen/> : <SingleGradHTML grad={grad}/>
}