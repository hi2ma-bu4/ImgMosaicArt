/* 自作ライブラリ(拡張)
 * ↓VL_IMArt を最適なcanvasの数で実行
 * AutoIMArt(oldCanvasS, subCanvasS, ansCanvasS, LPalette, pieceImgSize, ansScale, mode, CutMode)
 *
*/

function AutoIMArt(oldCanvasS, subCanvasS, ansCanvasS, LPalette, pieceImgSize, ansScale = 1, mode = 0, CutMode = 0){
	const canvas = document.getElementById(oldCanvasS),
		ctx = canvas.getContext("2d"),
		size = canvas.width * canvas.height * pieceImgSize.x * pieceImgSize.y;
	var c;
	console.log("size:",size);
	if(268435456 >= size){
		console.log("IMA1s");
		VL_IMArt(oldCanvasS, ansCanvasS+"1", LPalette, pieceImgSize, ansScale, mode);
	}
	else if(268435456 * 16 >= size){
		if(268435456 * 4 >= size){
			c = 2;
		}
		else if(268435456 * 9 >= size){
			c = 3;
		}
		else{
			c = 4;
		}
		console.log("IMA"+ c**2 +"s");
		IMAxs(oldCanvasS, subCanvasS, ansCanvasS, LPalette, pieceImgSize, ansScale, mode, c, CutMode);
	}
	else
	{
		console.log("IMA9s : 不正な値です!");
	}
}

function IMAxs(oldCanvasS, subCanvasS, ansCanvasS, LPalette, pieceImgSize, ansScale = 1, mode = 0, maxCou = 2, CutMode = 0){
	const canvas = document.getElementById(oldCanvasS),
		ctx = canvas.getContext("2d"),
		subCanvas = document.getElementById(subCanvasS),
		context = subCanvas.getContext("2d"),
		width = canvas.width,
		height = canvas.height,
		wh = (width % maxCou ? width-1 : width)/maxCou,
		hh = (height % maxCou ? height-1 : height)/maxCou;
	console.log(wh,hh);
	subCanvas.width = wh;
	subCanvas.height = hh;
	if(CutMode == 0){
		VL_Cut();
	}
	else
	{
		VL_Cut(CutMode,!0);
	}
	function VL_Cut(Count = 1,stop = !1){
		console.log("Canvas:"+ Count);
		var imageData = ctx.getImageData(wh * ((Count + maxCou-1) % maxCou), hh * (((Count + maxCou-1) / maxCou - 1)|0), wh, hh);
		context.putImageData(imageData, 0, 0);
		VL_IMArt(subCanvasS, ansCanvasS+Count, LPalette, pieceImgSize, ansScale, mode);
		Count++;
		if(maxCou*maxCou >= Count && !stop){
			setTimeout(function(){
				VL_Cut(Count)
			},8000);
		}
	}
}