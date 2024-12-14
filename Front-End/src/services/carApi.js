const API_URL = "http://localhost:8080/api/car";

export async function getCars() {
  const cars = await fetch(API_URL);
  if (!cars) {
    throw new Error("Failed to fetch car data");
  }
  const carData = await cars.json();
  console.log(carData);
  return carData;
}

export async function createCar(newCar) {
  try {
    const res = await fetch(`${API_URL}`, {
      method: "POST",
      body: JSON.stringify(newCar),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error("Failed to create car: " + res.statusText);
    }
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed creating your car");
  }
}

export async function updateCar(id, updateCar) {
  console.log(id, updateCar);
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updateCar),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to update car. Status code: ${res.status}`);
    }

    const data = await res.json();
    console.log("Car updated successfully:", data);
    return data;
  } catch (err) {
    console.error("Error updating car:", err);
    throw new Error("Failed to update car. Please try again later.");
  }
}

export async function deleteCar(id) {
  console.log("Deleting car with ID:", id);
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      throw new Error(`Failed to delete car. Status code: ${res.status}`);
    }
    const data = await res.json();
    console.log("Car deleted successfully:", data);
    return data;
  } catch (err) {
    console.error("Error deleting car:", err);
    throw new Error("Failed to delete car. Please try again later.");
  }
}
