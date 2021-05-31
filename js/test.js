var value = true //условие появления кнопки, true - появиться, false - нет 
var btn = document.createElement('button'); //создаём нашу кнопку

var textInBtn = document.createTextNode('BUTTON'); //создаем текст для кнопки

btn.appendChild(textInBtn); //добавляем текст в кнопку

if (value) { //в зависимости от условия добавляем кнопку в документ
    document.body.appendChild(btn);
}