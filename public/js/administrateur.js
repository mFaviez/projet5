$('.valide').click(function() {
    var button = document.getElementById('valide');

    $.ajax({
        type: 'POST',
        url: 'public/ajax/avis.php',
        data: { 'valideAvisId': button.dataset.idAvis },
        dataType: 'JSON',
        success: function(data) {
            alert('Avis validé !');
            window.location.reload();
        }
    });
});

$('.deleteAvis').click(function() {
    var button = document.getElementById('deleteAvis');

    $.ajax({
        type: 'POST',
        url: 'public/ajax/avis.php',
        data: { 'deleteAvisId': button.dataset.idAvis },
        dataType: 'JSON',
        success: function(data) {
            alert('Avis supprimé !');
            window.location.reload();
        }
    });
});