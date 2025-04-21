import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function AddUser() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
  });

  const { name, username, email } = user; // Destructuración de los valores del estado

  // ======================================================================== //

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    await axios.post('http://localhost:8080/user', user);

    navigate('/'); // Redirecciona al home
  };

  // ======================================================================== //

  return (
    <div className='container py-5'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h2 className='text-center m-4'>Registrar usuario</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className='mb-3'>
              <label htmlFor='Name' className='form-label'>
                Nombre
              </label>
              <input
                type={'text'}
                className='form-control'
                placeholder='Ingrese su nombre'
                name='name'
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='Username' className='form-label'>
                Usuario
              </label>
              <input
                type={'text'}
                className='form-control'
                placeholder='Ingrese su nombre de usuario'
                name='username'
                value={username}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='Email' className='form-label'>
                Correo electrónico
              </label>
              <input
                type={'text'}
                className='form-control'
                placeholder='Ingrese su correo electrónico'
                name='email'
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type='submit' className='btn btn-primary'>
              Registrar
            </button>
            <Link className='btn btn-dark mx-2' to='/'>
              Cancelar
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
