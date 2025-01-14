import React, { useState } from 'react';
import {
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBInput,
}
    from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { LoginedUser } from '../../lib/types';
import { handleLogin } from '../../lib/api';
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

export function Login() {
    const [error,setError] = useState('');
    const {register, handleSubmit,reset, formState:{errors}} = useForm<LoginedUser>()
    const navigate = useNavigate()
    const onSubmit = (data:LoginedUser) => {
        handleLogin(data)
        .then(response=> {
            
            if(response.status =="error" && response.message){
                setError(response.message)
            }else{
                reset()
                navigate('/profile')
            }
        })
    }
    return (
        <MDBContainer fluid>

            <MDBRow className='d-flex justify-content-center align-items-center'>

                <MDBCol lg='8'>

                    <MDBCard className='my-5 rounded-3' style={{ maxWidth: '600px' }}>
                        <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp' className='w-100 rounded-top' alt="Sample photo" />

                        <MDBCardBody className='px-5'>

                            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Login Info</h3>
                            <p>Don't you have an account? <Link to={'/'}>Signup Now</Link></p>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                {error && <p className="text-danger">{error}</p>}
                                    {errors&& <p className='text-danger'>{errors.login?.message}</p>}
                                    <MDBInput
                                        wrapperClass='mb-4'
                                        label='Login'
                                        type='text'
                                        {...register('login',{required:"login is required"})}
                                    />
                                    {errors&& <p className='text-danger'>{errors.password?.message}</p>}
                                    <MDBInput
                                        wrapperClass='mb-4'
                                        label='Password'
                                        type='text'
                                        {...register('password',{required:"password is required"})}
                                    />
                                    <button type='submit' className='btn btn-outline-info' >Submit</button>
                            </form>



                        </MDBCardBody>
                    </MDBCard>

                </MDBCol>
            </MDBRow>

        </MDBContainer>
    );
}
