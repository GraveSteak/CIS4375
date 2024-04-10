// Define the list of car makes
const carMake = [
    "Acura", "Alfa Romeo", "Audi", "BMW", "Bentley",
    "Buick", "Cadillac", "Chevrolet", "Chrysler", "Citroën",
    "Dodge", "Fiat", "Ford", "GMC", "Genesis",
    "Honda", "Hyundai", "Infiniti", "Jaguar", "Jeep",
    "Kia", "Lamborghini", "Land Rover", "Lexus", "Lincoln",
    "Lotus", "Maserati", "Mazda", "McLaren", "Mercedes-Benz",
    "Mini", "Mitsubishi", "Nissan", "Pagani", "Peugeot",
    "Porsche", "RAM", "Renault", "Rolls-Royce", "Saab",
    "Subaru", "Suzuki", "Tesla", "Toyota", "Volkswagen",
    "Volvo"
];

// Generating car years - assuming a range from 1980 to the current year
const currentYear = new Date().getFullYear();
const carYear = [];
for (let year = 1980; year <= currentYear; year++) {
    carYear.push(year);
}

// Function to populate dropdowns
function populateDropdowns() {
    const makeSelect = document.getElementById('carMake');
    const yearSelect = document.getElementById('carYear');

    // Add "Choose" option as the first item for car make
    const chooseMakeOption = new Option("Choose Make", "", true, true);
    chooseMakeOption.disabled = true;
    makeSelect.add(chooseMakeOption);

    carMake.forEach(make => {
        const option = new Option(make, make);
        makeSelect.add(option);
    });

    // Add "Choose" option as the first item for car year
    const chooseYearOption = new Option("Choose Year", "", true, true);
    chooseYearOption.disabled = true;
    yearSelect.add(chooseYearOption);

    carYear.forEach(year => {
        const option = new Option(year, year);
        yearSelect.add(option);
    });
}

// Call the populate function on window load
window.onload = populateDropdowns;
