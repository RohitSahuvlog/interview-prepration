
var MyCalendarTwo = function () {
    this.calendar = [];
    this.overlaps = [];
};

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendarTwo.prototype.book = function (start, end) {
    for (let i = 0; i < this.overlaps.length; i++) {
        if (start < this.overlaps[i][1] && end > this.overlaps[i][0]) {
            return false;
        }
    }

    for (let i = 0; i < this.calendar.length; i++) {
        if (start < this.calendar[i][1] && end > this.calendar[i][0]) {
            this.overlaps.push([Math.max(start, this.calendar[i][0]), Math.min(end, this.calendar[i][1])]);
        }
    }

    this.calendar.push([start, end]);
    return true;

};

/**
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = new MyCalendarTwo()
 * var param_1 = obj.book(start,end)
 */
// Input
// ["MyCalendarTwo", "book", "book", "book", "book", "book", "book"]
// [[], [10, 20], [50, 60], [10, 40], [5, 15], [5, 10], [25, 55]]
// Output
// [null, true, true, true, false, true, true]

// run the tests
var obj = new MyCalendarTwo();
console.log(obj.book(10, 20)); // true
console.log(obj.book(50, 60)); // true
console.log(obj.book(10, 40)); // true
console.log(obj.book(5, 15)); // false
console.log(obj.book(5, 10)); // true
console.log(obj.book(25, 55)); // true
// Time complexity: O(n^2) where n is the number of events
// why is it o(n^2) because we are iterating over the calendar and overlaps array for each event