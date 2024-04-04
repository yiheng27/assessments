import { useState, useEffect } from "react";
import AuthorList from "./AuthorList";
import Form from "./Form";

const App = () => {
  //init state, submittedAuthors (form) & users (list of authors from API)
  const [submittedAuthors, setSubmittedAuthors] = useState([]);
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching users:', error));
  }, []);

  const handleSubmitAuthor = (authorName) => {
    setSubmittedAuthors([...submittedAuthors, authorName]);
  };

  return (
    <div>
      <Form onSubmit={handleSubmitAuthor} />
      <AuthorList authors={submittedAuthors} />
      <h2>List of Users:</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;