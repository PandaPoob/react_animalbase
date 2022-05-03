import Animal from "./Animal";

export default function Tbody({ filteredAnimals, setAnimals }) {
  //gives all objects in my array property starred
  /*  let starAnimals = filteredAnimals.map((a) => {
    a.starred = false;
    return a;
  }); */
  //console.log(starAnimals);
  return (
    <tbody className="Tbody">
      {filteredAnimals.map((animal) => (
        <Animal key={animal.name} animal={animal} setAnimals={setAnimals} />
      ))}
    </tbody>
  );
}
