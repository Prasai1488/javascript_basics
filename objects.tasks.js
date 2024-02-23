const hospitalDetails = {
    name : "Green City Hospital",
    location : "Tokha",
    patientCapacity : 10000,
    numberOfBed : 12000,
    numberOfBlock : 4,
    numberOfDoctor : 500,
    numberOfNurse : 700,
}

// delete numberOfBed and numberOfNurse
delete hospitalDetails.numberOfBed;
delete hospitalDetails.numberOfNurse;

// update numberOfBlock
hospitalDetails.numberOfBlock = 5;


// add new field named numberOfAmbulance
hospitalDetails.numberOfAmbulance = 200;

// copy the object to new variable named newHospitalDetail
const newHospitalDetail ={
    ...hospitalDetails
}


let finalDetails = `There is a hospital named ${newHospitalDetail.name} in ${newHospitalDetail.location} with patient capacity of ${newHospitalDetail.patientCapacity}`
console.log(finalDetails)
