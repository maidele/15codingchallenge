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
