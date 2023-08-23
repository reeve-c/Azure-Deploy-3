window.onload = function() {
    let selected_name = document.getElementById('selected-user');
    selected_name.textContent = 'User : ' + localStorage.getItem("lastSelection").toUpperCase();
};

let all_drink_options = document.getElementById('drinks');


let submit_btn = document.getElementById("submit_btn");

console.log(localStorage.getItem("lastSelection"));


function saveSelection() {
    let forum = document.getElementById("drinks");
    var selectedValue = forum.value;
    localStorage.setItem("lastSelection", selectedValue);  
}


let all_names = ['John Smith', 'Michael Brown', 'Emily Johnson', 'Emma Johnson',
'Liam Smith', 'Olivia Davis', 'Noah Martinez', 'Ava Anderson',
'Sophia Taylor', 'Isabella Clark', 'Mia Walker', 'Charlotte Baker',
'Amelia Gonzalez', 'Harper Rodriguez', 'Evelyn Hernandez',
'Abigail Lopez', 'William Wilson', 'James Moore',
'Benjamin Jackson', 'Lucas Thompson', 'Henry Lee',
'Alexander Harris', 'Michael Martin'];

for (person_name of all_names){
    all_drink_options.innerHTML += `<option value="${person_name}">${person_name}</option>`;
};