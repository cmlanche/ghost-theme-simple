document.addEventListener('DOMContentLoaded', function (e) {
    initTags();
});

/**
 * 初始化所有标签
 */
function initTags() {
    getAllTags(function(res){
        if(res && res.tags){
            var html = "";
            for(var i=0; i<res.tags.length; i++) {
                var tag = res.tags[i];
                html += "<a href='/tag/" + tag.slug + "' class='tag is-light'>" 
                    + tag.name + "(" + tag.count.posts + ")" + "</a>";
            }
            var tagsElement = document.getElementById("tags");
            tagsElement.innerHTML = html;
        }
    })
}