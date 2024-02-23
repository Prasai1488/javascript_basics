// const myDetails = {
//     firstName:"Prithvi",
//     lastName:"Prasai",
//     age:20,
//     college : "Brodway",
//     address : "KTM",
//     permanentAddress : "Biratnagar",
//     isMarried: false,
//     isGraduated: null,
//     height: undefined,
// };
//  console.log(myDetails)
//  console.log(myDetails.lastName);
// console.log(myDetails["age"]);

// const countryDetail ={
//     name : "Nepal",
//     population : "3cr",
//     states : 7,
//     capital : "KTM",
//     isRepublic : true,
//     isDeveloped : false,
// }

// update or insert new value :
// countryDetail.name = "India";
// countryDetail.population = "1.4 billion"

// add new details inside that object //
// countryDetail.gdp = "3 trillion";
// console.log(countryDetail)

// const laptopDetails = {
//     name: "GF75",
//     brand: "MSI",
//     ram: 16,
//     ssd: 512,
//     display: "15.3",
//     graphics: "NVIDIA GeForce RTX 3060",
//     battery: "51 Whr",
//     processor: "i7 10750H",
//   };

// console.log(`Laptop Name: ${laptopDetails.name} has Battery Capacity: ${laptopDetails.battery}`);

// Change RAM size to 18 gigs
// laptopDetails.ram = 18;
// console.log(laptopDetails);

// Add memoryFrequency property with 3200MHz value
// laptopDetails.memoryFrequency = "3200MHz";
// console.log(laptopDetails);

// Add weight property with 3kg value
// laptopDetails.weight = "3kg";
// console.log(laptopDetails);

// Update SSD size by 300GB
// laptopDetails.ssd += 300;

// laptopDetails.ssd = 912-100;
//  console.log(laptopDetails);

// delete laptopDetails.processor;
// console.log(laptopDetails)

// const myHouseDetails = {
//     numberOfRooms: 4,
//     numberOfMembers: 3,
//     colorOfHouse: "Green",
//     builtYear: 2005,
//     numberOfStorey: 2
//   };

// Delete numberOfMembers property
// delete myHouseDetails.numberOfMembers;
// console.log(myHouseDetails);

// Update numberOfRooms with a new value
// myHouseDetails.numberOfRooms = 5;
// console.log(myHouseDetails);

// Add a  new property called estimatedPriceOfHouse
//  myHouseDetails.estimatedPriceOfHouse = 250000;
// console.log(myHouseDetails);

// D.Print out all properties on the console like “I have a green coloured house        with 9 rooms where 10 people are  living. The house is 3 storey and was built in 2011 with an estimated budget of 2 crores.”
// const houseDescription = `I have a ${myHouseDetails.colorOfHouse} colored house with ${myHouseDetails.numberOfRooms} rooms where ${myHouseDetails.numberOfMembers} people are living. The house is ${myHouseDetails.numberOfStorey} storey and was built in ${myHouseDetails.builtYear} with an estimated budget of ${myHouseDetails.estimatedPriceOfHouse} crores.`;
// console.log(houseDescription)

// const studentDetails = {
//     fName : "Prithvi",
//     lName : "Prasai",
//     age : 20,
//     college : "Brodway",
//     address : {
//         temporary : "KTM",
//         permanent : "BRT",
//     }
// }

// const output = studentDetails.address.permanent;
// console.log(output)

// studentDetails.age = 22;
// console.log(studentDetails)

// hospital Details
// add field => name,location,patientCapacity, numberOfBed, numberOfBlock,
// numberOfDoctor,numberOfNurse

const hospitalDetails = {
  name: "Black Health City",
  location: "Golfutar",
  patientCapacity: 15000,
  numberOfBed: 18000,
  numberOfBlock: 3,
  numberOfDoctor: 500,
  numberOfNurse: 600,
};

// delete numberOfBed and numberOfNurse
delete hospitalDetails.numberOfBed;
delete hospitalDetails.numberOfNurse;

// update numberOfBlock
hospitalDetails.numberOfBlock = 5;

// add new field named umberOfAmbulance
hospitalDetails.numberOfAmbulance = 90;

// copy the object to new variable named newHospitalDetails

// copying into new object using spread operator //
const newHospitalDetails = { ...hospitalDetails };

// print out results like "There is a hospital named ABC with....

// let finalDetails = `There is a new hospital named ${newHospitalDetails.name} located in ${newHospitalDetails.location} with patient capacity of ${newHospitalDetails.patientCapacity}`
// console.log(finalDetails)

// lets practice some object destructuring //
newHospitalDetails.name = "Green City Hospital";
const { name, location, numberOfDoctor } = newHospitalDetails;
console.log(
  `There is a new hospital named ${name}, located in ${location}, with total doctors of ${numberOfDoctor}`
);
