//document.getElementById('main-heading-span').style.color = 'green';
// var script = document.createElement("script");
// script.innerHTML = "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-P5JF4WV');";
// document.head.appendChild(script);

var banner = './assets/images/banner.jpg';
var gallery1 = './assets/images/bedroom.webp';
var gallery2 = './assets/images/living.webp';
var gallery3 = './assets/images/kitchen.jpg';
var imgLogo = './assets/images/logo.png';
var imgLogo2 = '';
//var demo = './assets/images/';

var darkColor = '#bd9234';
var lightColor = '#f6f2e3';

var propSpec = '2 & 3 BHK';
var propPossesion = '2024';
var propStartPrice = '1.09 Cr* Onwards';

var config1 = '2 BHK';
var area1 = '622 - 730 Sqft';
var propPriceRange1 = '1.09 - 1.17 Cr*';

var config2 = '3 BHK';
var area2 = '873 - 980 Sqft';
var propPriceRange2 = '1.52 - 1.67 Cr*';

var propName = 'Latest website';
var propNameSection = 'TULIP';
var firstName = '';
var LastName = '';
var propLocation = 'Balkum, Thane West';
var builderDesc = `Dosti Tulip is a premium residential address nestled within the magnificent township of Dosti West County in Thane. 
Its lavish towers house exquisite 2 and 3 BHK dream homes, stunning interiors, and beautiful greens! Amenities such 
as a Zumba room, game room, pool deck, sports courts, and party lawns offer experiences for every desire and mood. 
You can also look forward to a creche, library, a kid's school, and more facilities within the township premises.
Moreover, the alluring locale of Balkum features lush parks and pristine lakes on the one hand and some of the finest
schools, hospitals, restaurants, and malls on the other. The property is also close to the Eastern Express Highway (3 mins)
and the Thane Railway Station (20 mins) - thus offering an easy commute to Mulund, Airoli, Powai, Ghansoli, BKC, and Vashi
as well. Overall, Dosti Tulip offers a lifestyle where its usual for that wild countryside breeze to blow by, gently ruffling your hair as you walk by the property.`;

var propCostSheet = 'https://api.whatsapp.com/send?phone=919900429064&text=Send%20me%20the%20cost%20sheet%20for';
var propBrochure = 'https://api.whatsapp.com/send?phone=919900429064&text=Send%20me%20the%20brochure%20of';

var metaTitle = 'Dosti Tulip';
var metaKeyword = 'Dosti Tulip';
var metaDesc = 'Dosti Tulip Balkum, Thane West. Best location 2 & 3 BHK flats loaded with luxury amenities by Dosti Group at a reasonable price. Contact us to get brochure or know more.';

document.title = propName;
document.querySelector('meta[name="title"]').setAttribute("content", metaTitle);
document.querySelector('meta[name="keyword"]').setAttribute("content", metaKeyword);
document.querySelector('meta[name="description"]').setAttribute("content", metaDesc);

document.getElementById('imgLogo').src = imgLogo;
//
document.getElementById('propBanner').src = banner;
document.getElementById('galleryImg1').src = gallery1;
document.getElementById('galleryImg2').src = gallery2;
document.getElementById('galleryImg3').src = gallery3;

document.getElementById('propNameSection1').innerHTML = propNameSection;
document.getElementById('propNameSection2').innerHTML = propNameSection;
document.getElementById('propConfig').innerHTML = propSpec;
//document.getElementById('propertyPossesion').innerHTML = '('+propPossesion+')';
//document.getElementById('spanpropertyPossesion').innerHTML = ': '+propPossesion;
document.getElementById('propPrice').innerHTML = propStartPrice;
document.getElementById('propLocation').innerHTML = propLocation;
document.getElementById('propPosession').innerHTML = propPossesion;
if (imgLogo2 == '') {
    document.getElementById('imgLogo2').src = imgLogo;
}
else {
    document.getElementById('imgLogo2').src = imgLogo2;
}

document.getElementById('builderDesc').innerHTML = builderDesc;

if (config2 == '') {
    document.getElementById('propConfiguration2').style.display = 'none';
}

document.getElementById('propConfig1').innerHTML = config1;
document.getElementById('propArea1').innerHTML = '(' + area1 + ')';
document.getElementById('propPriceRange1').innerHTML = '₹ ' + propPriceRange1;

document.getElementById('propConfig2').innerHTML = config2;
document.getElementById('propArea2').innerHTML = '(' + area2 + ')';
document.getElementById('propPriceRange2').innerHTML = '₹ ' + propPriceRange2;

document.getElementById('btnCostSheet1').setAttribute('href', propCostSheet + ' ' + propName);
document.getElementById('btnCostSheet2').setAttribute('href', propCostSheet + ' ' + propName);
document.getElementById('btnFloorPlan').setAttribute('href', propBrochure + ' ' + propName);




var berninis = document.querySelectorAll('.darkColor');
var darkBg = document.querySelectorAll('.darkBgColor');
var lightBg = document.querySelectorAll('.lightBgColor');


for (var i = 0; i < berninis.length; i++) {
    berninis[i].style.color = darkColor;
}

for (var i = 0; i < darkBg.length; i++) {
    darkBg[i].style.backgroundColor = darkColor;
}

for (var i = 0; i < lightBg.length; i++) {
    lightBg[i].style.backgroundColor = lightColor;
}


var paths = document.querySelectorAll("path");

for (var i = 0; i < paths.length; ++i) {
    paths[i].setAttribute('style', 'fill:' + darkColor);
    paths[i].setAttribute('style', 'stroke:' + darkColor);
}

var circle = document.querySelectorAll("circle");

for (var i = 0; i < circle.length; ++i) {
    circle[i].setAttribute('style', 'stroke:' + darkColor);
}
var rect = document.querySelectorAll("rect");

for (var i = 0; i < rect.length; ++i) {
    rect[i].setAttribute('style', 'stroke:' + darkColor);
}
var line = document.querySelectorAll("line");

for (var i = 0; i < line.length; ++i) {
    line[i].setAttribute('style', 'stroke:' + darkColor);
}

var polyline = document.querySelectorAll("polyline");

for (var i = 0; i < polyline.length; ++i) {
    polyline[i].setAttribute('style', 'stroke:' + darkColor);
}


var topBottomBorder = document.querySelectorAll('.topBottomBorder');

for (var i = 0; i < topBottomBorder.length; i++) {
    topBottomBorder[i].style.borderTop = '4px solid ' + darkColor;
    topBottomBorder[i].style.borderBottom = '4px solid ' + darkColor;
}

var border = document.querySelectorAll('.darkBorder');

for (var i = 0; i < border.length; i++) {
    border[i].style.border = '1px solid ' + darkColor;

}

document.getElementById('propFloor').style.borderTop = '3px solid ' + darkColor;



// var noscript = document.createElement('noscript');
// var iframe = document.createElement('iframe');
// iframe.setAttribute('src', "https://www.googletagmanager.com/ns.html?id=GTM-P5JF4WV");
// iframe.setAttribute("height", "0");
// iframe.setAttribute("width", "0");
// iframe.setAttribute("style", "display:none;visibility:hidden");
// noscript.appendChild(iframe);
// document.body.appendChild(noscript);