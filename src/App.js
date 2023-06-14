import './App.css';
import React, { useState } from 'react';
import useAxios from './hooks/useAxios';
import SearchInput from './components/SearchInput';
import Definition from './components/Definition';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  const [searchWord, setSearchWord] = useState("");
  const [word, setWord] = useState("");

  const [setUrl, data, loading, setLoading, error] = useAxios();

  function handleSubmit(e) {
    e.preventDefault();

    setWord(searchWord);

    setUrl(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`)
    setLoading(true);
  }

  return (
    <div className="App">
      <h1 className="p-3">Dictionary Search</h1>
      <SearchInput handleSubmit={handleSubmit} searchWord={searchWord} setSearchWord={setSearchWord} />

      <Definition loading={loading} data={data} word={word} error={error}/>
    </div>
  );
}

export default App;
