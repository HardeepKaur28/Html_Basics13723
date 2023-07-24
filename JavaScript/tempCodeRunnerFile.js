const empId = employees.filter(employee => (employee.end - employee.start <= 6) && employee.designation == "IT").map((index) => console.log(index.id))
