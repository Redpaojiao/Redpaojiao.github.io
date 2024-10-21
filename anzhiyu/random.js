var posts=["2024/10/17/2023年自用开源软件大全/","2024/10/17/Windows装机好软推荐（小白篇）/","2024/10/17/好用的开源安卓软件推荐/","2024/10/21/Visual Studio Code主题推荐和编程字体推荐/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };