import React from 'react';
import './App.css';

function App() {

    const [messageValue, setMessageValue] = React.useState("")
    const [ageValue, setAgeValue] = React.useState(0)
    const [commentValue, setCommentValue] = React.useState("")
    const [reference, toggleReference] = React.useState("Anders")

    function submitted (e) {
        e.preventDefault()
        console.log(messageValue, ageValue, commentValue, reference)
    }

  return (
        <form onSubmit={submitted}>
            <fieldset>
                <legend>Gegevens</legend>

            <label htmlFor="form-field">
            Naam:
          <input
              id="form-field"
              name="text"
              placeholder="Naam"
              type="text"
              value={messageValue}
              onChange={(e) => setMessageValue(e.target.value)}
          />
            </label>
            <label htmlFor="form-field">
            <input
                id="form-field"
                name="number"
                placeholder="Leeftijd"
                type="number"
                value={ageValue}
                onChange={(e) => setAgeValue(parseInt(e.target.value))}
            />
            </label>
            </fieldset>


            <fieldset>
            <select
            name='found'
            value={reference}
            onChange={(e => toggleReference(e.target.value))}
            >
                <option value="Google">Google</option>
                <option value="Vriend">Vriend</option>
                <option value="Advertentie">Advertentie</option>
                <option value="Anders">Anders</option>
            </select>

            <label htmlFor="recipe comments">
                Opmerkingen:
                <textarea
                id="recipe comments"
                name="comment"
                rows="4"
                cols="40"
                placeholder="SChrijf hier uw opmerkingen"
                type="text"
                value={commentValue}
                onChange={(e) => setCommentValue(e.target.value)}
            >
                </textarea>
            </label>

            <button type="submit">
                Versturen
            </button>
            </fieldset>
        </form>
  );
}

export default App;
