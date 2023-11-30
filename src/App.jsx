import "./App.css";
import Button from "./components/Button/Button";
import CardButton from "./components/CardButton/CardButton";
import Header from "./components/Header/Header";
import JournalAddBtn from "./components/JournalAddBtn/JournalAddBtn";
import JournalItem from "./components/JournalItem/JournalItem";
import JournalList from "./components/JournalList/JournalList";
import Body from "./layouts/Body/Body";
import LeftPanel from "./layouts/LeftPanel/LeftPanel";

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
          {data.map(({ title, date, text }) => (
            <CardButton>
              <JournalItem title={title} text={text} date={date} />
            </CardButton>
          ))}
        </JournalList>
      </LeftPanel>
      <Body>Body</Body>
    </div>
  );
}

export default App;
