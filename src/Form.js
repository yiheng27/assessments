import { useState } from "react";


const Form = ( {onSubmit} ) => {
    const [authorName, setAuthorName] = useState('');
    //Define state for authorName
    const handleSubmit = (e) => {
        e.preventDefault();
        //Prevent reloading of page after submission
        onSubmit(authorName);
        //Call parent component's onSubmit function with authorName
        setAuthorName('');
        //Clear authorName after submission
    }

    return (
        <form onSubmit={handleSubmit}> {/*Form submission handler */}
          <input
            type="text"
            placeholder="author name"
            value={authorName} //Controlled input value
            onChange={(e) => setAuthorName(e.target.value)}
            //Update authorName state on input change
          />
          <button type="submit">submit</button>
        </form>
      );
}

export default Form;