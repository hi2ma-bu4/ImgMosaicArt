/*自作ライブラリ
 * ↓ドット絵を作成する(画像リンクだけ必要)
 * VL_IMArt(oldCanvas(String), ansCanvas(String), links, pieceImgSize, ansScale)
 * ↓ドット絵を作成する(HEX,画像リンクが必要)
 * IMArt(canvas, imageData, linkPalette, pieceImgSize)
 * ↓色をカラーパレットに揃える
 * AlignColors(imageData,palette["#000000", etc.] or num)
 * ↓RGB→HEX
 * RGB2bgColor(r, g, b)
 * ↓HEX→RGB
 * convertToRGB(hex)
*/

function VL_IMArt(oldCanvasS, ansCanvasS, links, pieceImgSize, ansScale, mode) {
	const canvas = document.getElementById(oldCanvasS),
		ansCanvas = document.getElementById(ansCanvasS),
		ctx = canvas.getContext("2d"),
		context = ansCanvas.getContext('2d');
	context.clearRect(0, 0, ansCanvas.width, ansCanvas.height);
	const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
	var loadedCount = 1,
		img = [],
		linkPalette = [],
		DuplicateVal,
		leh = links.length;
	var all_perf = performance.now();
	console.log('#IMA,Start palette:' + leh);
	var perf = performance.now();
	console.log('VL_IMArt,Start');
	var perf_dot = perf;
	console.log('_DotImage,Start');
	for (var i = 0; i < leh; i++) {
		img[i] = document.createElement('img');
		img[i].setAttribute('src', links[i]);
	}
	for (var i in img) {
		img[i].addEventListener('load', function () {
			var PL = img.length;
			if (loadedCount == PL) {
				for (var j = 0; j < PL; j++) {
					var rgb = getAverageRGB(img[j]);
					linkPalette.push(RGB2bgColor(rgb.r, rgb.g, rgb.b).toUpperCase(), links[j]);
				}
				DuplicateVal = getDuplicateValues(linkPalette);
				if (DuplicateVal.length) console.log('_GDV,DuplicateColor:',DuplicateVal);
				console.log('_DotImage,End:' + (performance.now() - perf_dot) + 'ms');
				context.putImageData(IMArt(ansCanvas, imageData, linkPalette, pieceImgSize, mode, all_perf), 0, 0);
				context.scale(ansScale, ansScale);
				ansCanvas.width = canvas.width * pieceImgSize.x * ansScale;
				ansCanvas.height = canvas.height * pieceImgSize.x * ansScale;
				console.log('VL_IMArt,End:' + (performance.now() - perf) + 'ms');
			}
			loadedCount++;
		});
	}
}
function IMArt(ansCanvas, imageData, linkPalette, pieceImgSize, mode = 0, all_perf = 0) {
	if (!all_perf) {
		all_perf = performance.now();
		console.log('#IMA,Start');
	}
	var perf = performance.now();
	console.log('IMArt,Start');
	const ctx = ansCanvas.getContext("2d"),
		LPS = linkPalette.length;
	var loadedCount = 1,
		palette = [],
		imgPalette = [],
		pic = [],
		pic_urls = [];
	for (var i = 0; i < LPS; i += 2) {
		palette.push(linkPalette[i]);
		imgPalette.push(linkPalette[i + 1]);
	}
	imageData = AlignColors(imageData, palette, mode);
	var pixels = imageData.data;
	const IDL = pixels.length,
		PLL = palette.length;
		IDW = imageData.width;
	var perf_dot = performance.now();
	console.log('_DotURL,Start');
	for (var i = 0; i < PLL; i++) {
		pic[i] = new Image();
		pic[i].src = imgPalette[i];
	}
	for (var i = 0; i < IDL; i += 4) {
		pic_urls[i / 4] = palette.indexOf(RGB2bgColor(pixels[i], pixels[i + 1], pixels[i + 2]).toUpperCase());
	}
	console.log('_DotURL,End:' + (performance.now() - perf_dot) + 'ms');
	var perf_dot = performance.now();
	console.log('_DrawImage,Start');
	for (var i in pic) {
		pic[i].addEventListener('load', function () {
			if (loadedCount == pic.length) {
				var PL = pic_urls.length;
				for (var j = 0; j < PL; j++) {
					ctx.drawImage(pic[pic_urls[j]], (j % IDW) * pieceImgSize.x, Math.floor(j / IDW) * pieceImgSize.y);
				}
				console.log('_DrawImage,End:' + (performance.now() - perf_dot) + 'ms');
				console.log('#IMA,End:' + (performance.now() - all_perf) + 'ms');
			}
			loadedCount++;
		}, false);
	}
	console.log('IMArt,End:' + (performance.now() - perf) + 'ms');
	return ctx.getImageData(0, 0, ansCanvas.width, ansCanvas.height);
}
function AlignColors(imageData, palette, mode = 0) {
	var perf = performance.now();
	console.log('AlignColors,Start');
	const width = imageData.width,
		height = imageData.height;
	var pixels = imageData.data;
	if (!Array.isArray(palette)) {
		var num = palette,
			TmpCP = [];
		const ColorPalette = [
			"0000FF", "00FF00", "FF0000", //3:青,ライム,赤[RGB]
			"000000", "FFFFFF", //5:黒,白[wb]
			"FFFF00", "FF00FF", "00FFFF",  //8:黄,赤紫,水[デジタル3bit]
			"C0C0C0", "808080", "800000", "808000", //16:(+8)銀,灰,栗,オリーブ[HTML基本4bit]
			"008000", "008080", "000080", "800080", //16:緑,ティール,ネイビー,紫
			"FF4000", "FF8000", "FFBF00", "BFFF00", //34(+18):朱,橙,ゴールデンイエロー,明るい黄緑[+色相24等分]
			"80FF00", "40FF00", "00FF40", "00FF80", //34:黄緑,リーフグリーン,コバルトグリーン,エメラルドグリーン
			"00FFBF", "00BFFF", "0080FF", "0040FF", //34:青緑,セルリアンブルー,アジュール,コバルトブルー
			"4000FF", "8000FF", "BF00FF", "FF00BF", //34:ヒヤシンス,バイオレット,紫,赤紫
			"FF0080", "FF0040" //34:ルビーデッド,紅
		];
		if (num >= 1) {
			palette = ColorPalette.slice(0, num);
			if (num >= 35) { //90(+56):[+RGB4段階配色]
				for (var i = 0; i < 16; i += 5) {
					fit = i.toString(16);
					for (var j = 0; j < 16; j += 5) {
						fjt = j.toString(16);
						for (var k = 0; k < 16; k += 5) {
							fkt = k.toString(16);
							TmpCP.push(("" + fit + fit + fjt + fjt + fkt + fkt).toUpperCase());
						}
					}
				}
				TmpCP = [...new Set([...ColorPalette, ...TmpCP])];
				palette = TmpCP.slice(0,num);
			}
		}
		else if (num == -1) { //-1(-256):[グレースケール]
			for (var i = 0; i < 256; i++) {
				fit = ('00' + i.toString(16)).slice(-2);
				TmpCP.push(("" + fit + fit + fit).toUpperCase());
			}
			palette = TmpCP;
		}
		else
		{
			palette = ["000000"];
		}
	}
	imageData.data = chooseColor(palette, pixels, {h:height,w:width}, mode);
	console.log('AlignColors,End:' + (performance.now() - perf) + 'ms');
	return imageData;
}
function RGB2bgColor(r, g, b) {
	r = r.toString(16);
	g = g.toString(16);
	b = b.toString(16);
	return "" + (--r.length ? r : r = "0" + r) +
		(--g.length ? g : g = "0" + g) +
		(--b.length ? b : b = "0" + b);
}
function getAverageRGB(imgEl) {
	var blockSize = 5,
		count = 0,
		rgb = {r:0, g:0, b:0},
		canvas = document.createElement('canvas'),
		context = canvas.getContext('2d'),
		i = -4,
		height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height,
		width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;
	context.drawImage(imgEl, 0, 0);
	var data = context.getImageData(0, 0, width, height);
	var length = data.data.length;
	while ((i += blockSize * 4) < length) {
		++count;
		rgb.r += data.data[i];
		rgb.g += data.data[i + 1];
		rgb.b += data.data[i + 2];
	}
	rgb.r = ~~(rgb.r / count);
	rgb.g = ~~(rgb.g / count);
	rgb.b = ~~(rgb.b / count);
	return rgb;
}
const getDuplicateValues = arr => {
    return arr.filter((value, index, self) => self.indexOf(value) === index && self.lastIndexOf(value) !== index);
}