'use strict';

// Найди и получи список из документа.

// Создай функцию sortulElement, которая принимает список (ulElement) и
// сортирует его элементы по убыванию зарплаты, взятой из data-атрибута.

// Зарплата в data-атрибуте хранится как строка, н
// е забудь преобразовать её в число.

// Для этого создай вспомогательную функцию.

// После сортировки добавь (append) отсортированные элементы обратно в список.

// Создай функцию getEmployees, которая принимает список (ulElement)
// и возвращает массив правильных объектов (из элементов списка).

// Вызови обе функции.

// Готово.
const list = document.querySelector('ul');

function parseSalary(salaryStr) {
  return salaryStr.replace(/[$,]/g, '');
}

function sortList(ulElement) {
  const li = Array.from(ulElement.children);
  // console.log(li);

  li.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  ulElement.innerHTML = '';

  for (const ch of li) {
    ulElement.append(ch);
  }
  // Возвращаем массив объектов сотрудников

  return getEmployees(ulElement);
}

// Функция getEmployees превращает набор узлов в объекты с которыми
// непосредственно можно работать в будующем для вычисления средней зарплаты
// и так дальше. А HTML(DOM) это визуальный слой, который просто
// показывает информацию без возмоности работы с ней.

function getEmployees(ulElement) {
  const arr = [];

  for (const worker of ulElement.children) {
    const obj = {
      name: worker.textContent.trim(),
      position: worker.dataset.position,
      salary: worker.dataset.salary,
      age: worker.dataset.age,
    };

    arr.push(obj);
  }

  return arr;
}

// sortulElement() → вызывает getEmployees(list) → getEmployees

// возвращает массив объектов → sortulElement возвращает этот массив наружу

// const li = Array.from(ulElement.children); работает со всеми детьми тега ul.

sortList(list);
