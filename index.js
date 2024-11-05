let Rehnschool = {
    name: "Rehnschool",
    students: [],
    teachers: [],
    address: "Rehnvägen",
    zipcode: "1337",

    // Lägg till en lärare till skolan
    addTeacher: function(teacher) {
        this.teachers.push(teacher);
    },

    // Lägg till en elev till skolan
    addStudent: function(student) {
        this.students.push(student);
    }
};

let svenska = {
    name: "svenska",
    students: [],
    teachers: [],

    // Lägg till en elev till ämnet
    enlistToSubject: function(student) {
        this.students.push(student.name);  // Lägg till studentens namn till ämnets studentlista
        student.subject.push(this);        // Lägg till ämnet i studentens ämneslista
    }
};

let engelska = {
    name: "engelska",
    students: [],
    teachers: [],
    enlistToSubject: function(student) {
        this.students.push(student.name);
        student.subject.push(this);
    }
};

let matematik = {
    name: "matematik",
    students: [],
    teachers: [],
    enlistToSubject: function(student) {
        this.students.push(student.name);
        student.subject.push(this);
    }
};

let studentsAtSchool = {
    student1: {
        name: "Jerry",
        age: 27,
        gender: "Man",
        subject: []
    },
    student2: {
        name: "Ruben",
        age: 22,
        gender: "Man",
        subject: []
    },
    student3: {
        name: "Sebbe",
        age: 19,
        gender: "Man",
        subject: []
    },
    student4: {
        name: "Måns",
        age: 23,
        gender: "Man",
        subject: []
    },
    student5: {
        name: "Diana",
        age: 30,
        gender: "Kvinna",
        subject: []
    },

    // Lägg till ämne för en specifik student
    addSubject: function(student, subject) {
        student.subject.push(subject);       // Lägg till ämnet till studentens ämneslista
        subject.students.push(student.name); // Lägg till studentens namn i ämnets lista
    }
};

let teachersAtSchool = {
    teacher1: {
        name: "Niklas",
        subject: []
    },
    teacher2: {
        name: "Lars",
        subject: []
    },

    // Lägg till ämne för en specifik lärare
    addSubject: function(teacher, subject) {
        teacher.subject.push(subject);       // Lägg till ämnet till lärarens ämneslista
        subject.teachers.push(teacher.name); // Lägg till lärarens namn i ämnets lista
    }
};

// Exempel på användning av metoderna

// Lägg till lärare och elever till skolan
Rehnschool.addTeacher(teachersAtSchool.teacher1);
Rehnschool.addStudent(studentsAtSchool.student1);

// Lägg till ämnen för lärare och elever
teachersAtSchool.addSubject(teachersAtSchool.teacher1, svenska);
studentsAtSchool.addSubject(studentsAtSchool.student1, engelska);

// Registrera en elev till ett ämne
svenska.enlistToSubject(studentsAtSchool.student1);

// Visa resultat
console.log(Rehnschool);
console.log(svenska);
console.log(teachersAtSchool.teacher1);
console.log(studentsAtSchool.student1);

