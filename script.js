let salesChart;
let userChart;
let marketChart;
let profitChart;

function randomData(){
return Array.from({length:7}, ()=> Math.random()*1000 + 300);
}

function updateMetrics(){

let revenue = Math.floor(Math.random()*150000 + 40000);
let users = Math.floor(Math.random()*9000 + 2000);
let orders = Math.floor(users * Math.random());

document.getElementById("revenue").innerText = "$"+revenue;
document.getElementById("users").innerText = users;
document.getElementById("orders").innerText = orders;
document.getElementById("score").innerText =
(Math.random()*100).toFixed(2)+"%";

let insights = [
"Market demand is increasing.",
"User engagement is high.",
"Revenue pipeline is healthy.",
"Consider scaling operations."
];

document.getElementById("aiText").innerText =
insights[Math.floor(Math.random()*insights.length)];
}

function drawCharts(){

if(salesChart) salesChart.destroy();
if(userChart) userChart.destroy();
if(marketChart) marketChart.destroy();
if(profitChart) profitChart.destroy();

salesChart = new Chart(document.getElementById("salesChart"),{
type:"line",
data:{
labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
datasets:[{label:"Sales Trend",data:randomData(),tension:0.4}]
}
});

userChart = new Chart(document.getElementById("userChart"),{
type:"bar",
data:{
labels:["Week1","Week2","Week3","Week4"],
datasets:[{label:"User Growth",data:randomData().slice(0,4)}]
}
});

marketChart = new Chart(document.getElementById("marketChart"),{
type:"doughnut",
data:{
labels:["North","South","East","West"],
datasets:[{data:randomData().slice(0,4)}]
}
});

profitChart = new Chart(document.getElementById("profitChart"),{
type:"pie",
data:{
labels:["Profit","Marketing","Operations"],
datasets:[{data:[50,30,20]}]
}
});
}

function refreshData(){
updateMetrics();
drawCharts();
}

updateMetrics();
drawCharts();
