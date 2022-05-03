//import { useState } from "react";

export default function Animal(props) {
  //const [starred, setStar] = useState(false);
  //right now starred is FALSE
  function toggle(){
    //() => setStar((old) => !old)
    props.setAnimals(old=> old.map(item=>{
      if(item.name===props.animal.name){
        const copy = {...item}
        copy.starred = !copy.starred
        return copy
      }
      return item
    }))
    
  }
  return (
    <tr key={props.animal.name}>
      <td onClick={toggle}>{props.animal.starred ? "⭐" : "☆"}</td>
      <td>{props.animal.name}</td>
      <td>{props.animal.type}</td>
      <td>{props.animal.descrip}</td>
      <td>{props.animal.age}</td>
    </tr>
  );
}
