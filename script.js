$(function() {
    $('.toggles button').click(function() {
        var getId = this.id;
        var getCurrent = $('.posts .' + getId);

        $('.post').not(getCurrent).hide(500);
        getCurrent.show(500);
    });

    $('#showall').click(function() {
        $('.post').show(500);
    });
})