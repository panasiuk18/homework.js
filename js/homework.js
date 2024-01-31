const salary = parseFloat(prompt('Введіть розмір вашої зарплати'))

// Розрахунок премії (15% від зарплати)
const bonus = 0.15 * salary

// Розрахунок суми нарахувань (зарплата + премія)
const totalEarnings = salary + bonus

// Розрахунок податків (10% від суми нарахувань)
const taxes = 0.1 * totalEarnings

// Витрати в магазині
const shoppingExpenses = 190

// Розрахунок залишку від зарплати
const remainingSalary = salary + bonus - taxes - shoppingExpenses

// Виведення залишку в через alert
alert(`Залишок від вашої зарплати: ${remainingSalary}`)