$(function () {
	$('.js-hamburger').on('click', function () {
		if ($('.js-hamburger').hasClass('open')) {
			$('.c-header__boxSP').fadeOut();
			$(this).removeClass('open');
		} else {
			$('.c-header__boxSP').fadeIn();
			$(this).addClass('open');
		}
	});
	$('.c-btnClose').on('click', function () {
		$('.c-header__boxSP').fadeOut();
		$('.js-hamburger').removeClass('open');
	});

	// フッターのアコーディオン
	if ($('.c-accordion').length) {
		// OnOffを切り替えるウィンドウサイズ。
		var accWidth = 1001;
		$('.c-accordion span').click(function () {
			var windowWidth = parseInt($(window).width());
			if (windowWidth >= accWidth) {
				// 画面サイズ大のとき
			} else {
				// 画面サイズ小のとき
				$(this).parents('.c-accordion').toggleClass('open');
				$(this).next('.c-accordion__lists').slideToggle();
				$(this)
					.parent('.c-accordion')
					.siblings('.c-accordion')
					.removeClass('open');
			}
		});
		// 画面サイズ変更時で、OnOff切り替えが行われる場合はリセットする

		var isAccordion = null;
		$(window).on('load resize', function () {
			var windowWidth = parseInt($(window).width());
			if (isAccordion != null && isAccordion === windowWidth < accWidth) {
				return;
			}
			isAccordion = windowWidth < accWidth;
			// console.log('isAccordion=' + isAccordion);

			if (!isAccordion) {
				// console.log('aaa');
				$('.c-accordion__lists').slideDown();
				$('.c-accordion').removeClass('open');
			} else {
				// console.log('BBB');
				$('.c-accordion__lists').slideUp();
				$('.c-accordion').removeClass('open');
			}
		});
	}

	// サイドカラムのモーダル
	$('.c-sideModalBtn').click(function () {
		$('.l-sideColumn').toggleClass('sideActive');
	});
	$(window).on('load resize', function () {
		$('.l-sideColumn').removeClass('sideActive');
	});

	// サイドカラムのアコーディオン
	if ($('.c-findArchive').length) {
		// OnOffを切り替えるウィンドウサイズ。
		var windowWidth = parseInt($(window).width());
		var mainWidth = 767;
		$('.c-findArchive__yearBox').click(function () {
			if ($(this).hasClass('open')) {
				$(this).toggleClass('open');
				$(this).next('.c-findArchive__monthsLists').removeClass('active');
			} else {
				$(this).toggleClass('open');
				$(this).next('.c-findArchive__monthsLists').addClass('active');
			}
		});

		$(window).on('load resize', function () {
			$('.c-findArchive__yearBox').removeClass('open');
			$('.c-findArchive__monthsLists').removeClass('active');
		});
	}

	// カレンダーのアコーディオン
	// $(window).on('load', function () {
	// 	if (location.pathname == '/newsTop.html') {
	// 		console.log('lkj');
	// 		$(this).addClass('open');
	// 		$('.p-calender').slideDown();
	// 	} else {
	// 		console.log('poi');
	// 		$(this).removeClass('open');
	// 		$('.p-calender').slideUp();
	// 	}
	// });

	if ($('.js-calender__toggle').length) {
		$('.js-calender__toggle').click(function () {
			$(this).toggleClass('open');
			$(this).next('.p-calender').slideToggle();
		});
	}

	// スムーススクロール

	$('a[href^="#"]').click(function () {
		var speed = 500;
		var href = $(this).attr('href');
		var target = $(href == '#' || href == '' ? 'html' : href);
		//ヘッダーの高さを取得
		var header = $('header').height();
		//ヘッダーの高さを引く
		var position = target.offset().top - header;
		$('html, body').animate({ scrollTop: position }, 300, 'linear');
		return false;
	});

	// ページトップ
	var pagetop = $('#page_top');
	var windowHeight = $(window).height();
	// ボタン非表示
	pagetop.hide();
	// 100px スクロールしたらボタン表示
	$(window).scroll(function () {
		if ($(this).scrollTop() > windowHeight) {
			pagetop.fadeIn();
		} else {
			pagetop.fadeOut();
		}
	});
	pagetop.click(function () {
		$('body, html').animate({ scrollTop: 0 }, 300, 'linear');
		return false;
	});

	// ヘッダー子メニュー
	$('.c-header__navLists li').on({
		mouseenter: function () {
			let accWidth = 1001;
			let windowWidth = parseInt($(window).width());
			if (windowWidth >= accWidth) {
				$(this).children('.c-headerSub').stop().slideDown();
			}
		},
		mouseleave: function () {
			let accWidth = 1001;
			let windowWidth = parseInt($(window).width());
			if (windowWidth >= accWidth) {
				$(this).children('.c-headerSub').slideUp();
			}
		},
	});
});

$('.c-header__navLists li span').on({
	click: function () {
		$(this).next('.c-headerSub').slideToggle();
		$(this).parents('li').toggleClass('open');
	},
});

//Newマーク
var pass = 7 * 24;
var content = 'New';
var currentDate = new Date();
$('.new').each(function () {
	time = $(this).text().split(':');
	var entryDate = new Date(
		time[0],
		time[1] - 1,
		time[2],
		time[3],
		time[4],
		time[5]
	);
	var now = (entryDate.getTime() - currentDate.getTime()) / (60 * 60 * 1000);
	now = Math.ceil(now);
	if (-now <= pass) {
		$(this).html(content).css('display', 'inline');
	} else {
		$(this).html(content).css('display', 'none');
	}
});
