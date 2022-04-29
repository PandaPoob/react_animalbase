import { useState } from "react";

export default function Animal(props) {
  const [starred, setStar] = useState(false);
  //right now starred is FALSE

  return (
    <tr key={props.animal.name}>
      <td onClick={() => setStar((old) => !old)}>{starred ? "⭐" : "☆"}</td>
      <td>{props.animal.name}</td>
      <td>{props.animal.type}</td>
      <td>{props.animal.descrip}</td>
      <td>{props.animal.age}</td>
    </tr>
  );
}
