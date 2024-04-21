function chooseColor(palette, pixels, hw, type = 0) {
	var PLL = palette.length,
		CodePalette = [],
		CodePaletteSub1 = [],
		CodePaletteSub2 = [],
		CodePaletteSub3 = [],
		rgb;
	switch (type) {
		case 1:
		case 3:
			for (var i = 0; i < PLL; i++) {
				rgb = convertToRGB(palette[i]);
				CodePalette.push(rgbToHSV(rgb.r,rgb.g,rgb.b));
			}
		break;
		case 2:
			for (var i = 0; i < PLL; i++) {
				rgb = convertToRGB(palette[i]);
				CodePalette.push(rgbToXYZ(rgb.r,rgb.g,rgb.b));
			}
		break;
		case 4:
		case 5:
			for (var i = 0; i < PLL; i++) {
				rgb = convertToRGB(palette[i]);
				CodePalette.push(rgbToLab(rgb.r,rgb.g,rgb.b));
			}
		break;
		case 6:
			for (var i = 0; i < PLL; i++) {
				rgb = convertToRGB(palette[i]);
				CodePalette.push(rgb);
				CodePaletteSub1.push(rgbToXYZ(rgb.r,rgb.g,rgb.b));
			}
		break;
		case 7:
			for (var i = 0; i < PLL; i++) {
				rgb = convertToRGB(palette[i]);
				CodePalette.push(rgb);
				CodePaletteSub1.push(rgbToXYZ(rgb.r,rgb.g,rgb.b));
				CodePaletteSub2.push(rgbToLab(rgb.r,rgb.g,rgb.b));
			}
		break;
		case 8:
			for (var i = 0; i < PLL; i++) {
				rgb = convertToRGB(palette[i]);
				CodePalette.push(rgbToHSV(rgb.r,rgb.g,rgb.b));
				CodePaletteSub1.push(rgbToXYZ(rgb.r,rgb.g,rgb.b));
				CodePaletteSub2.push(rgbToLab(rgb.r,rgb.g,rgb.b));
			}
		break;
		case 9:
			for (var i = 0; i < PLL; i++) {
				rgb = convertToRGB(palette[i]);
				CodePalette.push(rgb);
				CodePaletteSub1.push(rgbToXYZ(rgb.r,rgb.g,rgb.b));
				CodePaletteSub2.push(rgbToLab(rgb.r,rgb.g,rgb.b));
				CodePaletteSub3.push(rgbToHSV(rgb.r,rgb.g,rgb.b));
			}
		break;
		default:
			for (var i = 0; i < PLL; i++) {
				CodePalette.push(convertToRGB(palette[i]));
			}
	}
	for (var y = 0; y < hw.h; ++y) {
		for (var x = 0; x < hw.w; ++x) {
			var base = (y * hw.w + x) * 4;
			var tmpRGB = convertToRGB(
				ciedeDistance(palette, CodePalette, {
					r: pixels[base],
					g: pixels[base + 1],
					b: pixels[base + 2]
				}, type, CodePaletteSub1, CodePaletteSub2, CodePaletteSub3)
			);
			pixels[base] = tmpRGB.r;
			pixels[base + 1] = tmpRGB.g;
			pixels[base + 2] = tmpRGB.b;
			pixels[base + 3] = 255;
		}
	}
	return pixels;
}
function ciedeDistance(palette, CodePalette, rgb, type = 0, CodePaletteSub1 = [], CodePaletteSub2 = [], CodePaletteSub3 = []) {
	var delta = Number.MAX_SAFE_INTEGER,
		PM = palette.length,
		color, color2, p, d ,d2, d3, d4;
	switch (type) {
		case 1:
			var [h,s,v] = rgbToHSV(rgb.r,rgb.g,rgb.b);
			for (var i = 0; i < PM; i++) {
				p = palette[i];
				d = calcHSVdelta(h,s,v, ...CodePalette[i]);
				if (d < delta) {
					color = p;
					delta = d;
				}
			}
		break;
		case 2:
			var [x,y,z] = rgbToXYZ(rgb.r,rgb.g,rgb.b);
			for (var i = 0; i < PM; i++) {
				p = palette[i];
				d = cie76(x,y,z, ...CodePalette[i]);
				if (d < delta) {
					color = p;
					delta = d;
				}
			}
		break;
		case 3:
			var [h,s,v] = rgbToHSV(rgb.r,rgb.g,rgb.b);
			for (var i = 0; i < PM; i++) {
				p = palette[i];
				d = coneHSVdelta(h,s,v, ...CodePalette[i]);
				if (d < delta) {
					color = p;
					delta = d;
				}
			}
		break;
		case 4:
			var [l,a,b] = rgbToLab(rgb.r,rgb.g,rgb.b);
			for (var i = 0; i < PM; i++) {
				p = palette[i];
				d = cie76(l,a,b, ...CodePalette[i]);
				if (d < delta) {
					color = p;
					delta = d;
				}
			}
		break;
		case 5:
			var [l,a,b] = rgbToLab(rgb.r,rgb.g,rgb.b);
			for (var i = 0; i < PM; i++) {
				p = palette[i];
				d = ciede2000(l,a,b, ...CodePalette[i]);
				if (d < delta) {
					color = p;
					delta = d;
				}
			}
		break;
		case 6:
			if ((rgb.r < 40 || rgb.r > 240) && rgb.g > 110 && rgb.b < 125) {
				var [x,y,z] = rgbToXYZ(rgb.r,rgb.g,rgb.b);
				for (var i = 0; i < PM; i++) {
					p = palette[i];
					d = cie76(x,y,z, ...CodePaletteSub1[i]);
					if (d < delta) {
						color = p;
						delta = d;
					}
				}
			} else {
				for (var i = 0; i < PM; i++) {
					p = palette[i];
					d = calcDelta(rgb, CodePalette[i]);
					if (d < delta) {
						color = p;
						delta = d;
					}
				}
			}
		break;
		case 7:
			if ((rgb.r < 40 || rgb.r > 240) && rgb.g > 110 && rgb.b < 125) {
				var [x,y,z] = rgbToXYZ(rgb.r,rgb.g,rgb.b);
				for (var i = 0; i < PM; i++) {
					p = palette[i];
					d = cie76(x,y,z, ...CodePaletteSub1[i]);
					if (d < delta) {
						color = p;
						delta = d;
					}
				}
			} else if (rgb.r > 200 && rgb.g > 80 && rgb.g < 140 && rgb.b > 220) {
				var [l,a,b] = rgbToLab(rgb.r,rgb.g,rgb.b);
				for (var i = 0; i < PM; i++) {
					p = palette[i];
					d = ciede2000(l,a,b, ...CodePaletteSub2[i]);
					if (d < delta) {
						color = p;
						delta = d;
					}
				}
			} else {
				for (var i = 0; i < PM; i++) {
					p = palette[i];
					d = calcDelta(rgb, CodePalette[i]);
					if (d < delta) {
						color = p;
						delta = d;
					}
				}
			}
		break;
		case 8:
			var [h,s,v] = rgbToHSV(rgb.r,rgb.g,rgb.b),
				[x,y,z] = rgbToXYZ(rgb.r,rgb.g,rgb.b),
				[l,a,b] = rgbToLab(rgb.r,rgb.g,rgb.b);
			for (var i = 0; i < PM; i++) {
				p = palette[i];
				d = calcHSVdelta(h,s,v, ...CodePalette[i]);
				d2 = cie76(x,y,z, ...CodePaletteSub1[i]);
				d3 = coneHSVdelta(h,s,v, ...CodePalette[i]);
				d4 = cie76(l,a,b, ...CodePaletteSub2[i]);
				d = (d + d2 + d3 + d4) /4;
				if (d < delta) {
					color = p;
					delta = d;
				}
			}
		break;
		case 9:
			if ((rgb.r < 40 || rgb.r > 240) && rgb.g > 110 && rgb.b < 125) {
				var [x,y,z] = rgbToXYZ(rgb.r,rgb.g,rgb.b);
				for (var i = 0; i < PM; i++) {
					p = palette[i];
					d = cie76(x,y,z, ...CodePaletteSub1[i]);
					if (d < delta) {
						color = p;
						delta = d;
					}
				}
			} else if (rgb.r > 200 && rgb.g > 80 && rgb.g < 140 && rgb.b > 220) {
				var [l,a,b] = rgbToLab(rgb.r,rgb.g,rgb.b);
				for (var i = 0; i < PM; i++) {
					p = palette[i];
					d = ciede2000(l,a,b, ...CodePaletteSub2[i]);
					if (d < delta) {
						color = p;
						delta = d;
					}
				}
			} else if (rgb.r < 50 && rgb.g > 190 && rgb.b > 250) {
				var [h,s,v] = rgbToHSV(rgb.r,rgb.g,rgb.b);
				for (var i = 0; i < PM; i++) {
					p = palette[i];
					d = coneHSVdelta(h,s,v, ...CodePaletteSub3[i]);
					if (d < delta) {
						color = p;
						delta = d;
					}
				}
			} else {
				for (var i = 0; i < PM; i++) {
					p = palette[i];
					d = calcDelta(rgb, CodePalette[i]);
					if (d < delta) {
						color = p;
						delta = d;
					}
				}
			}
		break;
		default:
			for (var i = 0; i < PM; i++) {
				p = palette[i];
				d = calcDelta(rgb, CodePalette[i]);
				if (d < delta) {
					color = p;
					delta = d;
				}
			}
	}
	return color;
}
function convertToRGB(hex) {
	const match = hex.match(/[0-9a-f]{2}/gi);
	return {
		r: parseInt(match[0], 16),
		g: parseInt(match[1], 16),
		b: parseInt(match[2], 16)
	};
}
function rgbToHSV(r,g,b) {
	r = r / 255;
	g = g / 255;
	b = b / 255;
	var max = Math.max(r, g, b),
		min = Math.min(r, g, b);
	if (max == 0) {
		return [360,0,0];
	}
	var diff = max - min,
		h = 0 ;
	switch(min) {
		case max :
			h = 0 ;
		break ;
		case r :
			h = (60 * ((b - g) / diff)) + 180;
		break ;
		case g :
			h = (60 * ((r - b) / diff)) + 300;
		break ;
		case b :
			h = (60 * ((g - r) / diff)) + 60;
		break ;
	}
	var s = max == 0 ? 0 : diff / max;
	var v = max ;
	return [h,s,v];
}
function rgbToXYZ(r,g,b) {
	r = r / 255;
	g = g / 255;
	b = b / 255;
	r = r > 0.04045 ? Math.pow(((r + 0.055) / 1.055), 2.4) : (r / 12.92);
	g = g > 0.04045 ? Math.pow(((g + 0.055) / 1.055), 2.4) : (g / 12.92);
	b = b > 0.04045 ? Math.pow(((b + 0.055) / 1.055), 2.4) : (b / 12.92);
	var x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805),
		y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722),
		z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);
	return [x, y, z];
}
function rgbToLab(r,g,b) {
	var [x, y, z] = rgbToXYZ(r,g,b);
	x = x * 100 / 95.047;
	z = y * 100 / 108.883;
	x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (4 / 29);
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (4 / 29);
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (4 / 29);
	return [
		(116 * y) - 16,
		500 * (x - y),
		200 * (y - z)
	];
}
function calcDelta(t, p) {
	var por = (p.r - t.r) * 0.3,
		pog = (p.g - t.g) * 0.59,
		pob = (p.b - t.b) * 0.11;
	return por * por + pog * pog + pob * pob;
}
function calcHSVdelta(h1,s1,v1,h2,s2,v2) {
	var h = Math.abs(h2 - h1);
	if (h > 180) {
		h = Math.abs(h - 360);
	}
	h /= 180;
	return Math.sqrt(
			Math.pow(h, 2) +
			Math.pow(s2 - s1, 2) +
			Math.pow(v2 - v1, 2)
			);
}
function cie76(L1,a1,b1, L2,a2,b2) {
	return Math.sqrt(
			Math.pow(L2 - L1, 2) +
			Math.pow(a2 - a1, 2) +
			Math.pow(b2 - b1, 2)
			);
}
function coneHSVdelta(h1,s1,v1,h2,s2,v2) {
	var iRadian = h1 / 180 * Math.PI,
		bRadian = h2 / 180 * Math.PI;
	var ix = Math.cos(iRadian) * s1,
		bx = Math.cos(bRadian) * s2,
		iy = Math.sin(iRadian) * s1,
		by = Math.sin(bRadian) * s2;
	return cie76(bx,by,v2,ix,iy,v1);
}
function ciede2000(L1,a1,b1, L2,a2,b2, kL=1,kC=1,kH=1) {
	var radianToDegree = function(radian) {return radian * (180 / Math.PI);};
	var degreeToRadian = function(degree) {return degree * (Math.PI / 180);};
	var deltaLp = L2 - L1;
	var L_ = (L1 + L2) / 2;
	var C1 = Math.sqrt(a1 * a1 + b1 * b1),
		C2 = Math.sqrt(a2 * a2 + b2 * b2);
	var C_ = (C1 + C2) / 2;
	var ap1 = a1 + (a1 / 2) *
		(1 - Math.sqrt(
			Math.pow(C_, 7) /
			(Math.pow(C_, 7) + Math.pow(25, 7))
			)
		),
		ap2 = a2 + (a2 / 2) *
		(1 - Math.sqrt(
			Math.pow(C_, 7) /
			(Math.pow(C_, 7) + Math.pow(25, 7))
			)
		);
	var Cp1 = Math.sqrt(ap1 * ap1 + b1 * b1),
		Cp2 = Math.sqrt(ap2 * ap2 + b2 * b2);
	var Cp_ = (Cp1 + Cp2) / 2,
		deltaCp = Cp2 - Cp1,
		hp1;
	if (b1 == 0 && ap1 == 0) {
		hp1 = 0;
	} else {
		hp1 = radianToDegree(Math.atan2(b1, ap1));
		if (hp1 < 0) hp1 = hp1 + 360;
	}
	var hp2;
	if (b2 == 0 && ap2 == 0) {
		hp2 = 0;
	} else {
		hp2 = radianToDegree(Math.atan2(b2, ap2));
		if (hp2 < 0) hp2 = hp2 + 360;
	}
	var deltahp;
	if (C1 == 0 || C2 == 0) {
		deltahp = 0;
	} else if (Math.abs(hp1 - hp2) <= 180) {
		deltahp = hp2 - hp1;
	} else if (hp2 <= hp1) {
		deltahp = hp2 - hp1 + 360;
	} else {
		deltahp = hp2 - hp1 - 360;
	}
	var deltaHp = 2 * Math.sqrt(Cp1 * Cp2) * Math.sin(degreeToRadian(deltahp) / 2);
	var Hp_;
	if (Math.abs(hp1 - hp2) > 180) {
		Hp_ =  (hp1 + hp2 + 360) / 2
	} else {
		Hp_ = (hp1 + hp2) / 2
	};
	var T = 1 -
		0.17 * Math.cos(degreeToRadian(Hp_ - 30)) +
		0.24 * Math.cos(degreeToRadian(2 * Hp_)) +
		0.32 * Math.cos(degreeToRadian(3 * Hp_ + 6)) -
		0.20 * Math.cos(degreeToRadian(4 * Hp_ - 63));
	var SL = 1 + (
		(0.015 * Math.pow(L_ - 50, 2)) /
		Math.sqrt(20 + Math.pow(L_ - 50, 2))
		);
	var SC = 1 + 0.045 * Cp_,
		SH = 1 + 0.015 * Cp_ * T;
	var RT = -2 *
		Math.sqrt(
			Math.pow(Cp_, 7) /
			(Math.pow(Cp_, 7) + Math.pow(25, 7))
		) *
		Math.sin(degreeToRadian(
			60 * Math.exp(-Math.pow((Hp_ - 275) / 25, 2))
		));
	return Math.sqrt(
		Math.pow(deltaLp / (kL * SL), 2) +
		Math.pow(deltaCp / (kC * SC), 2) +
		Math.pow(deltaHp / (kH * SH), 2) +
		RT * (deltaCp / (kC * SC)) * (deltaHp / (kH * SH))
		);
}