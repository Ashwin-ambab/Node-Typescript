var person = /** @class */ (function () {
    function person(name, lastname, dob) {
        this.firstname = name;
        this.lastname = lastname;
        this.dob = dob;
    }
    person.prototype.getfullname = function () {
        return this.firstname + " " + this.lastname;
    };
    person.prototype.getYear = function () {
        var date = new Date();
        var ageDiff = date.getFullYear() - this.dob;
        // var ageDate = new Date(ageDiff);
        // console.log(Math.abs(ageDate.getUTCFullYear() - 1970));
        console.log(ageDiff);
        return ageDiff;
    };
    return person;
}());
var person1 = new person("ashwin", "gupta", 1996);
var name1 = person1.getfullname();
person1.getYear();
console.log(name1);
