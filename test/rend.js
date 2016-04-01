/**
 * Created by enmoon on 16-4-1.
 */

var excel = require('co-excel');

var handelr = function *(next) {
	var uri = 'xxxx.xlsx';
	var json = yield excel(uri);

	console.log(json);
};
