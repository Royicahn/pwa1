$(document).ready(function () {


    $('#btn-activate').click(function (e) {

        //let token = 'JT';

        //$('#activation-status').html('ACTIVATION Token: <h1>' + token + '</h1>');

        registerActivation('Jorge Astyaro');

    });


    ///TODO: Check periodically the status of the activation


    function registerActivation(hash) {

        $('#activation-status').text('Activating...');

        $.post(
            "./registerActivation.php",
            {
                data: hash
            },
            function (result) {

                //console.log(result);

                if (!result.success) return;

                $('#status-table').show();
                $('#status').html('<strong color:"#0f0">ENIGMA ACTIVE</strong>');
                $('#user').html(result.hash);
                $('#time').html(result.time);
                $('#location').html(result.loc);
                $('#token').html(result.token);

            }
        );

    }



});