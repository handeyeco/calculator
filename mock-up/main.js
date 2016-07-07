var calcApp = {
  baseNumber: "",
  currNumber: "",
  prevNumber: "",
  operator: null,

  addDigit: function(digit) {
    if (this.currNumber.length < 9) {
      this.prevNumber = this.currNumber;
      this.currNumber = this.currNumber.concat(digit)
        .replace(/^0+(\d+.?\d*)/, "$1");
    }
  },

  clearer: function(operation) {
    if (operation === "ALL") {
      this.prevNumber = "";
      this.currNumber = "";
      this.baseNumber = "";
      this.operator = null;
    } else if (operation === "LAST" && this.prevNumber) {
      this.currNumber = this.prevNumber;
      this.prevNumber = "";
    } else if (operation === "LAST" && this.currNumber) {
      this.currNumber = this.currNumber.substring(0, this.currNumber.length - 1);
    }
  },

  unary: function(operation) {
    if (this.currNumber === "") {
      this.currNumber = this.baseNumber;
      this.baseNumber = "";
    }

    if (+this.currNumber) {
      this.prevNumber = this.currNumber;

      if (operation === "SIGN") {
        this.currNumber = this.currNumber[0] === "-" ?
          this.currNumber.substr(1) :
          "-".concat(this.currNumber);
      } else if (operation === "PERC") {
        this.currNumber = this.currNumber / 100;
      }
    }
  },

  reducer: function(operation) {
    if (this.baseNumber === "" && this.currNumber !== "") {
      this.baseNumber = this.currNumber;
      this.currNumber = "";
      this.operator = operation;
    } else if (this.baseNumber !== "" && this.currNumber !== "" && this.operator) {
      var base = +this.baseNumber,
        curr = +this.currNumber,
        result;

      switch (this.operator) {
        case "DIVIDE":
          result = Math.div(base, curr);
          break;
        case "TIMES":
          result = Math.mul(base, curr);
          break;
        case "SUB":
          result = Math.sub(base, curr);
          break;
        case "ADD":
          result = Math.add(base, curr);
          break;
      }

      if (this.operator === "EQUAL") {
        console.log("in");
        this.baseNumber = "";
        this.currNumber = result + "";
        this.operator = null;
      } else {
        this.baseNumber = result + "";
        this.currNumber = "";
        this.operator = operation;
      }
    }
  }
};

jQuery.noConflict();
(function($) {
  $(function() {
    var display = $(".display");

    function updateDisplay() {
      if (calcApp.currNumber === "") {
        display.text(calcApp.baseNumber);
      } else {
        display.text(calcApp.currNumber);
      }
    }

    $(".number").click(function() {
      var digit = $(this).val();
      calcApp.addDigit(digit);
      updateDisplay();
    });

    $(".unary").click(function() {
      var operation = $(this).val();
      calcApp.unary(operation);
      updateDisplay();
    });

    $(".clear").click(function() {
      var operation = $(this).val();
      calcApp.clearer(operation);
      updateDisplay();
    });

    $(".binary").click(function() {
      var operation = $(this).val();
      calcApp.reducer(operation);
      updateDisplay();
    });

    $(".equal").click(function() {
      var operation = $(this).val();
      calcApp.reducer(operation);
      updateDisplay();
    });

  });
})(jQuery);
