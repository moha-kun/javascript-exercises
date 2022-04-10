const findTheOldest = function (people) {
    return people.reduce((currentPerson, nextPerson) => {
        if (!currentPerson.yearOfDeath) currentPerson.yearOfDeath = new Date().getFullYear();
        if (!nextPerson.yearOfDeath) nextPerson.yearOfDeath = new Date().getFullYear();
        return (currentPerson.yearOfDeath - currentPerson.yearOfBirth) > (nextPerson.yearOfDeath - nextPerson.yearOfBirth) ? currentPerson : nextPerson;
    }, people[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
