import React, { useEffect, useState } from "react";
import { listAllGrads } from "../utils/apiFetcher";

export default function ListGrads(){
  let [grads, setGrads] = useState([]);
  let [errors, setErrors] = useState(null);

  

  useEffect(()=>{
    async function load(){
      return await listAllGrads().then(grads => setGrads(grads)).catch(setErrors);
    }
    load();
  }, []);

  console.log("GRADS", grads);
  console.log("ERRORS", errors);

  return <h3>check console</h3>
}