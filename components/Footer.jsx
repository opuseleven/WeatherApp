import Link from 'next';

function Footer() {
  return (
    <div>
      <footer>
        <h5>Data provided by:</h5>
        <Link href="www.openweathermap.org"><h6>openweathermap.org</h6></Link>
      </footer>
    </div>
  );
}
export { Footer };
