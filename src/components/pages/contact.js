import React from 'react';

import './contact.css';
//import 'bootstrap/dist/css/bootstrap.min.css';


export default function Contact(){
    return (
    <>
        <h1 className='contact'>Contact</h1>
        <div className='section'>
            <div className="container">
                <form>
                    <label>First Name</label>
                    <input type='text' placeholder="Your name.."/>
                    <label>Last Name</label>
                    <input type='text' placeholder="Your last name.."/>
                    <label>Country</label>
                    <select>
                        <option value="Australia">Australia</option>
                        <option value="Serbia">Serbia</option>
                        <option value="Macedonia">Macedonia</option>
                    </select>
                    <label>Subject</label>
                    <textarea placeholder="Write something to us..."></textarea>
                    <input type="submit"/>
                </form>
            </div>
        </div>
    </>
    )
}