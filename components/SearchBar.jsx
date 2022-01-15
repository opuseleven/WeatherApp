function SearchBar({ handleClick, searchInput }) {

  const searchString = searchInput;

  return(
    <div>
      <form onSubmit={handleClick} value={searchString}>
        <input {...searchInput} />
        <button>Search</button>
      </form>
    </div>
  );
}
export { SearchBar };
