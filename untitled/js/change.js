var prev=document.getElementById("prev");
var next=document.getElementById("next");
var img=document.getElementsByTagName("img")[0];
var img1=document.getElementById("img1");
var imgArr=["img/pic2/img1.jpg","img/pic2/img2.jpg","img/pic2/img3.jpg","img/pic2/img4.jpg"];
var index=0;
var info=document.getElementById("info");
info.innerHTML="总共有"+imgArr.length+"张图片,"+"当前第"+(index+1)+"张图片";
prev.onclick=function () {
        index--;
        if(index < 0){
            index = imgArr.length - 1;
        }
        img.src=imgArr[index];
        info.innerHTML="总共有"+imgArr.length+"张图片,"+"当前第"+(index+1)+"张图片";
};

next.onclick=function () {
        index++;
        if(index > imgArr.length - 1){
            index=0;
        }
        img.src=imgArr[index];
        info.innerHTML="总共有"+imgArr.length+"张图片,"+"当前第"+(index+1)+"张图片";
};

setInterval(function () {
    index++;
    if(index > imgArr.length - 1){
        index=0;
    }
    img.src=imgArr[index];
    info.innerHTML="总共有"+imgArr.length+"张图片,"+"当前第"+(index+1)+"张图片";
},3000);





