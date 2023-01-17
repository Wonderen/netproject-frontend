import React from 'react';
import './questionnaireStyle.css';

function Questionnaire() {
    const submitQ = async () => {
        //TODO
    };
    return (
        <div class="form-control">
            <form>
                <div>
                    <label>Hashtags
                  <small>(Check all that apply)</small>
                    </label>
                    <label htmlFor="inp-1">
                        Facilities
                        <input type="checkbox"
                            name="inp" />
                    </label>
                    <label htmlFor="inp-2">
                        Cleanliness and quality
                        <input type="checkbox"
                            name="inp" /></label>
                    <label htmlFor="inp-3">
                        Requirements
                        <input type="checkbox"
                            name="inp" /></label>
                </div>

                <div >
                    <label for="comment">
                        Comments and Suggestions
              </label>

                    <textarea name="comment" id="comment"
                        placeholder="Ideas and comments ...">
                    </textarea>
                </div>

                <button type="submit" value="submit" onSubmit={submitQ}>
                    Submit
          </button>
            </form>
        </div>
    );
}

export default Questionnaire;