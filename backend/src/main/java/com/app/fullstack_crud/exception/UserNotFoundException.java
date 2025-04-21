package com.app.fullstack_crud.exception;

public class UserNotFoundException extends RuntimeException {

    public UserNotFoundException(Long id) {
        super("No se ha podido encontrar el usuario con el id: " + id);
    }

}
