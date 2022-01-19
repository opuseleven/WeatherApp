import Link from 'next/link';

function Footer() {
  return (
    <div>
      <h5>Data provided by: </h5>
      <h6><Link href="www.openweathermap.org">openweathermap.org</Link></h6>
    </div>
  );
}
export { Footer };
