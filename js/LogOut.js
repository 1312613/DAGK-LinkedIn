var LogOut=function (){
    if (confirm("Are you sure?")){
        var temp='none';
        localStorage.setItem('temp',temp);
        document.getElementById('body').style.display=temp;
        window.location.href="index.html";
            
    }
}

var isDisplay=function () {
    var temp='none';
    temp=localStorage.getItem('temp');
    document.getElementById('body').style.display=temp;
}