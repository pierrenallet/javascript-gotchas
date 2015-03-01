var posts = [];

var addPost = function (post) {
    var nextIndex = posts.length + 1;
    posts[nextIndex] = post;
};

addPost({ title: 'Fun with JavaScript', views: 21032 });
addPost({ title: 'Fun with JavaScript II', views: 20000 });
addPost({ title: 'Fun with JavaScript III', views: 30000 });
addPost({ title: 'Fun with JavaScript IV', views: 40000 });
	
onload = function () {
    document.getElementById("postCount").innerHTML = "There are " + posts.length + " posts";
    posts.forEach(function (post) {
        document.getElementById("posts").innerHTML += "<div>" + post.title + "</div>";
    });
};


