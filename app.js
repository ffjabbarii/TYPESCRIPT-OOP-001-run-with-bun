// countdownWithInquirer.ts
import inquirer from "inquirer";
// Define the Car class
class Car {
    company;
    model;
    year;
    available;
    constructor(company, model, year) {
        this.company = company;
        this.model = model;
        this.year = year;
        this.available = true;
    }
    rentOut() {
        if (!this.available) {
            console.log("Sorry, this car is already rented out.");
        }
        else {
            this.available = false;
            console.log("Car rented out successfully.");
        }
    }
    returnCar() {
        if (this.available) {
            console.log("This car is already available.");
        }
        else {
            this.available = true;
            console.log("Car returned successfully.");
        }
    }
    displayDetails() {
        console.log(`Car Details:
        Company: ${this.company}
        Model: ${this.model}
        Year: ${this.year}
        Available: ${this.available ? 'Yes' : 'No'}`);
    }
}
// Define the CarRentalSystem class
class CarRentalSystem {
    cars;
    constructor() {
        this.cars = [];
    }
    addCar(car) {
        this.cars.push(car);
    }
    async rentCar() {
        const { company, model } = await inquirer.prompt([
            {
                type: 'input',
                name: 'company',
                message: 'Enter the company of the car:',
            },
            {
                type: 'input',
                name: 'model',
                message: 'Enter the model of the car:',
            },
        ]);
        const car = this.findCar(company, model);
        if (car) {
            car.rentOut();
        }
        else {
            console.log("Car not found.");
        }
    }
    async returnCar() {
        const { company, model } = await inquirer.prompt([
            {
                type: 'input',
                name: 'company',
                message: 'Enter the company of the car:',
            },
            {
                type: 'input',
                name: 'model',
                message: 'Enter the model of the car:',
            },
        ]);
        const car = this.findCar(company, model);
        if (car) {
            car.returnCar();
        }
        else {
            console.log("Car not found.");
        }
    }
    findCar(company, model) {
        return this.cars.find(car => car.company === company && car.model === model);
    }
    displayAllCars() {
        console.log("All Cars:");
        this.cars.forEach(car => car.displayDetails());
    }
}
// Usage example
async function main() {
    const rentalSystem = new CarRentalSystem();
    const car1 = new Car("Toyota", "Camry", 2020);
    const car2 = new Car("Honda", "Civic", 2019);
    rentalSystem.addCar(car1);
    rentalSystem.addCar(car2);
    rentalSystem.displayAllCars();
    await rentalSystem.rentCar();
    await rentalSystem.rentCar();
    rentalSystem.displayAllCars();
    await rentalSystem.returnCar();
    rentalSystem.displayAllCars();
}
main();
