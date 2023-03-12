
window.onload = function()
{
let maxBottom = 900;
let day = (new Date()).getDate();
let currentBottom = 900 -  day / 30 * maxBottom;
document.getElementById("value").style.bottom = currentBottom + 'px';
};
