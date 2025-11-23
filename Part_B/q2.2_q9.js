function displayCar(){
    console.log("Display Cars");
}

function displayTruck(){
    console.log("Display Trucks");
}

function displayBikes(){
    console.log("Display Bikes");
}

function vehicleInfo(vehicleCategory,callBackfu){
    console.log("Category : ",vehicleCategory);
    callBackfu;
}

vehicleInfo("car",displayCar);
vehicleInfo("truck",displayTruck);
vehicleInfo("Bike",displayBikes);