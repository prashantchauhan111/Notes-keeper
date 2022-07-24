import React, { useState } from "react";

function CreateArea(props) {
  const [isExpanded, setExpanded]= useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const {name, value} = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      }
    })
  }

  function submitNote(event) {
    props.onAdd(note);
    event.preventDefault();
    setNote({
      title: "",
      content: ""
    })
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form>
        {isExpanded && (<input onChange={handleChange} value={note.title} name="title" placeholder="Title" />) }

        <textarea onClick={expand} onChange={handleChange} value={note.content} name="content" placeholder="Take a note..." rows={isExpanded ? 3 : 1} />

        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
