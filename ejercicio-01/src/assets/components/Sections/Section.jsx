import React from 'react';
import './Section.css'
import Form from '../Forms/Form';


const Section = () => {
    const [show, setShow] = React.useState(false);

    const handleClick = (event) => {
        setShow(!show);
    }
    return (
        <div className='main-section'>
            <div className='page'>
                <h1>¿Quién soy?</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Neque ratione mollitia libero itaque optio modi, laborum laboriosam illum cupiditate,
                    dolorum dolore ut soluta blanditiis eum error nostrum explicabo. Sequi, voluptatibus!
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Neque ratione mollitia libero itaque optio modi, laborum laboriosam illum cupiditate,
                    dolorum dolore ut soluta blanditiis eum error nostrum explicabo. Sequi, voluptatibus!
                </p>
                <button className='btn-contact' onClick={handleClick}> Contact</button>
                {show && <Form />}
            </div>
        </div>
    )
}

export default Section