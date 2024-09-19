import { useEffect, useState } from "react";

function Apitext(){
      const [datos,setDato] = useState([]);

      useEffect(()=>{
       const pag = "https://jsonplaceholder.typicode.com/posts";
        fetch(pag).then((res) => res.json())
                  .then((results)=>{
         console.log(results)
         setDato(results)
       }).catch(
        ()=>console.log("ocurrio un error"));
      },[]);

  return(
    <div>
      {datos.map((info)=>(
             <div key={info.id}>
              <h1>{info.title}</h1>
              <h3>{info.body}</h3>
             </div>    
       ))
      }
     
    </div>
  )
}

export default Apitext;