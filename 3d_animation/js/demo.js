var oLi =Array.prototype.slice.call(document.getElementsByTagName('li'));
oLi.forEach(function(ele, index) {
    ele.onmouseenter = (function(e) {
        return function(e) {
            ele.className = 'in' + getDirection(ele, e);
        }
    }());
    ele.onmouseleave = (function(e) {
        return function(e) {
            ele.className = 'out' +  getDirection(ele, e);
        }
    }());
})

function getDirection(dom, e) {
    var class_name = '',
        X = dom.offsetLeft,
        Y = dom.offsetTop,
        w = dom.offsetWidth,
        h = dom.offsetHeight,
        disX = getPosition(e)['positionX'] - X - w / 2,
        disY = getPosition(e)['positionY'] - Y - h / 2,
        deg = Math.atan2(disY, disX) / (2 * Math.PI) * 360;
    if(deg > -45 && deg <= 45) {
        class_name = '-right';
    }else if(deg > 45 && deg <= 135) {
        class_name = '-bottom';
    }else if((deg > 135 && deg <= 180) || (deg > -180 && deg <= -135)) {
        class_name = '-left';
    }else {
        class_name = '-top';
    }
    return class_name;
}

function getPosition(e) {
    e = e || window.event;
    if(e.pageX || e.pageY) {
        return {positionX: e.pageX, positionY: e.pageY}
    }else {
        return {
            positionX: e.clientX + document.documentElement.scrollLeft + document.body.scrollLeft,
            positionY: e.clientY + document.documentElement.scrollTop + document.body.scrollTop
        }
    }
}


