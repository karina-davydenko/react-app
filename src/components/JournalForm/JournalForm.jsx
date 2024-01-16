import styles from "./JournalForm.module.css";
import Button from "../Button/Button.jsx";
import { useState } from "react";
import cn from "classnames";

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
    if (!formProps.title?.trim().length) {
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
    console.log("Submit");
  };

  return (
    <form className={styles["journal-form"]} onSubmit={addJournalItem}>
      <input
        type="text"
        name="title"
        placeholder="Заголовок"
        className={cn(styles.title, styles.input, {
          [styles.invalid]: !formValidState.title,
        })}
      />
      <div className={styles["form-row"]}>
        <label htmlFor="date" className={styles.label}>
          <img src="/icon-date.svg" alt="Иконка даты" />
          <span>Дата</span>
        </label>
        <input
          type="date"
          name="date"
          className={cn(styles.input, {
            [styles.invalid]: !formValidState.date,
          })}
        />
      </div>
      <div className={styles["form-row"]}>
        <label htmlFor="tag" className={styles.label}>
          <img src="/icon-tag.svg" alt="Иконка метки" />
          <span>Метки</span>
        </label>
        <input type="text" name="tag" className={cn(styles.input)} />
      </div>

      <textarea
        name="text"
        placeholder="Время написать..."
        className={cn(styles.input, styles.text, {
          [styles.invalid]: !formValidState.text,
        })}
      />
      <Button text="Сохранить" />
    </form>
  );
}

export default JournalForm;
