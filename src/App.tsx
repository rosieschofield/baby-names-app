import data from "./babyNamesData.json";
import "./styles.css"
import { useState } from "react";

interface namesType { 
  id: number, 
  name: string, 
  sex: string
}

function App(): JSX.Element {
  const [typedMessage, setTypedMessage] = useState("");
  const [favourites, setFavourites] = useState<JSX.Element[]>([])
  
  const mapData =(data:namesType[]) => {
    return data.map((name:namesType,index)=> <button key={name.id} className={name.sex==="f"?"girl":"boy"} onClick={()=>handleFavourite(name.name,name.id,name.sex)}> {name.name} </button>)
  }
  const filterData = (data:namesType[])=>{
    const filteredData = data.filter(profile=> (profile.name.slice(0,typedMessage.length)===(typedMessage.charAt(0).toUpperCase() + typedMessage.slice(1))));
    return mapData(filteredData);
  }

  const [names, setNames]=useState(mapData(data))

  const handleFavourite=(name:string,id:number, sex:string) => {
    setFavourites(prev => [...prev, <button key={id} className={sex==="f"?"girl":"boy"} onClick={()=>handleUnfavourite(id)}>{name}</button>])
  }

  const handleUnfavourite = (thisId:number)=>{
    setFavourites(prev => ([...prev].filter(element=> (element.key!==thisId))))
  }

  const handleJustBoys = ()=>{
    setNames(mapData(data.filter(profile=> (profile.sex==="m"))))
  }

  const handleJustGirls = ()=>{
    setNames(mapData(data.filter(profile=> (profile.sex==="f"))))
  }

  const handleAllNames = ()=>{
    setNames(mapData(data));
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
       <button  onClick={handleAllNames}>All</button>
      <button className ="boy" onClick={handleJustBoys}>Boys</button>
      <button className ="girl" onClick={handleJustGirls}>Girls</button>
      <p>Favourites: {favourites}</p>
    {typedMessage.length===0 ? names : filterData(data)}
   </section>
  )
}

export default App;
