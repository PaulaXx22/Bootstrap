$(document).ready(function() {
  // crear usuario
  $('#viewCreateUser').show();
  $('#viewUsers').hide();

  
  $('#userForm').submit(function(event) {
    event.preventDefault(); 

    
    var name = $('#name').val();
    var email = $('#email').val();
    var password = $('#password').val();
    var confirmPassword = $('#confirmPassword').val();

    //  contraseña
    if (password !== confirmPassword) {
      alertMessage('Las contraseñas no coinciden.', 'alert-danger');
      return;
    }

    // Guardar usuario en localStorage
    var user = {
      name: name,
      email: email
    };
    localStorage.setItem('user', JSON.stringify(user));

   
    alertMessage('Usuario creado correctamente.', 'alert-success');

   
    $('#viewCreateUser').hide();
    $('#viewUsers').show();
    showUsers();
  });

  //  usuarios guardados
  function showUsers() {
    var user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      var userList = $('#userList');
      var userCard = `
        <div class="col-md-4 mb-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${user.name}</h5>
              <p class="card-text">Correo: ${user.email}</p>
            </div>
          </div>
        </div>
      `;
      userList.append(userCard);
    }
  }

  // alerta
  function alertMessage(message, alertType) {
    var alertDiv = $('<div>').addClass('alert ' + alertType).text(message);
    $('body').append(alertDiv);
    setTimeout(function() {
      alertDiv.alert('close');
    }, 3000);
  }

 
  $('#navCreateUser').click(function(event) {
    event.preventDefault();
    $('#viewCreateUser').show();
    $('#viewUsers').hide();
  });

  $('#navUsers').click(function(event) {
    event.preventDefault();
    $('#viewCreateUser').hide();
    $('#viewUsers').show();
    showUsers();
  });
});
