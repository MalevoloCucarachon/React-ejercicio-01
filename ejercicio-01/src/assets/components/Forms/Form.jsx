import React from 'react';
import './Form.css'
const Form = () => {
    return (
        <div>
            <form className='form-container' id="contact-form">
                <h1>Contact</h1>
                <label htmlFor="">
                    Ingrese su nombre:
                </label>
                <input type="text" />
                <label htmlFor="">
                    Ingrese un correo electrónico:
                </label>
                <input type="text" />
                <label htmlFor="">
                    Ingrese un numero de telefono:
                </label>
                <input type="text" />
                <button className='btn-submit'> Submit</button>
            </form>
        </div>
    )
}

export default Form