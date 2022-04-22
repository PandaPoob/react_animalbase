export default function ToggleCell(props) {
  function handleSort() {
    props.setSort(props.sortKey);
    props.setSortDir((old) => (old === "asc" ? "desc" : "asc"));
  }

  return <th onClick={handleSort}>{props.title}</th>;
}
