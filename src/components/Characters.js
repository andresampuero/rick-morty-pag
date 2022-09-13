

function Characters(props) {

  const {characters, setCharacters}= props
  
  const resetCharacters = () => {
    setCharacters(null);
  }
  console.log(characters);
  return (
    <div className="characters">
        
        <h1>Characters</h1>
        <span className="back-home" onClick={resetCharacters}>go back to home</span>
        <div className="container-characters">
            {characters.map((character, index) => (
                <div className="character-container" key={index}>
                    <div>
                        <img src={character.image} alt={character.name}/>
                    </div>
                    <div>
                        <h3>{character.name}</h3>
                        <h6>
                            {character.status === 'Alive' ?(
                                <>
                                <span className="alive"/>
                                Alive
                                </>
                            ): (
                                <>
                                <span className="dead"/>
                                Dead
                                </>
                            )}
                        </h6>
                        <p >
                            <span className="text-grey">Episodes: </span>
                            <span>{character.episode.length}</span>
                        </p>
                        <p>
                            <span className="text-grey">Species: </span>
                            <span>{character.species}</span>
                        </p>
                    </div>
                </div>
            ))}
        </div>
        <span className="back-home" onClick={resetCharacters}>Go back to home</span>
    </div>
  )
}
export default Characters;