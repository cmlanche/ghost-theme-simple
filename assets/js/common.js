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

    initGoogleAnasystic();
});

// 初始化谷歌统计
function initGoogleAnasystic() {
    var id = config.google_analytics_id;
    // 因为要传递一个动态的统计ID，所以要懒加载gtag.js库
    LazyLoad.js('https://www.googletagmanager.com/gtag/js?id=' + id, function(){
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', id);

        window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
        ga('create', id, 'auto');
        // ga('require', 'displayfeatures');
        ga('send', 'pageview');
    })
}