function saveStorage(id){
    var data = document.getElementById(id).value;//这里id为文本输入区域的content，获取了输入内容，存入data
    var timeNow = new Date();//获取时间
    localStorage.setItem(timeNow,data);//以时间作为键值
    localStorage.setItem(timeNow+1,timeNow);//将写便签的时间也存到localStorage
    loadStorage('msg');//这里的id为便签记录区域的msg,将本地储存的内容写入到id为msg的区域
}
function loadStorage(id){
    var result = '<table border = "1">';//result将包含一个记录着便签的表，将存入id为msg的便签记录区域
    for(var i=0,j=1;i<localStorage.length;i+=2,j++)//可见，localStorage的key键值为数组，按照存入顺序，0键值为内容，1键值为时间，3键值为内容，以此类推
    {
        var key = localStorage.key(i);//获取内容的键值
        var value = localStorage.getItem(key);var time = localStorage.getItem(key+1);//根据键值获取内容和时间，根据html，时间的键值比内容大1（这里说的是值，不是键值数组下标）
        result += '<tr><td>'+j+'</td><td>'+value+'</td><td>'+time+'</td></tr>';
    }
    result += '</table>';//添加表结束标记
    var target = document.getElementById(id);//利用DOM方法获取id为msg的便签记录元素，存入一个变量
    target.innerHTML = result;//利用htmlDOM方法，将id为msg的便签记录元素的子节点内容变为result
}
function clearStorage(id){
    localStorage.clear();//清楚本地储存
    alert("date deleted");
}