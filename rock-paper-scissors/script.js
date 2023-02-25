let summ = 0, stop = true, playerSelect, playerScor = 0, compSelect, compScore = 0, replay;
alert(`Начинаем игру камень, ножницы, бумага!`);
do {
	summ++;
	compSelect = Math.floor(Math.random() * 3) + 1;
	playerSelect = prompt(`Введите К - камень\n Введите Н - ножницы\n Введите Б - бумага`);
	if (compSelect == 1){
		switch (playerSelect) {
			case `К`:
				alert(`Компьютер ${compScore} : ${playerScor} Игрок`);
				break;
			case `Н`:
				compScore++;
				alert(`Компьютер ${compScore} : ${playerScor} Игрок`);
				break;
			case `Б`:
				playerScor++;
				alert(`Компьютер ${compScore} : ${playerScor} Игрок`);
				break;
			default:
				alert(`Проверьте корректность введённых данных`)
				break;
		}
	} else if (compSelect == 2) {
		switch (playerSelect) {
			case `Н`:
				alert(`Компьютер ${compScore} : ${playerScor} Игрок`);
				break;
			case `Б`:
				compScore++;
				alert(`Компьютер ${compScore} : ${playerScor} Игрок`);
				break;
			case `К`:
				playerScor++;
				alert(`Компьютер ${compScore} : ${playerScor} Игрок`);
				break;
			default:
				alert(`Проверьте корректность введённых данных`)
				break;
		}
	} else {
		switch (playerSelect) {
			case `Б`:
				alert(`Компьютер ${compScore} : ${playerScor} Игрок`);
				break;
			case `К`:
				compScore++;
				alert(`Компьютер ${compScore} : ${playerScor} Игрок`);
				break;
			case `Н`:
				playerScor++;
				alert(`Компьютер ${compScore} : ${playerScor} Игрок`);
				break;
			default:
				alert(`Проверьте корректность введённых данных`)
				break;
		}
	};
	if (summ < 3) continue;
	if (playerScor > compScore) {
		alert(`Вы победили!`)
	} else if (playerScor < compScore){
		alert(`Компьютер победил :()`);
	} else {
		alert(`Ничья`);
	}
	replay = confirm(`Хотите начать сначала?`);
	if (replay) {
		alert(`Начинаем игру камень, ножницы, бумага!`);
		summ = 0;
		playerScor = 0;
		compScore = 0;
	} else {
		stop = false;
	};
} while (stop)