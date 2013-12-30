/**
 * Knockout Range extension
 *
 * @author Sevil YILMAZ - @sevilyilmaz
 * @method numeric
 * @desc Highly inspired from knockoutjs numeric extension.
 {@link http://knockoutjs.com/documentation/extenders.html#live_example_1_forcing_input_to_be_numeric}
 * @param {} target
 * @param {object} options min and max values
 * @example
 ko.observable().extend({ range: { min: 0, max: 10 } })
 * @return result
 */
ko.extenders.range = function (target, options) {
    var result = ko.computed({
        read: target,
        write: function (newValue) {
            var current = target(),
                newValueAsNum = isNaN(newValue) ? 0 : parseFloat(+newValue);

            if (typeof options.min === 'number' && newValueAsNum < options.min) {
                newValueAsNum = options.min;
            } else if (typeof options.max === 'number' && newValueAsNum > options.max) {
                newValueAsNum = options.max;
            }

            if (newValueAsNum !== current) {
                target(newValueAsNum);
            } else {
                if (newValue !== current) {
                    target.notifySubscribers(newValueAsNum);
                }
            }
        }
    });
    
    result(target());

    return result;
};