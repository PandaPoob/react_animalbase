import Animal from "./Animal";

export default function Tbody({ filteredAnimals }) {
  let starAnimals = filteredAnimals.map((a) => {
    a.starred = false;
    return a;
  });
  console.log(starAnimals);
  return (
    <tbody className="Tbody">
      {starAnimals.map((animal) => (
        <Animal key={animal.name} animal={animal} />
      ))}
    </tbody>
  );
}

/*  filteredAnimals.map((animal) => {
    return (
      <tr key={animal.name}>
        <td>{animal.name}</td>
        <td>{animal.type}</td>
        <td>{animal.descrip}</td>
        <td>{animal.age}</td>
      </tr>
    );
  });
 */
