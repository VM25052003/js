//First task of printing index is to be completed first and then proceeds with any other task.Eg of Synchronous Programming. Can handle single thing at once
for (let index = 1; index <= 5; index++) {
    const element = index;
    console.log('This is index number ' + index)
}
console.log('Printing done successfully')

//Index will be printed, continue with the next text, so 'printing' statement printed first and alongside index no. are also printed using settimeout. Eg of Asynchronous Programming. Can handle multiple things at the same time
setTimeout(() => {
    for (let index = 1; index <= 5; index++) {
        const element = index;
        console.log('This is index number ' + index)
    }
}, 100);
console.log('Printing done successfully')