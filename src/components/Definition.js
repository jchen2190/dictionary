function Definition( {loading, data, word, error} ) {
    
    if (!word) {
        return <h1 className="p-3">Search for a word</h1>
    }
    if (loading && !data) {
        return <h1 className="p-3">Loading...</h1>
    }
    if (error) {
        return <h1 className="p-3">An error has occured</h1>
    }

    return (
        <>
            <h1>{data[0].word}</h1>

            <div>
                {data[0].phonetics.map((text, index) => (
                    <span key={index}> {text.text} </span>
                ))}
            </div>

            <div>
                {data[0].meanings.map((meaning, index) => (
                    <div key={meaning.partOfSpeech}>
                        <h2>{meaning.partOfSpeech}</h2>
                        {meaning.definitions.map((obj, index) => (
                            <ul key={index}>
                                <li className="list-unstyled">{obj.definition}</li>
                            </ul>
                        ))}
                    </div>
                ))}
            </div>

            <div>
                {data[0].sourceUrls.map((source, index) => (
                    <span key={index}>Source: <a href={source}>{source}</a></span>
                ))}
            </div>
        </>
    );
}

export default Definition;