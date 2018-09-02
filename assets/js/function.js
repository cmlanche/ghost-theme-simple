/**
 * 获取所有标签
 */
function getAllTags(callback) {
    var url = ghost.url.api('tags', {limit: 'all', include: 'count.posts', order: 'count.posts DESC'})
    console.log("get all tags url: " + url);
    fetch(url).then(function(response){
        return response.json();
    }).then(callback);
}

/**
 * 获取一篇文章
 * @param {w文章id} id 
 * @param {*回调} callback 
 */
function getPost(id, callback) {
    var url = ghost.url.api('posts/' + id);
    console.log("get post by id: " + url);
    fetch(url).then(function(response){
        return response.json();
    }).then(callback);
}