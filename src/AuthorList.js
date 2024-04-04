const AuthorList = ( {authors} ) => {
    return (
      <div>
        <h2>Submitted Authors:</h2>
        <ul>
          {authors.map( (author, index) => (
            //maps authors into a list with index
            <li key={index}>{author}</li>
            //create list item for each author name
            //key={index}: update when list changes
          ) )}
        </ul>
      </div>
    );
  };
  
  export default AuthorList;