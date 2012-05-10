var utils = module.exports = function(){};

utils.intToBytes = function (intToConvert){
	console.log("In unfinished method : intToBytes");
}


utils.intToHexStr = function (intToConvert){
	// This should be stable, need to avoid object creation here, later
	var hexStr = "0x" + new Number(intToConvert).toString(16);
	return hexStr;
}

utils.bytesToInt = function (byteArray){
	// Not sure this works as intended
	var bytesAsString = new Buffer(byteArray).toString();
	return parseInt(bytesAsString);
}

utils.strToBytes = function (strToConvert){
	console.log("In unfinished method : strToBytes" );
}

utils.bytesToStr = function (byteArray){
	// This should be okay too, also need to avoid object creation later.
	return new Buffer(byteArray).toString();
}