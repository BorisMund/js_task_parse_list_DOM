'use strict';

// Найди и получи список из документа.

// Создай функцию sortList, которая принимает список (list) и
// сортирует его элементы по убыванию зарплаты, взятой из data-атрибута.

// Зарплата в data-атрибуте хранится как строка, н
// е забудь преобразовать её в число.

// Для этого создай вспомогательную функцию.

// После сортировки добавь (append) отсортированные элементы обратно в список.

// Создай функцию getEmployees, которая принимает список (list)
// и возвращает массив правильных объектов (из элементов списка).

// Вызови обе функции.

// Готово.
const list = document.querySelector('ul');

function sortList() {
  const li = Array.from(document.querySelectorAll('li'));
  // console.log(li);

  li.sort((a, b) => {
    const salaryA = a.dataset.salary.replace(/[$,]/g, '');
    const salaryB = b.dataset.salary.replace(/[$,]/g, '');

    return salaryB - salaryA;
  });
  list.innerHTML = '';

  for (const ch of li) {
    list.append(ch);
  }
  // Возвращаем массив объектов сотрудников

  return getEmployees(li);
}

// Функция getEmployees превращает набор узлов в объекты с которыми
// непосредственно можно работать в будующем для вычисления средней зарплаты
// и так дальше. А HTML(DOM) это визуальный слой, который просто
// показывает информацию без возмоности работы с ней.

function getEmployees(li) {
  const arr = [];

  for (const worker of li) {
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

// sortList() → вызывает getEmployees(li) → getEmployees

// возвращает массив объектов → sortList возвращает этот массив наружу

sortList(list);
