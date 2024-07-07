var posts=["newblog/这是另一篇新的博文/","newblog/这是一篇新的博文/","newblog/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };