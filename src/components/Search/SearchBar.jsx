const FilterByInput = ({movies, filter}) => {

    const filterByNameOrId = (event) => {
      const inputValue = event.target.value.toLowerCase();
      
      const filtered = movies.filter((movie) => {
        const matchName = movie.title.toLowerCase().includes(inputValue);
        const matchId = movie.id === Number(inputValue);
    
        return matchName || matchId;
      });
  
      filter(filtered);
    };
  
    return (
      <div className="input-container">
        <input id="input-search" type="text" onChange={filterByNameOrId} />
      </div>
    );
  };
  
  export default FilterByInput;
  
  

