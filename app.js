const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Temporary employee data
let employees = [
  { id: 1, name: "Aniket", role: "DevOps Engineer" },
];

// ✅ Home Route
app.get('/', (req, res) => {
  res.send("Employee API with CI/CD Pipeline ✅");
});

// ✅ Get all employees
app.get('/employees', (req, res) => {
  res.json(employees);
});

// ✅ Add employee
app.post('/employees', (req, res) => {
  const newEmployee = {
    id: employees.length + 1,
    name: req.body.name,
    role: req.body.role
  };
  employees.push(newEmployee);
  res.status(201).json({ message: "Employee Added", data: newEmployee });
});

// ✅ Update employee
app.put('/employees/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const employee = employees.find(e => e.id === id);

  if (!employee) return res.status(404).json({ message: "Employee not found" });

  employee.name = req.body.name || employee.name;
  employee.role = req.body.role || employee.role;
  res.json({ message: "Employee Updated", data: employee });
});

// ✅ Delete employee
app.delete('/employees/:id', (req, res) => {
  const id = parseInt(req.params.id);
  employees = employees.filter(e => e.id !== id);
  res.json({ message: "Employee Deleted" });
});

// ✅ Health Check for DevOps
app.get('/health', (req, res) => {
  res.json({ status: "UP", message: "Health check OK ✅" });
});

// ✅ Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
