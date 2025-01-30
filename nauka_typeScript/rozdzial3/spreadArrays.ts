namespace SpreadArray {
    const array1 = [1,2,3];
    const array2 = [4,5,6];

    const array3 = [...array1, ...array2];
    const array4 = array1.concat(array2);

    console.log(`C: ${array3}`)
    console.log(`D: ${array4}`)
    array1.push(10);
    console.log(`A: ${array1}`)
    console.log(`C: ${array3}`)
    console.log(`D: ${array4}`)
}