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
        
        riskDashboard.appendChild(riskCard);
    }
});

//Task 3:

    // removes risky items; remove button
    const resolveBtn = document.createElement('resolveButton');
    resolveBtn.addEventListener('click', function (event) {
        event.stopPropagation();
        riskDashboard.removeChild(riskCard);
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
       });




