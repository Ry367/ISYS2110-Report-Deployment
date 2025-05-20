const data2025 = {
    total_events: 253,
    event_data: [
        {
            type: "Spells",
            amount: 88,
            success_rate: "98%",
            resource_usage: "70%"
        },
        {
            type: "Rituals",
            amount: 79,
            success_rate: "97.6%",
            resource_usage: "68%"
        },
        {
            type: "Potion brewing",
            amount: 86,
            success_rate: "98.1%",
            resource_usage: "79%"
        }
    ]
};

const data2024 = {
    total_events: 253,
    event_data: [
        {
            type: "Spells",
            amount: 70,
            success_rate: "96%",
            resource_usage: "65%"
        },
        {
            type: "Rituals",
            amount: 60,
            success_rate: "95.2%",
            resource_usage: "62%"
        },
        {
            type: "Potion brewing",
            amount: 57,
            success_rate: "97.5%",
            resource_usage: "72%"
        }
    ]
};


document.addEventListener("DOMContentLoaded", function() {
    loadData(data2025); 
});

function loadData(data) {
    document.querySelector(".summary span").textContent = data.total_events;

    const tbody = document.querySelector("table tbody");
    tbody.innerHTML = "";
    data.event_data.forEach(event => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${event.type}</td>
            <td>${event.amount}</td>
            <td>${event.success_rate}</td>
            <td>${event.resource_usage}</td>
        `;
        tbody.appendChild(row);
    });
}


window.loadData2024 = () => loadData(data2024);
window.loadData2025 = () => loadData(data2025);

const sInput = document.getElementById('startDate');
const eInput = document.getElementById('endDate');
const warningMessage = document.getElementById('dateWarning');

function warningDate() {
    const s = new Date(sInput.value);
    const e = new Date(eInput.value);
    const today = new Date();

    warningMessage.textContent = "";

    if (sInput.value && eInput.value) {
        if (s > e) {
            warningSpan.textContent = "The start date can't be later than the end date!";
        } /*else if (s > today || e > today) {
            warningSpan.textContent = "Date can't be a future date!";
        }*/
    }
}

sInput.addEventListener("change", warningDate);
eInput.addEventListener("change", warningDate);
const eBtn = document.querySelector("button[type='submit']");
eBtn.disabled = true;