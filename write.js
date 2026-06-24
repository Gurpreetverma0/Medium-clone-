function publishPost(){

```
let title =
document.getElementById("title").value;

let content =
document.getElementById("content").value;

localStorage.setItem("postTitle",title);
localStorage.setItem("postContent",content);

alert("Article Published!");

window.location.href="index.html";
```

}
