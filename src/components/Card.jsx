const Card = ({ todo }) => {
  return (
    <div
      style={{
        border: "1px solid lightgray",
        padding: "10px",
        margin: "5px 0",
      }}
    >
      {todo.text}
    </div>
  );
};
export default Card;
