let employees =[{id:101, name: "Ram", sal: 45000},
{id:102, name: "Ramya", sal: 55000},
{id:103, name: "Raj", sal: 35000}]
let createEmployees = (emp) => {
    return new Promise((reslove, reject) => {

        setTimeout(()=>{
            let flag =true
            flag ? reslove("Data Inserted Succesfully"): reject("Data Failed");
            employees.push(emp)
        }, 3000)
        
    });
}
let get_Employees = () => {
           setTimeout(()=>{
            let rows= ""
            for(emp of employees){
                rows = rows + `<tr>
                <td>${emp.id}</td>
                <td>${emp.name}</td>
                <td>${emp.sal}</td>
                </tr>`  
 }
 //document.getElementById('tbody_Data').innerHTML ="GM"
document.getElementById('tbody_Data').innerHTML ="GM"
},1000)
}
createEmployees({ id : 103, name:"Joshi", sal:65000})
.then((msg) => {
    console.log (msg)
    get_Employees();
})
.catch((err) =>{
    console.log(err)
})
    
