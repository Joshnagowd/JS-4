let employees =[{id: 101, name:"ram", email:"ram@gmail.com"},
{id: 102, name:"raj", email:"raj@gmail.com"},
{id: 103, name:"sita", email:"sita@gmail.com"},
{id: 104, name:"ramya", email:"ramya@gmail.com"}]
function display_Data(){
    let rows =""
    employees.forEach((employee) =>{
        rows = rows + `<tr>
        <td>${employee.id}</td>
        <td>${employee.name}</td>
        <td>${employee.email}</td>
        </tr>`
    })
    document.getElementById('tbody_Data').innerHTML=rows
}