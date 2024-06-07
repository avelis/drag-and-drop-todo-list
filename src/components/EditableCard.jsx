import { useState } from "react";

const EditableCard = ({ todo, onSubmit }) => {
  const [updatedText, setUpdatedText] = useState(todo.text);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...todo, text: updatedText });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={updatedText}
        onChange={(e) => setUpdatedText(e.target.value)}
        aria-label="text"
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default EditableCard;
