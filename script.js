const start = new Date().getSeconds();
for (let i = 0; i < 10000000000; i++) {}
console.log(new Date().getSeconds() - start);
