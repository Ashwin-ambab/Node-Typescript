class person {
  firstname: string;
  lastname: string;
  dob: number;

  constructor(name: string, lastname: string, dob: number) {
    this.firstname = name;
    this.lastname = lastname;
    this.dob = dob;
  }

  getfullname(): void {
    console.log(this.firstname + " " + this.lastname);
  }

  getYear(): number {
    var date = new Date();
    var ageDiff = date.getFullYear() - this.dob;
    // var ageDate = new Date(ageDiff);
    // console.log(Math.abs(ageDate.getUTCFullYear() - 1970));
    console.log(ageDiff);
    return ageDiff;
    
  }
}

let person1 = new person("ashwin", "gupta",1996);
person1.getfullname();
person1.getYear();
