import { load } from "dotenv";
import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import { getGradById } from "../utils/apiFetcher";


export default function SingleGrad(){
  const [grad, setGrad] = useState({});
  const [error, setError] = useState(null);
  const gradId = useParams().graduate_id;
  console.log(grad);

  useEffect(()=>{
    async function loadGrad(id){
      return await getGradById(id).then(setGrad).catch(setError);
    }

    loadGrad(gradId);
  }, [gradId])

  const {first_name, last_name, graduation_date, graduate_email} = grad;





  return(
    <div>
      <h3>{first_name} {last_name}</h3>
    </div>
  )
}