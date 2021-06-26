import {React, useEffect, useState} from 'react'
import Sawo from "sawo"
import Donate from '../Donate/Donate'
import dotenv from 'dotenv';
dotenv.config();

const Auth = () => {
  const [payload, setPayload] = useState(false);
  
  useEffect(() => {
    var config = {
      containerID: "sawo-container",
      identifierType: "email",
      apiKey: "6412accf-b00b-44e1-aec3-240d63bb63ed",
      onSuccess: (payload) => {
        setPayload(payload);
      },
    };
    let sawo = new Sawo(config);
    sawo.showForm();
  }, []);
  
  return (
    <div>
      <div id="sawo-container" style={{height: "300px", width: "300px"}}>
      </div>
      {payload && (
        <>
          <Donate payload={payload} />
        </>
        )}
    </div>
  )
}

export default Auth
