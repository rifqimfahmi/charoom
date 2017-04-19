var warningSign = false;
$('#signupForm').submit(function(event) {
    if ($('#firstName').val() &&
        $('#lastName').val() &&
        $('#gender').val() &&
        $('#email').val() &&
        $('#username').val() &&
        $('#password').val() &&
        $('#confirmpass').val()
    ) {
        if ($('#password').val() != $('#confirmpass').val()) {
            event.preventDefault();
            alert('Your password doesn\'t match');
        }
    } else {
        event.preventDefault();
        if (!warningSign) {
            var element = document.createElement('h2');
            element.classList.add('bg-danger', 'p-3', 'text-white', 'mb-3');
            element.innerHTML = 'Required field must be filled';
            $('.form-container').prepend(element);
            warningSign = true;
        }
        $('body').scrollTop(0);
    }
    console.dir();
});
