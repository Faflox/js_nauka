const mappedEmp = new Map();
mappedEmp.set('Linda', {fullName: 'Linda Kowalsky', id:1});
mappedEmp.set('Kuba', {fullName: 'Kuba Tomaszewskie', id:2});
mappedEmp.set('Pamela', {fullName: 'Pamela Anderson', id:3});
mappedEmp.set('Kuba', {fullName: 'Kuba Gaska', id:4});

console.log(mappedEmp);
console.log('get', mappedEmp.get('Kuba'))
console.log('size', mappedEmp.size)

for(let [key, val] of mappedEmp){
    console.log('iteracja: ', key, val);
}