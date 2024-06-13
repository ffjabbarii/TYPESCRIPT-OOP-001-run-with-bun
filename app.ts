// countdownWithInquirer.ts
import inquirer from "inquirer";

// Define the Car class
class Car {
    private company: string;
    private model: string;
    private year: number;
    private available: boolean;

    constructor(company: string, model: string, year: number) {
        this.company = company;
        this.model = model;
        this.year = year;
        this.available = true;
    }

    public rentOut(): void {
        if (!this.available) {
            console.log("Sorry, this car is already rented out.");
        } else {
            this.available = false;
            console.log("Car rented out successfully.");
        }
    }

    public returnCar(): void {
        if (this.available) {
            console.log("This car is already available.");
        } else {
            this.available = true;
            console.log("Car returned successfully.");
        }
    }

    public displayDetails(): void {
        console.log(`Car Details:
        Company: ${this.company}
        Model: ${this.model}
        Year: ${this.year}
        Available: ${this.available ? 'Yes' : 'No'}`);
    }
}

// Define the CarRentalSystem class
class CarRentalSystem {
    private cars: Car[];

    constructor() {
        this.cars = [];
    }

    public addCar(car: Car): void {
        this.cars.push(car);
    }

    public async rentCar(): Promise<void> {
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
        } else {
            console.log("Car not found.");
        }
    }

    public async returnCar(): Promise<void> {
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
        } else {
            console.log("Car not found.");
        }
    }

    private findCar(company: string, model: string): Car | undefined {
        return this.cars.find(car => car.company === company && car.model === model);
    }

    public displayAllCars(): void {
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
