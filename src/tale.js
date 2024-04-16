const kolobok = (characterName) => {
    switch (characterName) {
      case 'дедушка':
        return 'Я от дедушки ушёл';    
      case 'Заяц':
        return 'Я от зайца ушел';  
      case 'Лиса':
        return 'Меня съели';    
    };
}

function newYear(characterName) {
  if (characterName === 'Дед Мороз' || characterName === 'Снегурочка') {
  return characterName + '! ' + characterName + '! ' + characterName + '!';
  } else {
  return 'Неизвестный персонаж';
  }
  }
