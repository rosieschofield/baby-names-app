import data from "./babyNamesData.json";
import "./styles.css"

function App(): JSX.Element {
  return (
   <section>
    {data.map((name)=> <button key={name.id} className={name.sex==="f"?"girl":"boy"}> {name.name} </button>)}
   </section>
  )
}

export default App;
