// function check(){
//     var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/; //正则表达式
//     var obj = document.getElementById("mazey"); //要验证的对象
//     if(obj.value === ""){ //输入不能为空
//         alert("输入不能为空!");
//         return false;
//     }else if(!reg.test(obj.value)){ //正则验证不通过，格式不对
//         alert("验证不通过!");
//         return false;
//     }else{
//         alert("通过！");
//         return true;
//     }
// }

function trim(str) {
    if (str && typeof str === "string") {
        return str.replace(/(^\s*)|(\s*)$/g,""); //去除前后空白符
    }
}

var result=trim("    assaa   ");
console.log(result);