// ? Task:Время обновлять програмное обеспечение!
// Инженеры выпустили обновление для роботов.Нужно выстроить всех роботов и проверить,
//   у кого из них устаревшее ПО.

// Функция getOutdated принимает массив роботов robots и возвращает
// массив индексов тех роботов, у которых coreVersion меньше newVersion.

// Пример:

// const robots = [
//   { coreVersion: 9 },
//   { coreVersion: 13 },
//   { coreVersion: 16 },
//   { coreVersion: 9 },
//   { coreVersion: 14 },
// ];

// getOutdated(robots, 10) === [0, 3]
// getOutdated(robots, 14) === [0, 1, 3]
// getOutdated(robots, 8) === []
// getOutdated(robots, 18) === [0, 1, 2, 3, 4]





// Solution 1
const robots = [
  { coreVersion: 9 },
  { coreVersion: 13 },
  { coreVersion: 16 },
  { coreVersion: 9 },
  { coreVersion: 14 },
];

function getOutdated(robots, newVersion) {
  const indexArray = [];
  

  for (const person of robots) {
    const name = person.coreVersion;

    if (name < newVersion) {
      indexArray.push(robots.indexOf(person));
    }
    
  }

  return indexArray;
}



console.log('getOutdated(robots, 10): ', getOutdated(robots, 10));
 
console.log('getOutdated(robots, 14): ', getOutdated(robots, 14));

console.log('getOutdated(robots, 8): ', getOutdated(robots, 8));

console.log('getOutdated(robots, 18): ', getOutdated(robots, 18));

// ! Explanation: push indexOf  for-of
