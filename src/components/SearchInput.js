function SearchInput( {handleSubmit, searchWord, setSearchWord} ) {
    return (  
        <form onSubmit={(e) => handleSubmit(e)}>
            <input 
            className="rounded border-primary"
            type="text"
            value={searchWord}
            onChange={(e) => setSearchWord(e.target.value)}
            />
        </form>
    );
}

export default SearchInput;