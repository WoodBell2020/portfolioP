$(function () {
	$('.p-calender__titleBox').css('display', 'none');
	$('.p-calender__table').css('display', 'none');

	const now = new Date();
	let currentMonth = new Date(now.getFullYear(), now.getMonth(), 1);
	// let prevMonth = new Date(
	// 	currentMonth.getFullYear(),
	// 	currentMonth.getMonth() - 1,
	// 	1
	// );
	// let nextMonth = new Date(
	// 	currentMonth.getFullYear(),
	// 	currentMonth.getMonth() + 1,
	// 	1
	// );

	let currentYYYYMM =
		currentMonth.getFullYear() +
		'年' +
		('0' + (currentMonth.getMonth() + 1)).slice(-2) +
		'月';
	console.log(currentYYYYMM);
	showCalendar(currentYYYYMM);

	$('.p-calender__prevBox').on('click', function () {
		console.log('prev');
		currentMonth.setMonth(currentMonth.getMonth() - 1);
		currentYYYYMM =
			currentMonth.getFullYear() +
			'年' +
			('0' + (currentMonth.getMonth() + 1)).slice(-2) +
			'月';
		console.log('prev=' + currentYYYYMM);
		currentYYYYMM = showCalendar(currentYYYYMM);
	});

	$('.p-calender__nextPaginationBox').on('click', function () {
		console.log('next');
		currentMonth.setMonth(currentMonth.getMonth() + 1);
		currentYYYYMM =
			currentMonth.getFullYear() +
			'年' +
			('0' + (currentMonth.getMonth() + 1)).slice(-2) +
			'月';
		console.log('next=' + currentYYYYMM);
		showCalendar(currentYYYYMM);
	});

	function showCalendar(currentYYYYMM) {
		let show_month = document.getElementsByClassName(
			'p-calender__currentMonth'
		);
		$('.p-calender__titleBox').css('display', 'none');
		$('.p-calender__table').css('display', 'none');
		for (let iii = 0; iii < show_month.length; iii++) {
			if (show_month[iii].innerText == currentYYYYMM) {
				$('.p-calender__titleBox:nth-of-type(' + (iii + 1) + ')').css(
					'display',
					'block'
				);
				$('.p-calender__titleBox:nth-of-type(' + (iii + 1) + ')')
					.next('.p-calender__table')
					.css('display', 'table');
			} else {
			}
		}
	}
});
