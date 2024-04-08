import pandas as pd

# Creating a DataFrame with dummy data for cars
data = {
    "car_id": range(1, 11),  # Auto-increment simulated by range for demonstration
    "make": ["Toyota", "Ford", "Chevrolet", "Honda", "Nissan", "BMW", "Mercedes", "Hyundai", "Kia", "Audi"],
    "car_type": ["Sedan", "Truck", "SUV", "Sedan", "Compact", "SUV", "Sedan", "Compact", "Truck", "SUV"],
    "model": ["Camry", "F-150", "Tahoe", "Civic", "Sentra", "X5", "E-Class", "Elantra", "Sorento", "Q5"],
    "car_year": [2020, 2019, 2018, 2021, 2022, 2018, 2017, 2021, 2020, 2019]
}

df = pd.DataFrame(data)

# Define the file path where you want to save the CSV file, adjust the path as necessary for your environment
file_path = 'cars_dummy_data.csv'

# Save the DataFrame to a CSV file without the index
df.to_csv(file_path, index=False)

print(f"The CSV file has been saved to: {file_path}")
