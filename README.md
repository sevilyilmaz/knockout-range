#Knockout Range
Knockout-range extension is highly inspired from Knockoutjs's numeric extension. It provides numeric range for HTML input elements.

## Example
    var viewModel = {
        quantity: ko.observable().extend({range: {min: 0, max: 10}})
    };

[jsFiddle example](http://jsfiddle.net/sevilyilmaz/Ws3Ec/)