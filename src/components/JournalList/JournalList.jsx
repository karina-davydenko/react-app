import CardButton from "../CardButton/CardButton";
import JournalItem from "../JournalItem/JournalItem";
import "./JournalList.css";

function JournalList({ items }) {
  const children = () => {
    if (items.length === 0) {
      return <p>Записей пока нет, добавте первую :)</p>;
    }

    const sortItems = (a, b) => {
      if (a.date < b.date) {
        return 1;
      }
      return -1;
    };

    return items.sort(sortItems).map(({ id, title, date, text }) => (
      <CardButton key={id}>
        <JournalItem title={title} text={text} date={date} />
      </CardButton>
    ));
  };

  return <div className="journal-list">{children()}</div>;
}

export default JournalList;
