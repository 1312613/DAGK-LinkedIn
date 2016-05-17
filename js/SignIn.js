var CreatAccount = function () {
    var ref = new Firebase("https://shining-inferno-4286.firebaseio.com");
    var usermail = $("#usermail").val();
    var password = $("#password").val();
    ref.createUser({
        email: usermail,
        password: password
    }, function (error, userData) {
        if (error) {
            alert("Error creating user");
        } else {
            alert("Successfully created user account!");
        }
    });
}

var SignIn = function () {
    var usermail = $("#usermail").val();
    var password = $("#password").val();
    var ref = new Firebase("https://shining-inferno-4286.firebaseio.com");
    ref.authWithPassword({
        email: usermail,
        password: password
    }, function (error, authData) {
        if (error) {
            alert("You can't see this CV!");
            var temp='none';
            localStorage.setItem('temp',temp);
        } else {
            alert("Successfull!");
            var temp='yes';
            localStorage.setItem('temp',temp);
            window.location.href='MyCV.html';
        }
    });
}

