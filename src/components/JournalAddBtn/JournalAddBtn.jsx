import CardButton from "../CardButton/CardButton";
import "./JournalAddBtn.css";

function JournalAddBtn() {
  return (
    <CardButton className="journal-add">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M10 4.96265V16.6293"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.16669 10.796H15.8334"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <p>Новое воспоминание</p>
    </CardButton>
  );
}

export default JournalAddBtn;
