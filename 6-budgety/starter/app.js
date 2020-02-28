/*
 * TODO list
 * 1. Add event handler
 * 2. Get input values
 * 3. Add new item to our data structure
 * 4. Add new item to UI
 * 5. Calculate budget
 * 6. Update UI
 */

/*
 * Structuring code with modules has benefits
 * Keeps code cleanly separate and organized
 * Encapsulate some data, while exposing other data
 */

/*
 * Split TODO list based on concerns:
 * UI Module:
 * Get input values
 * Add new items to UI
 * Update UI
 * 
 * Data Module:
 * Add new item to data structure
 * Calculate budget
 * 
 * Controller Module:
 * Add event handler
 */

/*
 * Module pattern in Javascript uses closures and IIFEs
 */
var budgetController = (function() {
    var x = 23;

    var add = function(a) {
        return x + a;
    }

    return {
        publicTest: function(b) {
            console.log(add(b));
        }
    }
})();