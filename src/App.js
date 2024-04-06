import { useState, useEffect } from "react";
import AuthorList from "./AuthorList";
import Form from "./Form";

const App = () => {
  const [submittedAuthors, setSubmittedAuthors] = useState([]);
  // State for submitted authors
  const [users, setUsers] = useState([]);
  // State for fetched users
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data)) // Update users state with fetched data
      .catch((error) => console.error('Error fetching users:', error));
  }, []);
  // Run effect only once on component mount

  const handleSubmitAuthor = (authorName) => {
    setSubmittedAuthors([...submittedAuthors, authorName]);
    // Add submitted author to list
  };

  return (
    <div>
      <Form onSubmit={handleSubmitAuthor} /> {/* Render AuthorForm with onSubmit prop */}
      <AuthorList authors={submittedAuthors} /> {/* Render AuthorList with submitted authors */}
      <h2>List of Users:</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li> // Render each user's name as a list item
        ))}
      </ul>
    </div>
  );
}

export default App;