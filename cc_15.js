//Task 2:

document.addEventListener('DOMContentLoaded', function () {
    const riskDashboard = document.getElementById('riskDashboard');
    const addRiskForm = document.getElementById('addRiskForm');
 
    console.log("Risk Dashboard has been loaded");


    // this provides an additional risk item to the dashboard
    function addRiskItem(riskName, riskLevel, department) {
        const riskCard = document.createElement('div');
        riskCard.classList.add('riskCard');
        
        riskCard.innerHTML = 
        `<strong>Risk Name:</strong> ${riskName}<br>
        <strong>Risk Level:</strong> ${riskLevel}<br>
        <strong>Department:</strong> ${department}<br>`;
        
        riskDashboard.appendChild(riskCard);//Adding Risk Items Dynamically
    }
});

//Task 3:

    // removes risky items; remove button for task 3
    const resolveBtn = document.createElement('resolveButton');
    resolveBtn.addEventListener('click', function (event) {
        event.stopPropagation();
        riskDashboard.removeChild(riskCard);//Removing Risk Items

    });

//Task 4- 
if (risk === 'low') {
    riskCard.style.backgroundColor = 'green';
} else if (risk === 'medium') {
    riskCard.style.backgroundColor = 'yellow';
} else if (risk === 'high') {
    riskCard.style.backgroundColor = 'red';
}
riskDashboard.appendChild(riskCard);

       // 
       const resolveButton = riskCard.querySelector('resolveButton');
       resolveBtn.addEventListener('click', function () {
           riskDashboard.removeChild(riskCard);
       });//Categorizing Risks by Level for task 4

//Task 5
const increaseRiskLevelsBtn = document.getElementById('increasButtonLevelRisk');
riskLevelElem.textContent.split("Risk level increasing ")
increaseRiskLevelsBtn.addEventListener('click', function () {
    const riskcards = document.querySelectorAll('.riskCard');//Implementing Bulk Updates for task 5


//Task 6
riskCards.forEach(card => {card.addEventListener('click', function(event) {
        
        event.stopPropagation();
    });//Handling Event Propagation for task 6