import { useState } from "react";


const Form = ( {onSubmit} ) => {
    const [authorName, setAuthorName] = useState('');
    //useState->track state; [current state, set new state function]
    //initial authorName == ''
    const handleSubmit = (e) => {
        e.preventDefault();
        //prevent reloading of page after submission
        onSubmit(authorName);
        //submit authorName
        setAuthorName('');
        //reser after submission
    }

    return (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="author name"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            //onchanges, get current input text and calls setAuthorName, update authorName
            //e->event, e.target->element that triggered event (text input), e.target.value-> retrieves current value ot text input
          />
          <button type="submit">submit</button>
        </form>
      );
}

export default Form;