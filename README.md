FRED J::

run all typescripts with bun:

curl -fsSL https://bun.sh/install | bash           {This command installs bun) and if you get a new terminal or do source !/.zshrc it will bring it in the new terminal

Here is how you run this one:

npm i

tsc or npm tsc

bun run app.ts    ( FOR THIS EXAMPLE ).  It works here is an example of the run:

╰$ bun run app.ts
All Cars:
Car Details:
        Company: Toyota
        Model: Camry
        Year: 2020
        Available: Yes
Car Details:
        Company: Honda
        Model: Civic
        Year: 2019
        Available: Yes
? Enter the company of the car: Camry
? Enter the model of the car: 2020
Car not found.
? Enter the company of the car: Honda
? Enter the model of the car: Civic
Car rented out successfully.
All Cars:
Car Details:
        Company: Toyota
        Model: Camry
        Year: 2020
        Available: Yes
Car Details:
        Company: Honda
        Model: Civic
        Year: 2019
        Available: No
? Enter the company of the car: Toyota
? Enter the model of the car: Camry
This car is already available.
All Cars:
Car Details:
        Company: Toyota
        Model: Camry
        Year: 2020
        Available: Yes
Car Details:
        Company: Honda
        Model: Civic
        Year: 2019
        Available: No


# typescript-oop-introduction
Learn Object-Oriented Programming (OOP) concepts by translating a C# tutorial into TypeScript. This project covers OOP principles such as classes, inheritance, and polymorphism, implemented in a TypeScript console application. Ideal for developers wanting to enhance their OOP knowledge in TypeScript.
