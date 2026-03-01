function showTab(tabName){

let tabs = document.querySelectorAll(".tab");

tabs.forEach(tab=>{
tab.classList.remove("active");
});

document.getElementById(tabName).classList.add("active");
}

function runAI(){

let task = document.getElementById("taskInput").value;
if(task === "") return;

let logBox = document.getElementById("logBox");

let userLog = document.createElement("div");
userLog.className = "log";
userLog.style.background = "#ff6b6b";
userLog.textContent = "User Task: " + task;

logBox.appendChild(userLog);

let aiLog = document.createElement("div");
aiLog.className = "log";
aiLog.textContent = "AI Processing Automation...";

logBox.appendChild(aiLog);

setTimeout(()=>{
aiLog.textContent = aiDecision(task);
},1500);

document.getElementById("taskInput").value="";
}

function aiDecision(task){

task = task.toLowerCase();

if(task.includes("sales")){
return "📈 Sales automation optimized.";
}

if(task.includes("report")){
return "📊 Business report generated.";
}

if(task.includes("client")){
return "👥 Client workflow processed.";
}

return "🤖 AI completed task analysis.";
}
