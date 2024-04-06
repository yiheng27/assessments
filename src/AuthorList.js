const AuthorList = ( {authors} ) => {
    return (
      <div>
        <h2>Submitted Authors:</h2> {/* Heading for list */}

        <ul>
          {authors.map( (author, index) => (
            <li key={index}>{author}</li>
            //Render each author name as a list item
          ) )}
        </ul>
      </div>
    );
  };
  
  export default AuthorList;