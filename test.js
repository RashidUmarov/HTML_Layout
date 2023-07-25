const jsonString = `{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}`;

const JSobj = JSON.parse(jsonString);
console.log('JSobj', JSobj)


const list = JSobj.list;
console.log(list)

console.log(list[0])


console.log('---------------------------------------')
const result = {mist:[{
    name: list[0].name,
    age: list[0].age,
    pro: list[0].prof,
},
    {
        name: list[1].name,
        age: list[1].age,
        pro: list[1].prof,
    },
]}
console.log('result', result)

// Задание 6.6.5
//
// Ваша задача — создать Promise, в котором c задержкой в 3 секунды сгенерировать случайное целое число от 1 до 100.
// Для создания задержки использовать setTimeout. Если сгенерированное число четное, Promise выполнится успешно (resolve),
// если нечетное — выполнится с ошибкой (reject).
//
// После разрешения Promise обработать результат его выполнения и вывести сообщение в консоль:
//     «Завершено успешно. Сгенерированное число — number», если Promise завершился успешно. Вместо number подставить сгенерированное число.
//     «Завершено с ошибкой. Сгенерированное число — number», если Promise завершился с ошибкой. Вместо number подставить сгенерированное число.

