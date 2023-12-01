import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import CardButton from "./components/CardButton/CardButton";
import Header from "./components/Header/Header";
import JournalAddBtn from "./components/JournalAddBtn/JournalAddBtn";
import JournalItem from "./components/JournalItem/JournalItem";
import JournalList from "./components/JournalList/JournalList";
import Body from "./layouts/Body/Body";
import LeftPanel from "./layouts/LeftPanel/LeftPanel";
import JournalForm from "./components/JournalForm/JournalForm";

function App() {
  const data = [
    {
      title: "Подготовка к обновлению курсов",
      date: new Date(),
      text: "Сегодня провёл весь день за...",
    },
    {
      title: "Поход в годы",
      date: new Date(),
      text: "Думал, что очень много време...",
    },
    {
      title: "Первая заметка",
      date: new Date(),
      text: "Создал первую заметку, чтобы ...",
    },
  ];

  return (
    <div className="app">
      <LeftPanel>
        <Header />
        <JournalAddBtn />
        <JournalList>
          {data.map(({ title, date, text }, i) => (
            <CardButton key={i}>
              <JournalItem title={title} text={text} date={date} />
            </CardButton>
          ))}
        </JournalList>
      </LeftPanel>
      <Body>
        <JournalForm></JournalForm>
      </Body>
    </div>
  );
}

export default App;
