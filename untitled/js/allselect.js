window.onload=function () {
    var items=document.getElementsByName("items");
    var checkedAllBtn=document.getElementById("checkedAllBtn");
    checkedAllBtn.onclick=function(){
        //设置多选框全部选中
       for(var i=0;i<items.length;i++){
           items[i].checked=true;
           checkAllBox.checked=true;
       }
    };

    var checkedNoBtn=document.getElementById("checkedNoBtn");
    checkedNoBtn.onclick=function () {
        //设置多选框全部不选中
       for(var i=0;i<items.length;i++){
           items[i].checked=false;
           checkAllBox.checked=false;
       }
   };
    
    var checkedRevBtn=document.getElementById("checkedRevBtn");
    checkedRevBtn.onclick=function () {
        //设置多选框反选

        checkAllBox.checked=true;

        for(var i=0;i<items.length;i++){
            items[i].checked=!items[i].checked;

            if(!items[i].checked){
                //一旦进入判断，则证明不是全选状态
                checkAllBox.checked=false;
            }
        }
    };

    var sendBtn=document.getElementById("sendBtn");
    sendBtn.onclick=function () {
        //设置提交按钮
        for(var i=0;i<items.length;i++){
            if(items[i].checked==true){
                alert("你已经选择"+items[i].value+"!");
            }
        }
    };

    var checkAllBox=document.getElementById("checkAllBox");
    checkAllBox.onclick=function () {
            for(var i=0;i<items.length;i++){
                items[i].checked=this.checked;//在事件的响应函数中，事件是给谁绑定的，this就是谁
            }
    };

    //为四个多选框分别绑定点击响应函数
    for(var i=0;i<items.length;i++){
        items[i].onclick=function () {

            checkAllBox.checked=true;

            //判断四个多选框是否全选
            for(var j=0;j<items.length;j++){
                    if(!items[j].checked){
                        //一旦进入判断，则证明不是全选状态
                        //只要有一个没选中，则不是全选
                        //!items[j].checked相当于items[j].checked==false,当复选框没选中时，进入判断执行语句最后终止循环
                        checkAllBox.checked=false;
                        break;
                    }
            }
        }
    }
};