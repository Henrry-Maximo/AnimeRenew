export function Error(props) {
  return (
    <>
        <h1 style={{ color: "white" }}>{props.number} - {props.message}</h1>
    </>
  );
}
