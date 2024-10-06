let student = {
    id : 100,
    name : 'Rajan',
    age : 21,
    course : 'CSE',
    college : 'CBIT'
};

// String Concatenation
let strConcat = "<tr>" +
                    "<td>" + student.id + "</td>" +
                    "<td>" + student.name + "</td>" +
                    "<td>" + student.age + "</td>" +
                    "<td>" + student.course + "</td>" +
                    "<td>" + student.college + "</td>" +
                "</tr>";
//document.querySelector('#table-body').innerHTML = strConcat;

// Template String
let templateString = `<tr>
                          <td> ${student.id} </td>  
                          <td> ${student.name} </td>  
                          <td> ${student.ag} </td>  
                          <td> ${student.course} </td>  
                          <td> ${student.college} </td>  
                      </tr>`;
document.querySelector('#table-body').innerHTML = templateString;