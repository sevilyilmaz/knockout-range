describe("Knockout Range extension", function() {
    viewModel = function() {
      this.numericValue = ko.observable().extend({range: { min: 5, max: 10 }});
      this.getValue = function() {
        return this.numericValue();
      }
    };

    beforeEach(function() {
      instance = new viewModel();
    });
    
    it("should find viewModel",function(){
      expect(instance).toBeDefined();
    });

    it("should be integer", function() {
      expect(instance.getValue()).toMatch(/\d{1,}/);
    });

    it("sets value that greater from max value to max value", function() {
      instance.numericValue(100)
      expect(instance.getValue()).toBe(10);
    });

    it("sets value that lower from min value to min value", function() {
      instance.numericValue(4)
      expect(instance.getValue()).toBe(5);
    });

    it("removes string and gives min value", function() {
      instance.numericValue('lorem')
      expect(instance.getValue()).toBe(5);
    });

    it("removes negative values and gives min value", function() {
      instance.numericValue(-3)
      expect(instance.getValue()).toBe(5);
    });
});