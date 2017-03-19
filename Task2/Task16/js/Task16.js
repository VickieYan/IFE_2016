/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
    var city = document.getElementById("aqi-city-input").value.trim();
    var num = document.getElementById("aqi-value-input").value.trim();
    if (!city.match(/^[A-Za-z\u4E00-\u9FA5]+$/)) {
        alert("城市名称必须为中英文字符！");
        return ;
    }
    if (!num.match(/^\d+$/)) {
        alert("空气质量必须为整数！");
        return ;
    }
    aqiData[city] = num;
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
    var items = "";
    for (var city in aqiData) {
        items += "<tr><td>" + city + "</td>" + "<td>" + aqiData[city] + "</td><td><button data-city="+ city +">删除</button></td></tr>";
    }
    document.getElementById("aqi-table").innerHTML = items;
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
    addAqiData();
    renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(city) {
    // do sth.
    delete aqiData[city]
    renderAqiList();
}

function init() {
    // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
    document.getElementById("add-btn").addEventListener("click", addBtnHandle);

    // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
    document.getElementById("aqi-table").addEventListener("click", function(event){
        if(event.target.nodeName.toLowerCase() === "button") { 
            delBtnHandle(event.target.dataset.city);
        }
    });
}

init();