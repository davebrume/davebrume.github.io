let clients = JSON.parse(localStorage.getItem("clients")) || [];

let chart;

function saveData(){
localStorage.setItem("clients", JSON.stringify(clients));
}

function showSection(id){

document.getElementById("dashboard").style.display="none";
document.getElementById("clients").style.display="none";

document.getElementById(id).style.display="block";
}

function renderClients(list = clients){

let ul = document.getElementById("clientList");
ul.innerHTML="";

list.forEach((client,index)=>{

ul.innerHTML += `
<li>
<div>
<strong>${client.name}</strong><br>
${client.project}<br>
$${client.budget} | ${client.status}
</div>

<div>
<button onclick="editClient(${index})">Edit</button>
<button onclick="deleteClient(${index})">Delete</button>
</div>
</li>
`;

});

updateStats();
updateChart();
}

function addClient(){

let name = document.getElementById("name").value;
let project = document.getElementById("project").value;
let budget = document.getElementById("budget").value;
let status = document.getElementById("status").value;

if(!name || !project || !budget){
alert("Fill all fields");
return;
}

clients.push({name,project,budget,status});

saveData();
renderClients();

}

function deleteClient(index){
clients.splice(index,1);
saveData();
renderClients();
}

function editClient(index){

let c = clients[index];

let name = prompt("Name",c.name);
let project = prompt("Project",c.project);
let budget = prompt("Budget",c.budget);
let status = prompt("Status",c.status);

if(name && project && budget && status){
clients[index]={name,project,budget,status};
saveData();
renderClients();
}
}

function searchClient(query){

let filtered = clients.filter(c =>
c.name.toLowerCase().includes(query.toLowerCase())
);

renderClients(filtered);
}

function updateStats(){

document.getElementById("totalClients").innerText = clients.length;

let totalRevenue = clients.reduce((sum,c)=>{
return sum + Number(c.budget);
},0);

document.getElementById("totalRevenue").innerText = "$"+totalRevenue;
}

function updateChart(){

let labels = clients.map(c=>c.name);
let data = clients.map(c=>Number(c.budget));

if(chart) chart.destroy();

let ctx = document.getElementById("chart");

chart = new Chart(ctx,{
type:"line",
data:{
labels:labels,
datasets:[{
label:"Revenue Growth",
data:data
}]
}
});
}

renderClients();