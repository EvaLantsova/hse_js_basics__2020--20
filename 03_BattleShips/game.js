// Координаты палуб корабля
let location1 = 5
let location2 = 6
let location3 = 7
// Координата выстрела
let currentShot
// Сколько сделано выстрелов
let shots = 0
// Сколько попаданий
let hits = 0
// Потоплен ли корабль?
let isSunk = false

// Цикл игры — работает, пока корабль не потонул
while (isSunk === false) {
  // Получаем координаты выстрела
  currentShot = Number(prompt('Введите число от 0 до 9:'))
  // Отмечаем, что сделан выстрел
  shots += 1
  // Проверяем попал или не попал
  if (currentShot === location1) {
    // Если попал, то увеличваем hits (счетчик попаданий)
    hits += 1
    // Если попал 3 раза, то топим корабль и сообщаем игроку о его успехе
    if (hits === 3) {
      isSunk = true
      alert('Пустой корабль утонул. Победа!')
    }
  }
  if (currentShot === location2) {
    hits += 1

    if (hits === 3) {
      isSunk = true
      alert('Пустой корабль утонул. Победа!')
    }
  }
  if (currentShot === location3) {
    hits += 1

    if (hits === 3) {
      isSunk = true
      alert('Пустой корабль утонул. Победа!')
    }
  }
  // Если не попал, то играем дальше
}






// EOF
