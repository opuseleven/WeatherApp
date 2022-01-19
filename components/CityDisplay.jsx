
function CityDisplay({ data }) {

  return (
    <div>
      <h2>{data['city']['name']}</h2>
      <p>{data['city']['coord']['lat']}° {data['city']['coord']['lon']}</p>
    </div>
  );
}

export { CityDisplay };
