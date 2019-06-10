function dela(){
    var tr=this.parentNode.parentNode;
    var name=tr.getElementsByTagName("td")[0].innerHTML;
    var flag=  confirm("确认删除"+name+"吗?");
    if(flag){
        //点击超链接需要删除超链接所在的一行
        tr.parentNode.removeChild(tr);
    }
    return false;
}
window.onload=function () {
    var allA=document.getElementsByTagName("a");
    for(var i=0;i<allA.length;i++){
        allA[i].onclick=dela;
    }

    //获取表单中输入的信息
    var addEmpButton=document.getElementById("addEmpButton");
    addEmpButton.onclick=function () {
        var name=document.getElementById("empName").value;
        var email=document.getElementById("email").value;
        var salary=document.getElementById("salary").value;

        //创建tr，需要将获取到的信息保存的tr中
        var tr=document.createElement("tr");
        tr.innerHTML= "<td>"+name+"</td>"+
                        "<td>"+email+"</td>"+
                         "<td>"+salary+"</td>"+
                         "<td><a href='javascript:;'>Delete</a></td>";

        //获取tr中的a标签,并给a标签绑定响应函数
        var a=tr.getElementsByTagName("a")[0];
        a.onclick=dela;

        //获取table,尽量往tbody里添加
        var employeeTable=document.getElementById("employeeTable");
        var tbody=employeeTable.getElementsByTagName("tbody")[0];
        tbody.appendChild(tr);
    }
};