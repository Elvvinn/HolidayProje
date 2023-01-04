import React from 'react'
import './login.css'
import { Field, Form, Formik } from 'formik'
import { Link } from 'react-router-dom';

function LoginPage() {
    return (
        <>
            <div className='exiticon'>
                <Link to={"/"}>  <button> EXIT </button> </Link>
            </div>
            <div className='formikfor'>

                <Formik initialValues={{
                    password: "",

                }}
                    onSubmit={(values) => {

                        console.log(values);
                    }}>

                    {
                        (props) =>
                        (
                            <Form id='formforadded'>
                                <h5>  Enter admin password </h5> <br />
                                <Field id="inputval" name="password" type="password" placeholder="Enter your password" />
                                <button type='submit' id='btnlog'>LOGIN</button>
                            </Form>
                        )
                    }

                </Formik>

            </div>

        </>
    )
}

export default LoginPage