export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <small>
        &copy; {currentYear} <a href="/">johnsonta.dev</a>
      </small>
    </footer>
  );
}
