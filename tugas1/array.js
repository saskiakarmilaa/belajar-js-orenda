const nilai = [90,80,80,55,90]


// Jika semua nilai diatas 80 dapat A


if(nilai.every(value => {
    return value > 80
} )){
    console.log("A");
    
}else{
    console.log("E");
    
}

const nilai2 = ["Title 1","Title 2", "Title 3"]


const va = "skd"


//Ubah nilai index 1 jadi AAAA

const temp = nilai2.map((value, index) => {
    if(index ==1){
        return value="AAA"
    }
    return value
})

console.log(nilai2);
console.log(temp);

const newArr = nilai2.filter(value => {
    return value == 'Title 1'
})

console.log("New Arr", newArr[0]);


const newR = nilai2.find(value => {
    return value == 'Title 1'
})

console.log("New ", newR);
