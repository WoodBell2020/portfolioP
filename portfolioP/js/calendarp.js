$(function () {
	// 	// カレンダー表記

	const now = new Date();
	let currentMonth = new Date(now.getFullYear(), now.getMonth(), 1);
	let prevMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1);
	let nextMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1);

	createCalendar(currentMonth, prevMonth, nextMonth);
	ajaxload(currentMonth);

	// window.onload = function () {
	// 	createCalendar(currentMonth, prevMonth, nextMonth);
	// };
	//
	$('#js-prevM').on('click', function () {
		currentMonth.setMonth(currentMonth.getMonth() - 1);
		prevMonth.setMonth(prevMonth.getMonth() - 1);
		nextMonth.setMonth(nextMonth.getMonth() - 1);
		createCalendar(currentMonth, prevMonth, nextMonth);
		ajaxload(currentMonth);
	});

	$('#js-nextM').on('click', function () {
		currentMonth.setMonth(currentMonth.getMonth() + 1);
		prevMonth.setMonth(prevMonth.getMonth() + 1);
		nextMonth.setMonth(nextMonth.getMonth() + 1);
		createCalendar(currentMonth, prevMonth, nextMonth);
		ajaxload(currentMonth);
	});

	function createCalendar(current, prev, next) {
		let currentY = current.getFullYear();
		let currentM = current.getMonth();
		let prevM = prev.getMonth();
		let nextM = next.getMonth();

		$('.p-calender__currentMonth').text(currentY + '年' + (currentM + 1) + '月');
		$('.p-calender__prevMonth').text(prevM + 1 + '月');
		$('.p-calender__nextMonth').text(nextM + 1 + '月');

		let endDate = new Date(currentY, currentM + 1, 0).getDate();

		let endDate_lastMonth = new Date(currentY, currentM, 0).getDate();

		let startDayOfWeek = new Date(currentY, currentM, 1).getDay();
		startDayOfWeek != 0 ? (startDayOfWeek = startDayOfWeek - 1) : (startDayOfWeek = 6);

		let endDayOfWeek = new Date(currentY, currentM + 1, 0).getDay();
		endDayOfWeek != 0 ? (endDayOfWeek = endDayOfWeek - 1) : (endDayOfWeek = 6);

		let endDayOfWeek_lastMonth = new Date(currentY, currentM - 1, 0).getDay();
		endDayOfWeek_lastMonth != 0 ? (endDayOfWeek_lastMonth = endDayOfWeek_lastMonth - 1) : (endDayOfWeek_lastMonth = 6);

		let row = Math.ceil((startDayOfWeek + endDate) / 7);
		let arry_dayOfWeek = ['月', '火', '水', '木', '金', '土', '日'];

		console.log('====================================================');
		console.log('currentM=' + (currentM + 1));
		// console.log('startDate=' + startDate);
		console.log('endDate=' + endDate);
		console.log('endDate_lastMonth=' + endDate_lastMonth);
		console.log('startDayOfWeek=' + startDayOfWeek);
		console.log('endDayOfWeek=' + endDayOfWeek);
		console.log('endDayOfWeek_lastMonth=' + endDayOfWeek_lastMonth);
		console.log('row=' + row);
		console.log('====================================================');

		// for (let i = 0; i <= startDayOfWeek - 1; i++) {
		// 	console.log('iA=' + i);
		// 	console.log('startDayOfWeek - i=' + (endDate_lastMonth - startDayOfWeek + i + 1));
		// 	$('.p-calenderTable__number')
		// 		.eq(i)
		// 		.text(endDate_lastMonth - startDayOfWeek + i + 1);
		// }
		// for (let i = 0; i < endDate; i++) {
		// 	console.log('iB=' + i);
		// 	console.log('startDayOfWeek + i=' + (startDayOfWeek + i));

		// 	$('.p-calenderTable__number')
		// 		.eq(startDayOfWeek + i)
		// 		.text(i + 1);
		// }

		// for (let i = 0; i < 6 - endDayOfWeek; i++) {
		// 	console.log('iC=' + i);
		// 	console.log('startDayOfWeek + endDate + 1=' + (startDayOfWeek + endDate + i));

		// 	$('.p-calenderTable__number')
		// 		.eq(startDayOfWeek + endDate + i)
		// 		.text(i + 1);
		// }

		$('.p-calenderTable').empty();

		let nnn = 0;
		// console.log('nnnA=' + nnn);

		let calender = '';
		calender += '<tr class="p-calenderTable__row1">';
		for (let iii = 0; iii < 7; iii++) {
			calender += '<th class="p-calenderTable__dayOfWeek">';
			calender += arry_dayOfWeek[iii];
			calender += '</th>';
		}
		calender += '</tr>';

		for (let jjj = 0; jjj < row; jjj++) {
			calender += '<tr>';
			for (let kkk = 0; kkk < 7; kkk++) {
				nnn++;
				// console.log('nnnB=' + (nnn - 1));
				// console.log('startDayOfWeek=' + startDayOfWeek);

				calender += '<td class="p-calenderTable__date">';

				calender += '<p class="p-calenderTable__number">';

				// if (nnn - 1 < startDayOfWeek) {
				// 	calender += endDate_lastMonth - startDayOfWeek + nnn;
				// 	// console.log(
				// 	// 	'endDate_lastMonth - startDayOfWeek + nnn= ' +
				// 	// 		(endDate_lastMonth - startDayOfWeek + nnn)
				// 	// );
				// } else if (

				if (nnn - 1 >= startDayOfWeek && nnn - 1 < startDayOfWeek + endDate) {
					calender += nnn - startDayOfWeek;
				}
				// else if (nnn - 1 >= startDayOfWeek + endDate) {
				// 	calender += nnn - startDayOfWeek - endDate;
				// }

				calender += '</p>';

				// if (nnn - 1 < startDayOfWeek) {
				// 	calender += '<ul class="p-calenderTable__lists">';
				// 	for (let hhh = 0; hhh < 21; hhh++) {
				// 		calender +=
				// 			'<li><a data-id="' +
				// 			(hhh + 1) +
				// 			'" href="./newsdetailSP.html">タイトル' +
				// 			(hhh + 1) +
				// 			'</a></li>';
				// 	}
				// 	calender += '</ul>';
				// } else if (

				if (nnn - 1 >= startDayOfWeek && nnn - 1 < startDayOfWeek + endDate) {
					let YYYYMMDD = currentY + ('0' + (currentM + 1)).slice(-2) + ('0' + (nnn - startDayOfWeek)).slice(-2);

					calender += '<ul id="v' + YYYYMMDD + '" class="p-calenderTable__lists">';

					// 	for (let hhh = 0; hhh < 21; hhh++) {
					// 		calender += '<li><a data-id="' + (hhh + 1) + '" href="./newsdetailSP.html">タイトル' + (hhh + 1) + '</a></li>';
					// 	}
					// 	calender += '</ul>';
					// }

					// else if (nnn - 1 >= startDayOfWeek + endDate) {
					// 	calender += '<ul class="p-calenderTable__lists">';
					// 	for (let hhh = 0; hhh < 21; hhh++) {
					// 		calender +=
					// 			'<li><a data-id="' +
					// 			(hhh + 1) +
					// 			'" href="./newsdetailSP.html">タイトル' +
					// 			(hhh + 1) +
					// 			'</a></li>';
					// 	}
					calender += '</ul>';
				}
				calender += '</td>';
			}
			calender += '</tr>';
		}

		// console.log(calender);

		$('.p-calenderTable').append(calender);
	}

	// カレンダーホバー時の吹き出しPopUp
	// $(window, '#js-prevM, #js-nextM').on('load resize click'){
	// 	function showHover();
	// };

	$(window).on('load resize', function () {
		showHover();
	});

	$(document).on('mousemove', function () {
		showHover();
	});

	function showHover() {
		$('.p-calenderTable__lists > li > a').on({
			mouseenter: function () {
				let window_width = $(window).width();
				let window_height = $(window).height();
				let scroll_top = $(window).scrollTop();
				let scroll_left = $(window).scrollLeft();
				let title_width = $(this).outerWidth();
				let title_height = $(this).outerHeight();
				let left_offset = $(this).offset().left;
				let top_offset = $(this).offset().top;

				let left_window = left_offset - scroll_left;
				let top_window = top_offset - scroll_top;
				let right_window = window_width - left_offset + scroll_left - title_width;
				let bottom_window = window_height - top_offset + scroll_top - title_height;

				let maxAreaArray = [left_window * top_window, right_window * top_window, left_window * bottom_window, right_window * bottom_window];

				let maxAreaNumber = maxAreaArray.indexOf(Math.max.apply(null, maxAreaArray)) + 1;

				let positionLeft = left_window + title_width + 5;
				let positionRight = right_window + title_width + 5;

				let data_date = $(this).data('date');
				let data_number = $(this).data('number');

				if (maxAreaNumber == 1) {
					$('.p-calender__popup[data-date="' + data_date + '"][data-number="' + data_number + '"]').css({
						// $('.p-calender__popup').css({
						display: 'block',
						top: '',
						bottom: bottom_window,
						left: '',
						right: positionRight,
					});
					// $('.p-popup__container ').addClass('p-popup__container--area1');
				} else if (maxAreaNumber == 2) {
					$('.p-calender__popup[data-date="' + data_date + '"][data-number="' + data_number + '"]').css({
						// $('.p-calender__popup').css({
						display: 'block',
						top: '',
						bottom: bottom_window,
						left: positionLeft,
						right: '',
					});
					// $('.p-popup__container ').addClass('p-popup__container--area2');
				} else if (maxAreaNumber == 3) {
					$('.p-calender__popup[data-date="' + data_date + '"][data-number="' + data_number + '"]').css({
						// $('.p-calender__popup').css({
						display: 'block',
						top: top_window,
						bottom: '',
						left: '',
						right: positionRight,
					});
					// $('.p-popup__container ').addClass('p-popup__container--area3');
				} else if (maxAreaNumber == 4) {
					$('.p-calender__popup[data-date="' + data_date + '"][data-number="' + data_number + '"]').css({
						// $('.p-calender__popup').css({
						display: 'block',
						top: top_window,
						bottom: '',
						left: positionLeft,
						right: '',
					});
					// $('.p-popup__container ').addClass('p-popup__container--area4');
				}
				$(this).css({ color: '#FF8200', 'font-weight': 'bold' });
			},
			mouseleave: function () {
				$('.p-calender__popup').css({
					display: 'none',
					top: '',
					bottom: '',
					left: '',
					right: '',
				});
				// $('.p-popup__container ').removeClass('p-popup__container--area1');
				// $('.p-popup__container ').removeClass('p-popup__container--area2');
				// $('.p-popup__container ').removeClass('p-popup__container--area3');
				// $('.p-popup__container ').removeClass('p-popup__container--area4');
				$(this).css({ color: '#53565A', 'font-weight': 'normal' });
			},
		});
	}

	// スマホ画面時にカレンダークリックした時のモーダルの挙動
	$(document).on('click', '.p-calenderTable__date, .p-newsdetailSP__dateBox > li > a', function () {
		showDateSP(this);
	});
	$('.p-newsdetailSP__dateBox  li  a').on('click', function () {
		showDateSP(this);
	});

	function showDateSP(_this) {
		let current_YandM = $('.p-calender__currentMonth').text();
		let click_date = $(_this).children('.p-calenderTable__number').text();
		click_date = $(_this).children('p:first-of-type').text();

		let current_year = current_YandM.substring(0, current_YandM.indexOf('年'));
		let current_month = current_YandM.substring(current_YandM.indexOf('年') + 1, current_YandM.indexOf('月'));
		let YYYYMMDD = current_year + ('0' + current_month).slice(-2) + ('0' + click_date).slice(-2);
		let current_Instance = new Date(current_year, current_month - 1, 1);
		let clickdate_Instance = new Date(current_year, current_month - 1, click_date);
		// console.log('clickdate_Instance=' + clickdate_Instance);
		let lastday_Instance = new Date(current_Instance.getFullYear(), current_Instance.getMonth() + 1, 0);
		let click_day = clickdate_Instance.getDay();
		click_day != 0 ? (click_day = click_day - 1) : (click_day = 6);
		let current_lastdate = lastday_Instance.getDate();

		let arry_dayOfWeek = ['月', '火', '水', '木', '金', '土', '日', '月', '火', '水', '木', '金', '土', '日', '月', '火', '水', '木', '金', '土', '日'];

		$('.p-newsdetailSP').css('top', '60px');
		$('.p-newsdetailSP__dateBox li a').css('color', '#53565A');
		$('.p-newsdetailSP__dateBox li:nth-child(odd) a').css('background-color', '#f2f2f2');
		$('.p-newsdetailSP__dateBox li:nth-child(even) a').css('background-color', '#FAFAFA');
		$('.p-newsDetailLists').empty();
		$('.p-newsdetailSP__dateBox li p').empty();

		if (click_date <= 3) {
			for (let iii = 0; iii < 7; iii++) {
				$('.p-newsdetailSP__dateBox > li:nth-of-type(' + (iii + 1) + ') p:first-of-type').text(iii + 1);
				$('.p-newsdetailSP__dateBox > li:nth-of-type(' + (iii + 1) + ') p:last-of-type').text(arry_dayOfWeek[click_day + iii - click_date + 1]);
			}
			$('.p-newsdetailSP__dateBox > li:nth-of-type(' + click_date + ') a').css({
				'background-color': '#FF8200',
				color: '#fff',
			});
		} else if (click_date >= current_lastdate - 3) {
			for (let iii = 0; iii < 7; iii++) {
				$('.p-newsdetailSP__dateBox > li:nth-of-type(' + (iii + 1) + ') p:first-of-type').text(current_lastdate - 6 + iii);
				$('.p-newsdetailSP__dateBox > li:nth-of-type(' + (iii + 1) + ') p:last-of-type').text(arry_dayOfWeek[1 + click_day + current_lastdate - click_date + iii]);
			}
			$('.p-newsdetailSP__dateBox > li:nth-of-type(' + (7 - (current_lastdate - click_date)) + ') a').css({
				'background-color': '#FF8200',
				color: '#fff',
			});
		} else {
			for (let iii = 0; iii < 7; iii++) {
				$('.p-newsdetailSP__dateBox > li:nth-of-type(' + (iii + 1) + ') p:first-of-type').text(click_date - 3 + iii);
				$('.p-newsdetailSP__dateBox > li:nth-of-type(' + (iii + 1) + ') p:last-of-type').text(arry_dayOfWeek[click_day + iii + 4]);
			}
			$('.p-newsdetailSP__dateBox > li:nth-of-type(4) a').css({
				'background-color': '#FF8200',
				color: '#fff',
			});
		}

		let popup_array = $('.p-popup[data-date="' + YYYYMMDD + '"]')
			.clone()
			.get();

		for (let kkk = 0; kkk < popup_array.length; kkk++) {
			$('.p-newsDetailLists').append(popup_array);
		}

		$('.p-newsDetailLists > .p-popup').css('display', 'block');
	}

	$('.p-newsdetailSP__closeButton').on({
		click: function () {
			$('.p-newsdetailSP').css('top', '-120vh');
		},
	});

	function ajaxload(currentMonth) {
		$.ajax({
			type: 'POST',
			url: 'https://woodbell-jpb.com/portfolioP/js/data.jsonp',
			// url: 'http://localhost:8888/data.jsonp',
			dataType: 'jsonp',
			cache: 'false',
			jsonpCallback: 'callback2',
		})
			.done(function (json01) {
				$('.p-popupBox').empty();

				console.log('currentMonth=' + currentMonth);
				let currentY = currentMonth.getFullYear();
				let currentM = currentMonth.getMonth() + 1;
				console.log('currentY=' + currentY);
				console.log('currentM=' + currentM);

				let cntvno01 = currentY + ('0' + currentM).slice(-2) + '01';

				let cntvno31 = currentY + ('0' + currentM).slice(-2) + '31';

				console.log('===========================');
				console.log('cntvno01=' + cntvno01);
				console.log('cntvno31=' + cntvno31);
				console.log('===========================');

				let len = json01.length;
				console.log('===========================');
				console.log('len=' + len);
				console.log('===========================');

				for (var iii = 0; iii < len; iii++) {
					let dated = json01[iii].day;
					let titled = json01[iii].title;
					// let URLd = json01[iii].url;
					let number = json01[iii].number;
					let texted = json01[iii].text;
					let targeted = json01[iii].target;
					let deadlined = json01[iii].deadline;

					console.log('===========================');
					console.log('dated=' + dated);
					console.log('titled=' + titled);
					console.log('number=' + number);
					console.log('===========================');

					if (dated >= cntvno01 && dated <= cntvno31) {
						let schedule = '<li class="newsList_item"><a class="newsList_date" href="#" data-date="' + dated + '" data-number="' + number + '">' + '<p>' + titled + '</p>' + '\n' + '<p>' + texted + '</p>' + '</a></li>';

						$('#v' + dated).append(schedule);

						let popup = '<a class="p-calender__popup p-popup" href="#"  data-date="' + dated + '" data-number="' + number + '"><div class="p-popup__container"><p class="p-popup__title">' + titled + '</p><p class="p-popup__excerpt">' + texted + '</p><p class="p-popup__target"><span>【対応範囲】</span><span>' + targeted + '</span></p><p class="p-popup__deadline"><span>【対応期限】</span><span>' + deadlined + '</span></p></div></a>';

						$('.p-popupBox').append(popup);
					}
				}
			})
			.fail(function () {
				alert('false');
			})
			.always(function () {});
	}
});
