import "./Header.css";

export default function Header({ title }) {
  return (
    <header className="header">
      <h1 id="header-title">{title}</h1>
      <p id="header-subtitle">A todo list made of todos that you have to do.</p>
    </header>
  );
}
