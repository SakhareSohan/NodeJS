let salary_map = new Map();

salary_map.set("Developer", 20000);
salary_map.set("Tester", 15000);
salary_map.set("Manager", 30000);
salary_map.set("projectHead", 30000);

let employee = new Map();
employee.set("Employee1", () => {
  return salary_map.get("Developer");
});

function wages(attendance) {
  let att = attedance(attendance);
  let pay = employee.get("Employee1")();
  return att * pay;
}

function attedance(attendance) {
  let n = attendance.length;
  let sum = 0;
  for (let i of attendance) {
    sum += i;
  }
  let per = (sum / n);
  return per;
}

let attendance = [1, 1, 1, 0.5, 1, 0, 0, 1];

console.log(wages(attendance));
