
exports.min = function min (array) {
	if (array === undefined || array.length === 0) {
        return 0;
    } else {
    	return Math.min(...array);
    }
  	
}

exports.max = function max (array) {
	if (array === undefined || array.length === 0) {
        return 0;
    } else {
    	return Math.max(...array);
    }
}

exports.avg = function avg (array) {
	let sum = 0;
	if (array === undefined || array.length === 0) {
        return 0;
    } else {
    	for(let i = 0; i < array.length; i++ ){
    		sum += array[i];
    	}
    	return sum / array.length;
    }
}
