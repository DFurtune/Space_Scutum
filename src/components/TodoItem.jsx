import React, { useState } from "react";

const TodoItem = ({ todo, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.title);

  const handleEdit = () => {
    onEdit(todo.id, editText);
    setIsEditing(false);
  };

  return (
    <div className="todo-item">
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
      ) : (
        <span>{todo.title}</span>
      )}
      <div>
        {isEditing ? (
          <button onClick={handleEdit}>Save</button>
        ) : (
          <button onClick={() => setIsEditing(true)}>Edit</button>
        )}
        <button onClick={() => onDelete(todo.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
