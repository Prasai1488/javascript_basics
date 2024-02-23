const hospitalDetails = {
    name : "Green City Hospital",
    location : "Tokha",
    patientCapacity : 10000,
    numberOfBed : 12000,
    numberOfBlock : 4,
    numberOfDoctor : 500,
    numberOfNurse : 700,
}

// lets use spread operator to copy values of previous object to a new object. Its syntax is (...objectname)// 
const newHospitalDetail = {
    ...hospitalDetails
}

newHospitalDetail.numberOfGuard = 100;
console.log(hospitalDetails)


// using structured clone. Its syntax is : // 
// oldObject = structuredClone(newObject); 