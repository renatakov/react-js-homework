import Notes from "../Components/Notes/Notes.jsx";
import { connect } from "react-redux";
import { addNoteAC, deleteNoteAC, updateNoteAC } from "./reducers/notesReducer.js";

const mapStateToProps = (state) => ({
    notes: state.notesPage.notes
});

const mapDispatchToProps = ({
    deleteNote: deleteNoteAC,
    addNote: addNoteAC,
    updateNote: updateNoteAC
});

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
