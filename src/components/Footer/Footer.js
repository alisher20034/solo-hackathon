import styles  from "./Footer.module.css";

export const Footer = ({ year }) => {
  return (
    <footer>
      <span>NEWS PAGE - {year}</span>
    </footer>
  );
};
