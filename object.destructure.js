let name = "arun";

const laptop1 = {
    name: "GF75",
    brand: "MSI",
    ram: 16,
    ssd: 512,
    display: "15.3",
    graphics: "NVIDIA GeForce RTX 3060",
    battery: "51 Whr",
    processor: "i7 10750H",
    variant : {
        color1 : "green",
        color2 : "blue",
    }
}
// destructure //
// const {name,brand,} = laptop1;
// console.log(name,brand);

const{
    name:name01, // we renamed name to name01 with the help of name : name01
    ssd,
    variant : {color1,color2}, //Double de-Structure// 
} = laptop1

console.log(name,color1,color2)
