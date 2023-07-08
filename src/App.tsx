import data from "./babyNamesData.json";
import "./styles.css"
import { useState } from "react";

interface namesType { 
  id: number; 
  name: string; 
  sex: "f"|"m"; 
}

function App(): JSX.Element {
  const [typedMessage, setTypedMessage] = useState("");
  const mapData =(data:{ id: number; name: string; sex: string; }[]) => {
    return data.map((name:{ id: number; name: string; sex: string; })=> <button key={name.id} className={name.sex==="f"?"girl":"boy"}> {name.name} </button>)
  }
  const filterData = (data:{ id: number; name: string; sex: string; }[])=>{
    const filteredData = data.filter(profile=> (profile.name.slice(0,typedMessage.length)===(typedMessage.charAt(0).toUpperCase() + typedMessage.slice(1))));
    return mapData(filteredData);
  }

  return (
   <section>
    <input
        // 1st direction binding: state -> input value
        value={typedMessage}
        // 2nd direction binding: onChange event -> state
        onChange={(event) => {
          /**
           * Recipe to learn: React stores the relevant
           *  information for this 2-way binding in
           *  event.target.value
           */
          setTypedMessage(event.target.value);
        }}
      />
    {typedMessage.length===0 ? mapData(data) : filterData(data)}
   </section>
  )
}

export default App;
