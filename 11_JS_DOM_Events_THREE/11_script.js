let employees = getEmployees();

// click on All Employees button
let allEmployeesBtn = document.querySelector('#all-emp-btn');
allEmployeesBtn.addEventListener('click',function () {
    displayEmployees(employees);
});

// click on Male Employees button
let maleEmpBtn = document.querySelector('#male-emp-btn');
maleEmpBtn.addEventListener('click',function () {
    let maleEmployees = employees.filter(function(employee) {
        return employee.gender === 'Male';
    });
    displayEmployees(maleEmployees);
});

// click on Female Employees button
let femaleEmpBtn = document.querySelector('#female-emp-btn');
femaleEmpBtn.addEventListener('click',function () {
    let femaleEmployees = employees.filter(function(employee) {
        return employee.gender === 'Female';
    });
    displayEmployees(femaleEmployees);
});

// Employee Search
let searchBox = document.querySelector('#emp-search');
searchBox.addEventListener('keyup',function() {
   let textEntered = searchBox.value;
    let selectedEmployees = employees.filter(function(employee) {
        return employee.first_name.toUpperCase().startsWith(textEntered.toUpperCase());
    });
    displayEmployees(selectedEmployees);
});


// display Employees on table
let displayEmployees = (employees) => {
    let tableRows = '';
    let tableBodyElement = document.querySelector('#table-body');
    // display employees count
    document.querySelector('#count').innerText = employees.length;
    for(let employee of employees){
        tableRows += `<tr>
                         <td>${employee.id}</td>
                         <td>${employee.first_name}</td>
                         <td>${employee.last_name}</td>
                         <td>${employee.email}</td>
                         <td>${employee.gender}</td>
                         <td>${employee.country}</td>
                     </tr>\n`;
    }
    tableBodyElement.innerHTML = tableRows;
};