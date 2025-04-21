import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function ViewUser() {
  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };

  return (
    <div className='container py-5'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h2 className='text-center m-4'>Datos del usuario</h2>

          <div className='card mb-4'>
            <div className='card-header'>
              <ul className='list-group list-group-flush'>
                <li className='list-group-item'>
                  <b>Id: </b>
                  {user.id}
                </li>
                <li className='list-group-item'>
                  <b>Nombre: </b>
                  {user.name}
                </li>
                <li className='list-group-item'>
                  <b>Usuario: </b>
                  {user.username}
                </li>
                <li className='list-group-item'>
                  <b>Email: </b>
                  {user.email}
                </li>
              </ul>
            </div>
          </div>
          <Link className='btn btn-dark my-2' to={'/'}>
            Volver
          </Link>
        </div>
      </div>
    </div>
  );
}
