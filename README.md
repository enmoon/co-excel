Excel.js
========

Native node.js Excel file ES2015 Generator Funtion parser. Only supports xlsx for now.

Install
=======
    npm install co-excel

Use
====
    var excel = require('co-excel');

    var handle = function *(next) {
    	var uri = 'xxxx.xlsx';
    	var json = yield excel(uri);

    	console.log(json);
    };

Test
=====
Run `npm test`

MIT License.

