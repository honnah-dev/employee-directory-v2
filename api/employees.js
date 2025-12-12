// import express library
import express from "express";
// create router 
const router = express.Router();
// export router 
export default router;




import employees, {addEmployee, getEmployeeById, getRandomEmployee,} from "#db/employees";



router.get("/", (req, res) => {
  res.send(employees);
});


router.post("/", (req, res) => {
  if (!req.body) return res.status(400).send("Request body is required.");

  const name = req.body;
  if (!name) return res.status(400).send("Name is required.");

  const employee = addEmployee(name);
  res.status(201).send(employee);

});


router.get("/employees", (req, res) => {
  res.send(employees);

});

  const { text } = req.body;
  if (!text) return res.status(400).send("New employee must have text");

  const employee = addEmployee(text);
  res.status(201).send(employee);

});

// Note: this middleware has to come first! Otherwise, Express will treat
// "random" as the argument to the `id` parameter of /employees/:id.


router.get("/employees/random", (req, res) => {
  const randomIndex = Math.floor(Math.random() * employees.length);
  res.send(employees[randomIndex]);
});

//router.get("/random", (req, res) => {
  // const employee = getRandomEmployee();
  // res.send(employee);
// });

router.get("/employees/:id", (req, res) => {
  const { id } = req.params;

  // req.params are always strings, so we need to convert `id` into a number
  // before we can use it to find the employee
  const employee = employees.find((e) => e.id === +id);

  if (!employee) {
    return res.status(404).send("Employee not found");
  }

  res.send(employee);
});

// router.get("/:id", (req, res) => {
//   const { id } = req.params;

//   const employee = getEmployeeById(+id);

//   if (!employee) {
//     return res.status(404).send("Employee not found");
//   }

//   res.send(employee);
// });



