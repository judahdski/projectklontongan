var s = '';
for (var i = 0; i < 10; i++) {
    for (var j = 10; j > i; j--) {
        s += '*';
    }
    s += '\n';
}

console.log(s);
