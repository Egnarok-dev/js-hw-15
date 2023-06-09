// ## Завдання 2

// В HTML є пустий список `ul#ingredients`.

// ```html
// <ul id="ingredients"></ul>
// ```

// В JS є масив рядків.

// ```js
// const ingredients = [
//   'Картопля',
//   'Гриби',
//   'Часник',
//   'Помідори',
//   'Зелень',
//   'Приправи',
// ];
// ```

// Напиши скрипт, який для кожного елемента масиву `ingredients` створить окремий
// `li`, після чого вставить всі `li` за одну операцію в список `ul.ingredients`.
// Для створення DOM-вузлів використовуй `document.createElement()`.

const vegetableSaladRecipe = document.querySelector('#ingredients');

const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];

const products = product => {
  return product.map(product => {
    const elementList = document.createElement('li');
    elementList.textContent = product;
    return elementList;
  });
};

vegetableSaladRecipe.append(...products(ingredients));
