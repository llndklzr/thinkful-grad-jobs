import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getGradById } from "../../utils/apiFetcher";
import LoadingScreen from "../LoadingScreen";
import SingleGradHTML from "./SingleGradHTML";
import Modal from "../modals/Modal";


export default function SingleGradDisplay({formData = {}}){
  const [grad, setGrad] = useState(formData);
  const [whichModal, setWhichModal] = useState("");
  const [, setError] = useState(null);
  const gradId = useParams().graduate_id;
  const [showLoader, setLoader] = useState(true);



  useEffect(()=>{
    async function loadGrad(id){
      return await getGradById(id)
        .then(setGrad)
        .catch(setError)
        .then(()=>setLoader(false));
    }

    loadGrad(gradId);
    
  }, [gradId])
  
  return showLoader ? <LoadingScreen/> : 
    <>
      <SingleGradHTML setWhichModal={setWhichModal} whichModal={whichModal} grad={grad}/> 
      <Modal whichModal={whichModal} setWhichModal={setWhichModal} grad={grad}/>
    </>
}