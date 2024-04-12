let vehicleCount = 0;
const maxVehicles = 10;
const vehicleFormsContainer = document.getElementById('vehicleFormsContainer');
const addVehicleBtn = document.getElementById('addVehicleBtn');

// Define the list of car makes
const carMakes = [
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

function updateAddVehicleButtonState() {
    if (vehicleCount >= maxVehicles) {
        addVehicleBtn.setAttribute('disabled', 'true');
        addVehicleBtn.classList.add('btn-secondary'); // Bootstrap class to indicate disabled state
        addVehicleBtn.classList.remove('btn-primary'); // Assuming 'btn-primary' is the original class
    } else {
        addVehicleBtn.removeAttribute('disabled');
        addVehicleBtn.classList.remove('btn-secondary');
        addVehicleBtn.classList.add('btn-primary');
    }
}

addVehicleBtn.addEventListener('click', function () {
    if (vehicleCount < maxVehicles) {
        vehicleCount++;
        const vehicleFormHTML = `
			<div class="vehicleForm" style="border-top: 1px solid #ccc; padding-top: 20px; margin-top: 20px;" data-vehicle-index="${vehicleCount}">
				<h4>Vehicle ${vehicleCount}</h4>
				<div class="row">
					<div class="col-md-6 mb-3">
                        <label for="VehicleMake${vehicleCount}">Make</label>
                        <select class="form-control" id="VehicleMake${vehicleCount}" name="VehicleMake[]">
                            <option selected>Choose...</option>
                            ${carMakes.map(make => `<option value="${make}">${make}</option>`).join('')}
                        </select>
                    </div>
					<div class="col-md-6 mb-3">
						<label for="VehicleModel${vehicleCount}">Model</label>
						<input type="text" class="form-control" name="VehicleModel[]" placeholder="Car Model" required>
					</div>
					<div class="col-md-6 mb-3">
						<label for="VehicleType${vehicleCount}">Type</label>
						<select class="form-control" name="VehicleType[]">
							<option selected>Choose...</option>
							<option value="Truck">Truck</option>
							<option value="Sedan">Sedan</option>
							<option value="SUV">SUV</option>
							<option value="Other">Other</option>
						</select>
					</div>
					<div class="col-md-6 mb-3">
						<label for="VehicleOperable${vehicleCount}">Operable</label>
						<select class="form-control" name="VehicleOperable[]">
							<option selected>Choose...</option>
							<option value="Yes">Yes</option>
							<option value="No">No</option>
						</select>
					</div>
					<div class="col-md-6 mb-3">
						<label for="year${vehicleCount}">Year</label>
						<input type="number" class="form-control" name="year[]" placeholder="Year" required>
					</div>
				</div>
				<div style="text-align: right; margin-top: 10px;">
					<button type="button" class="deleteVehicleBtn btn btn-danger" data-vehicle-index="${vehicleCount}">Delete Vehicle</button>
				</div>
			</div>
		`;
        vehicleFormsContainer.insertAdjacentHTML('beforeend', vehicleFormHTML);
        updateDeleteButtonVisibility();
        updateAddVehicleButtonState();
    }
});

function updateDeleteButtonVisibility() {
    const deleteButtons = document.querySelectorAll('.deleteVehicleBtn');
    deleteButtons.forEach(button => button.style.display = vehicleCount > 1 ? '' : 'none');
}

function renumberVehicleForms() {
    const vehicleForms = vehicleFormsContainer.querySelectorAll('.vehicleForm');
    vehicleForms.forEach((form, index) => {
        form.setAttribute('data-vehicle-index', index + 1);
        form.querySelector('h4').textContent = `Vehicle ${index + 1}`;
    });
}

vehicleFormsContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('deleteVehicleBtn')) {
        const vehicleForm = e.target.closest('.vehicleForm');
        vehicleFormsContainer.removeChild(vehicleForm);
        vehicleCount--;
        updateDeleteButtonVisibility();
        renumberVehicleForms();
        updateAddVehicleButtonState();
    }
});

// Initially add one vehicle form by simulating a button click
addVehicleBtn.click();

document.getElementById('clientForm').addEventListener('submit', async function (event) {
    event.preventDefault();
    const formData = new FormData(this);

    // Extract the company_name field and set it to 'N/A' if it's null or undefined
    const company_name = formData.get('company_name') || 'N/A';
    // Construct an array to store all vehicle details
    const vehicles = [];
    // Loop through the formData to extract vehicle details
    let i = 1;
    while (formData.get(`VehicleMake${i}`)) {
        vehicles.push({
            make: formData.get(`VehicleMake${i}`),
            model: formData.get(`VehicleModel${i}`),
            type: formData.get(`VehicleType${i}`),
			operable: formData.get(`VehicleOperable${i}`),
            year: parseInt(formData.get(`year${i}`)) // Ensure year is parsed as a number
            
        });
        i++;
    }

    // Construct the payload object including all vehicle details
    const payload = {
        C_F_Name: formData.get('C_F_Name'),
        C_L_Name: formData.get('C_L_Name'),
        C_email: formData.get('C_email'),
        phone_numb: formData.get('phone_numb'),
        affiliation: formData.get('affiliation'),
        company_name: company_name,
        Start_Zip: formData.get('Start_Zip'),
        End_Zip: formData.get('End_Zip'),
        VehicleMake: formData.getAll('VehicleMake[]'),
        VehicleModel: formData.getAll('VehicleModel[]'),
        VehicleType: formData.getAll('VehicleType[]'),
        year: formData.getAll('year[]').map(Number),  // Ensure year is captured as number
        VehicleOperable: formData.getAll('VehicleOperable[]')
    };

    console.log('Prepared Payload:', payload);

    try {

		// Send data to the /send-email endpoint
        const emailResponse = await axios.post('http://localhost:3000/send-email', payload, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log('Email Sending Response:', emailResponse.data);

        // Send data to the /form endpoint
        const formResponse = await axios.post('http://localhost:3000/form', payload, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log(formResponse.data);
        const genPrice = formResponse.data.totalGenPrice;
        window.location.href = `quote.html?price=${genPrice.toFixed(2)}`;

        alert('Client created successfully!');
    } catch (error) {
        console.error(error);
        alert('Failed to create client');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const affiliationSelect = document.getElementById('affiliation');
    const companyNameInput = document.getElementById('companyName');

    affiliationSelect.addEventListener('change', function () {
        // Check if the 'Representative' option is selected
        if (this.value === 'Representative') {
            // Enable the Company Name input
            companyNameInput.disabled = false;
            companyNameInput.focus(); // Optionally focus on the input
        } else {
            // Disable and clear the Company Name input
            companyNameInput.disabled = true;
            companyNameInput.value = '';
        }
    });
});
