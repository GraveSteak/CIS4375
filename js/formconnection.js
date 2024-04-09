let vehicleCount = 0;
const maxVehicles = 10;
const vehicleFormsContainer = document.getElementById('vehicleFormsContainer');
const addVehicleBtn = document.getElementById('addVehicleBtn');

function updateAddVehicleButtonState() {
	if(vehicleCount >= maxVehicles) {
		addVehicleBtn.setAttribute('disabled', 'true');
		addVehicleBtn.classList.add('btn-secondary'); // Bootstrap class to indicate disabled state
		addVehicleBtn.classList.remove('btn-primary'); // Assuming 'btn-primary' is the original class
	} else {
		addVehicleBtn.removeAttribute('disabled');
		addVehicleBtn.classList.remove('btn-secondary');
		addVehicleBtn.classList.add('btn-primary');
	}
}

addVehicleBtn.addEventListener('click', function() {
	if(vehicleCount < maxVehicles) {
		vehicleCount++;
		const vehicleFormHTML = `
			<div class="vehicleForm" style="border-top: 1px solid #ccc; padding-top: 20px; margin-top: 20px;" data-vehicle-index="${vehicleCount}">
				<h4>Vehicle ${vehicleCount}</h4>
				<div class="row">
					<div class="col-md-6 mb-3">
						<label for="VehicleMake${vehicleCount}">Make</label>
						<input type="text" class="form-control" name="VehicleMake[]" placeholder="Car Make">
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

vehicleFormsContainer.addEventListener('click', function(e) {
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

document.getElementById('clientForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());
    const payload = {
        ...data,
        VehicleMake: formData.getAll('VehicleMake[]'),
        VehicleModel: formData.getAll('VehicleModel[]'),
        VehicleType: formData.getAll('VehicleType[]'),
        year: formData.getAll('year[]').map(Number), // Convert years to numbers
        VehicleOperable: formData.getAll('VehicleOperable[]'),
    };
    try {
        const response = await axios.post('http://localhost:3000/form', payload, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log(response.data);
        const genPrice = response.data.totalGenPrice;
        window.location.href = `quote.html?price=${genPrice.toFixed(2)}`;
    } catch (error) {
        console.error(error);
        alert('Failed to create client');
    }
});


