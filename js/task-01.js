// Напиши скрипт, який виконає наступні операції.

// Порахує і виведе в консоль кількість категорій в `ul#categories`, тобто
// елементів `li.item`. Вийде `'У списку 3 категорії.'`.

// Для кожного елемента `li.item` в списку `ul#categories`, знайде і виведе в
// консоль текст заголовка елемента (тега h2) і кількість елементів в категорії
// (всіх вкладених в нього елементів `li`).

// Наприклад, для першої категорії вийде:

// - Категорія: Тварини
// - Кількість елементів: 4

// 2 Варіанти рішень, різниця не велика. В першому не створював змінну для посилання на id(`ul#categories`). Використав метод перебираючий метод forEach і для elementUlCategorie ('ul') використав посилання на дочірні (.children) елементи.
const elementWithClass = document.querySelectorAll('.item');
console.log(`У списку ${elementWithClass.length} категорії.`);

elementWithClass.forEach((element) => {
    const title = element.querySelector('h2');
    const elementUlCategorie = element.querySelector('ul');
    console.log(`Категорія: ${title.textContent}`);
    console.log(`Кількість елементів: ${elementUlCategorie.children.length}`);
})

// const elementWithId = document.querySelector('#categories');
// const elementWithClass = elementWithId.querySelectorAll('.item');
// console.log(`У списку ${elementWithClass.length} категорії.`);

// for (const element of elementWithClass) {
//     const title = element.querySelector('h2').textContent;
//     const elementLi = element.querySelectorAll('li')
//     console.log(`Категорія: ${title}`);
//     console.log(`Кількість елементів: ${elementLi.length}`);
// }
