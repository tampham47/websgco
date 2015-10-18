// @capheshift.github.io 2015
// @author Tw

exports.response = function(isSuccess, data, err) {
	var status = isSuccess ? '1' : '0';
	return {
		'status': status,
		'err': err,
		'data': data || {}
	};
};
