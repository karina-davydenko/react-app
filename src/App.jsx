import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import JournalAddBtn from "./components/JournalAddBtn/JournalAddBtn";
import JournalList from "./components/JournalList/JournalList";
import Body from "./layouts/Body/Body";
import LeftPanel from "./layouts/LeftPanel/LeftPanel";
import JournalForm from "./components/JournalForm/JournalForm";

const INITIAL_DATA = [
  // {
  //   id: 1,
  //   title: "Подготовка к обновлению курсов",
  //   date: new Date(),
  //   text: "Сегодня провёл весь день за...",
  // },
  // {
  //   id: 2,
  //   title: "Поход в годы",
  //   date: new Date(),
  //   text: "Думал, что очень много време...",
  // },
  // {
  //   id: 3,
  //   title: "Первая заметка",
  //   date: new Date(),
  //   text: "Создал первую заметку, чтобы ...",
  // },
];

function App() {
  const [items, setItems] = useState(INITIAL_DATA);

  const addItem = (item) => {
    setItems((oldItems) => [
      ...oldItems,
      {
        id:
          oldItems.length > 0 ? Math.max(...oldItems.map((i) => i.id)) + 1 : 1,
        title: item.title,
        date: new Date(item.date),
        text: item.text,
      },
    ]);
  };

  return (
    <div className="app">
      <LeftPanel>
        <Header />
        <JournalAddBtn />
        <JournalList items={items} />
      </LeftPanel>
      <Body>
        <JournalForm onSubmit={addItem}></JournalForm>
      </Body>
    </div>
  );
}

export default App;
