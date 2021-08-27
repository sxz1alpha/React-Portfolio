import React, { useState } from 'react'
import { checkEmail } from '../../utils/helpers'

function ContactForm() {
    //sets default values for the formstate
    const [formState, setFormState] = useState({ name:'', email: '', message: '' });
    // destructures form state
    const { name, email, message } = formState;
    // error message state
    const [errMessage, setErrMessage] = useState('');

    
    function handleChange(event) {
        
        if(event.target.name === 'email' ) {
            const isEmail = checkEmail(event.target.value);
            
            if(!isEmail) {
                setErrMessage('Not a valid email.')
            } else {
                // ensures the target input field has a length and isnt empty
                if(!event.target.value.length) {
                    setErrMessage(`${event.target.name} is required.`);
                } else {
                    setErrMessage('');
                }
            }
            
        }

        if(!errMessage) {
            //updates the formState where [event.target.name] is dynamically passed from the input field updated
            setFormState({...formState, [event.target.name]: event.target.value })
        }
    }
        
    //console log to show form state functioning.
    console.log(formState);
    //submit functionality will be added when i add a back end.
    // function submit(event) {
    //     event.preventDefault();
            //post fetch call to mongo db.
    // }
    
    return (
        <section>
            <h1>Contact Me</h1>
            <form>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" defaultValue={name} onBlur={handleChange}/>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" defaultValue={email} onBlur={handleChange}/>
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="6"  defaultValue={message} onBlur={handleChange}/>
                </div>
                {/* conditionally renders the error message */}
                {errMessage && (
                    <div>
                        <p className="error">{errMessage}</p>
                    </div>
                )}

                <button>Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;