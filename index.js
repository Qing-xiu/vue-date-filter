(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(['exports'], factory);
	} else if (typeof exports !== "undefined") {
		factory(exports);
	} else {
		var mod = {
			exports: {}
		};
		factory(mod.exports);
		global.es6Index = mod.exports;
	}
})(this, function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
		return typeof obj;
	} : function (obj) {
		return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
	};

	exports.default = {
		install: function install(Vue) {
			var padStart = function padStart(value, length, char) {
				value = value + '';
				var len = length - value.length;

				if (len <= 0) {
					return value;
				} else {

					return Array(len + 1).join(char) + value;
				}
			};

			Vue.filter('date', function (date, format) {
				var _date = date;
				var splitArr = format.split(/(YYYY|MM|DD|hh|mm|ss)+/);

				if ((typeof date === 'undefined' ? 'undefined' : _typeof(date)) != 'object') {
					_date = new Date(date);
				}

				return splitArr.map(function (item) {

					if (item == 'YYYY') {
						return _date.getFullYear();
					}

					if (item == 'MM') {
						return padStart(_date.getMonth() + 1, 2, 0);
					}

					if (item == 'DD') {
						return padStart(_date.getDate(), 2, 0);
					}

					if (item == 'hh') {
						return padStart(_date.getHours(), 2, 0);
					}
					if (item == 'mm') {
						return padStart(_date.getMinutes(), 2, 0);
					}
					if (item == 'ss') {
						return padStart(_date.getSeconds(), 2, 0);
					}

					return item;
				}).join('');
			});
		}
	};
});
