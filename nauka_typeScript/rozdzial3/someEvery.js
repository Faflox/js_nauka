const widgets =[
    { id: 1, color: 'niebieski' },
    { id: 2, color: 'żółty' },
    { id: 3, color: 'pomarańczowy' },
    { id: 4, color: 'niebieski' },
]
test = widgets.some(item => item.color === 'niebieski');
console.log(`Czy jakieś niebieskie elementy? ${test}`);

test = widgets.every(item => item.color === 'niebieski');
console.log(`Czy wyszystkie niebieskie elementy? ${test}`);