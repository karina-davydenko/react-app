import "./JournalForm.css";
import Button from "../Button/Button.jsx";
import { useState } from "react";

function JournalForm({ onSubmit }) {
  const [formValidState, setFormValidState] = useState({
    title: true,
    date: true,
    tag: true,
    text: true,
  });

  const addJournalItem = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    let isFormValid = true;
    if (!formProps.title.trim().length) {
      setFormValidState((oldState) => ({ ...oldState, title: false }));
      isFormValid = false;
    } else {
      setFormValidState((oldState) => ({ ...oldState, title: true }));
    }
    if (!formProps.text?.trim().length) {
      setFormValidState((oldState) => ({ ...oldState, text: false }));
      isFormValid = false;
    } else {
      setFormValidState((oldState) => ({ ...oldState, text: true }));
    }
    if (!formProps.date) {
      setFormValidState((oldState) => ({ ...oldState, date: false }));
      isFormValid = false;
    } else {
      setFormValidState((oldState) => ({ ...oldState, date: true }));
    }
    if (!isFormValid) {
      return;
    }
    onSubmit(formProps);
  };

  return (
    <form className="journal-form" onSubmit={addJournalItem}>
      <input
        type="text"
        name="title"
        className={`input${formValidState.title ? "" : " invalid"}`}
      />
      <input
        type="date"
        name="date"
        className={`input${formValidState.date ? "" : " invalid"}`}
      />
      <input type="text" name="tag" />
      <textarea
        name="text"
        id=""
        cols="30"
        rows="10"
        className={`input${formValidState.text ? "" : " invalid"}`}
      />
      <Button text="Сохранить" />
    </form>
  );
}

export default JournalForm;
