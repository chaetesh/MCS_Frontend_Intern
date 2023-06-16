import React,{useContext} from "react";
import noteContext from "../context/notes/noteContext";
import Notiflix from "notiflix";

const NoteItem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note,updateNote } = props;
  
  return (
    <div className="col-md-3">
      <div className="card">
        <div className="card-body">
          {note.completed == false ? (
            <p className="text-danger">Task Pending</p>
          ) : (
            ""
          )}
          <h4 className="card-title">{note.title}</h4>
          <p className="card-text">{note.description}</p>
          <i
            className="fa-solid fa-trash mx-3"
            onClick={() => {
              deleteNote(note._id);
              Notiflix.Notify.success("Task Deleted!");
            }}
          ></i>
          <i
            className="fa-solid fa-pen-to-square mx-3"
            onClick={() => {
              updateNote(note);
            }}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
