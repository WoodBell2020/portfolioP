jQuery('.p-calenderTable__lists > li > a').on({
	mouseenter: function () {
		// let documentWidth = jQuery(document).width();
		// let documentHeight = jQuery(document).height();
		let windowWidth = jQuery(window).width();
		let windowHeight = jQuery(window).height();
		let scrollTop = jQuery(window).scrollTop();
		let scrollLeft = jQuery(window).scrollLeft();
		let titleWidth = jQuery(this).outerWidth();
		let titleHeight = jQuery(this).outerHeight();
		let leftOffset = $(this).offset().left;
		let topOffset = $(this).offset().top;

		let leftFwindow = leftOffset - scrollLeft;
		let topFwindow = topOffset - scrollTop;
		let rightFwindow = windowWidth - leftOffset + scrollLeft - titleWidth;
		let bottomFwindow = windowHeight - topOffset + scrollTop - titleHeight;

		let leftToparea = leftFwindow * topFwindow;
		let rightToparea = rightFwindow * topFwindow;
		let leftBottomarea = leftFwindow * bottomFwindow;
		let rightBottomarea = rightFwindow * bottomFwindow;
		// let maxArea = Math.max(
		// 	leftToparea,
		// 	rightToparea,
		// 	leftBottomarea,
		// 	rightBottomarea
		// );
		let maxAreaArray = [
			leftToparea,
			rightToparea,
			leftBottomarea,
			rightBottomarea,
		];
		let maxAreaNumber =
			maxAreaArray.indexOf(Math.max.apply(null, maxAreaArray)) + 1;

		let positionLeft = leftFwindow + titleWidth + 30;
		let positionRight = rightFwindow + titleWidth + 30;

		// console.log('＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝');
		// console.log('ページ横幅' + documentWidth);
		// console.log('ページ縦幅' + documentHeight);
		// console.log('ブラウザ横幅' + windowWidth);
		// console.log('ブラウザ縦幅' + windowHeight);
		// console.log('縦スクロール' + scrollTop);
		// console.log('横スクロール' + scrollLeft);
		// console.log('タイトル横幅' + titleWidth);
		// console.log('タイトル縦幅' + titleHeight);
		// console.log('上オフセット' + topOffset);
		// console.log('ウィンドウ上座標' + topFwindow);
		// console.log('左オフセット' + leftOffset);
		// console.log('ウィンドウ左座標' + leftFwindow);

		// console.log('ウィンドウ下座標' + bottomFwindow);
		// console.log('ウィンドウ右座標' + rightFwindow);

		// console.log('タイトル右座標' + rightOffset);
		// console.log('タイトル下座標' + bottomOffset);
		// console.log('左上面積' + leftToparea);
		// console.log('右上面積' + rightToparea);
		// console.log('左下面積' + leftBottomarea);
		// console.log('右下面積' + rightBottomarea);
		// console.log('最大面積値' + maxArea);
		// console.log('最大面積ナンバー' + maxAreaNumber);

		if (maxAreaNumber == 1) {
			jQuery('.p-carender__popup').css({
				display: 'block',
				top: '',
				bottom: bottomFwindow,
				left: '',
				right: positionRight,
			});
		} else if (maxAreaNumber == 2) {
			jQuery('.p-carender__popup').css({
				display: 'block',
				top: '',
				bottom: bottomFwindow,
				left: positionLeft,
				right: '',
			});
		} else if (maxAreaNumber == 3) {
			jQuery('.p-carender__popup').css({
				display: 'block',
				top: topFwindow,
				bottom: '',
				left: '',
				right: positionRight,
			});
		} else if (maxAreaNumber == 4) {
			jQuery('.p-carender__popup').css({
				display: 'block',
				top: topFwindow,
				bottom: '',
				left: positionLeft,
				right: '',
			});
		}
		jQuery(this).css('background-color', 'yellow');
	},
	mouseleave: function () {
		jQuery('.p-carender__popup').css({
			display: 'none',
			top: '',
			bottom: '',
			left: '',
			right: '',
		});
		jQuery(this).css('background-color', 'transparent');
	},
});
