document.addEventListener('DOMContentLoaded', function (e) {
    var info_nav = document.getElementById('navbarBurgerMenu');
    if (info_nav) {
        var list = info_nav.querySelectorAll('a');
        var path = window.location.href;
        for (var i = 0; i < list.length; i++) {
            var link = list[i];
            if (link.href === path) {
                link.classList.add('is-active');
            } else {
                link.classList.remove('is-active');
            }
        }
    }
});