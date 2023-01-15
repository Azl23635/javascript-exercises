const findTheOldest = function (arr) {
  const currYear = parseInt(
    new Date(Date.now()).toISOString().substring(0, 4)
  );
  let currYearOfDeath = 0;
  let oldest = 0;

  const output = arr.reduce((accumulator, curr) => {
    if (curr.yearOfDeath) {
      //If 'yearOfDeath' is defined
      currYearOfDeath = curr.yearOfDeath;
    } else {
      currYearOfDeath = currYear; //Else current year is 'yearOfDeath'
    }
    if (currYearOfDeath - curr.yearOfBirth > oldest) {
      //Compare current person's age to oldest
      oldest = currYearOfDeath - curr.yearOfBirth;
      accumulator = curr;
    }
    return accumulator;
  }, {}); /****** Must give second argument, else reduce starts from the second element ******/

  return output;
};

// Do not edit below this line
module.exports = findTheOldest;
