const table = {};
table.brand = 'Ikea';
table.color = 'Black';
table.form = 'Circle';

const str = 'brand';
const str2 = 'country';

function hasProperies(obj,str) {
    return (str in obj)
}

console.log(hasProperies(table,str));
console.log(hasProperies(table,str2));
