const hola = (event) => {
    event.preventDefault();

    
    const newUser = {
        name : document.getElementById('inputFirst').value.toLowerCase(),
        lastName : document.getElementById('inputLast').value.toLowerCase(),
        email : document.getElementById('inputEmail').value,
        password : document.getElementById('inputPassword').value,
    }

    const userCheckPass = document.getElementById('checkPassword').value;
    const checkOut = document.getElementById('inputCheck').checked;
    
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;




    if(newUser.name.length < 3) {
        alert('El Nombre ingresado no es valido');
        return;
    }

    if(newUser.lastName.length < 3) {
        alert('El Apellido ingresado no es valido');
        return;
    }

    if(!emailRegex.test(newUser.email)){
        alert('Direccion de correo no valida');
        return;
    }

    if(!passwordRegex.test(newUser.password)){
        alert('Contraseña no valida, recuerde que debe ingresar al menos: una mayuscula, una minuscula, un numero y un simbolo especial');
        return;
    }

    if(newUser.password !== userCheckPass){
        alert('Las contraseñas no coinciden');
    }

    
    if(!checkOut){
        alert('Debe aceptar los Terminos y Condiciones');
        return;
    }

    const storageUsers = JSON.parse(localStorage.getItem('users')) || [];

    const userAlreadyExist = storageUsers.find((user) =>{
        return user.email === newUser.email;
    })

    const usuario = storageUsers;

    if(userAlreadyExist){
        alert(`El usuario con el email: ${newUser.email} ya existe`);
    }else{
        usuario.push(newUser);
    }



    localStorage.setItem('users', JSON.stringify(usuario))


    window.location.href = 'http://127.0.0.1:5500/pages/Form.html';
}
