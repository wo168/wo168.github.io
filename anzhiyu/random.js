var posts=["2024/07/03/这是一篇新的博文/","2024/07/03/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };