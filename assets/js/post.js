var aside = document.getElementsByClassName("aside-wrapper")[0];
var aside_sticky_offset_top = aside.offsetTop;
window.onscroll = function() {
    if(aside) {
        if(window.pageYOffset > aside_sticky_offset_top) {
            aside.classList.add("aside-sticky");
        } else {
            aside.classList.remove("aside-sticky");
        }
    
        scrollDetactHeading();
    }
};

window.onload = function (ev) {
    scrollDetactHeading();
};

function scrollDetactHeading() {
    var headings = document.getElementsByClassName("markdown-body")[0].getElementsByTagName('h3');
    var nearestHeading = null, nearestHeadingPageYOffset = null;
    console.clear();
    for (var i = 0; i < headings.length; i++) {
        var h = headings[i];
        var result = h.offsetTop - window.pageYOffset;
        console.log(result);
        if (0 === result) {
            nearestHeading = h;
            break
        } else if (result < 0) {
            if (nearestHeadingPageYOffset == null ||
                nearestHeadingPageYOffset <= result) {
                nearestHeadingPageYOffset = result;
                nearestHeading = h;
            }
        }
    }

    if (null != nearestHeading) {
        var menulist = document.querySelector(".outline .menu-list");
        for (var i = 0; i < menulist.children.length; i++) {
            var a = menulist.children[i].getElementsByTagName("a")[0];
            a.classList.remove("is-active");
        }
        var activeA = document.querySelector("a[href='#" + nearestHeading.id + "']");
        activeA.classList.add("is-active");
    }
}

window.addEventListener('DOMContentLoaded', function (e) {
    initHeadings();
});

function initHeadings() {
    var contentBody = document.getElementsByClassName('markdown-body')[0];
    var headings = contentBody.getElementsByTagName('h3');
    if(headings && headings.length > 0) {
        var html = "<aside class='outline menu box'>";
        html += '<ul class="menu-list" id="headings">';
        for(var i=0; i<headings.length; i++) {
            var h = headings[i];
            h.id = 'post-heading-' + i;
            html += '<li><a href="#' + h.id + '">' + h.innerText + '</a></li>';
        }
        html += '</ul>';
        html += '</aside>';
        var headingWrapper = document.getElementsByClassName('aside-wrapper')[0];
        headingWrapper.innerHTML = html;
    }
}