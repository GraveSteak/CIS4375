document.addEventListener('DOMContentLoaded', function () {
    let carCount = 1;
  
    document.getElementById('add_car').addEventListener('click', function () {
      const carIdsDiv = document.getElementById('car_ids');
      if (carCount < 10) {
        carCount++;
        const newCarInput = document.createElement('div');
        newCarInput.className = 'row';
        newCarInput.innerHTML = `
            <div class="col-md-12 mb-3 form-row">
                <label for="carID${carCount}">Car ID ${carCount}</label>
                <input type="text" class="form-control" name="carID${carCount}" placeholder="Car ID" required>
            </div>
        `;
        carIdsDiv.appendChild(newCarInput);
      }
    });
  });