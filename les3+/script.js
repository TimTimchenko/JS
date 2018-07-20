"use strict";

var names = prompt('Введите текст', '');
var arr = names.split(' ');
var result = {};

for (var i = 0; i < arr.length; ++i) {
    var a = arr[i];
    if (result[a] != undefined)
        ++result[a];
    else
        result[a] = 1;
}

for (var key in result)
    
console.log('Слово ' + key + ' встречается в тексте ' + result[key] + ' раз(а)')


