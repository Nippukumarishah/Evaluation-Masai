function Student(name, roll_no, className, section, marks_of_5_subjects) {
    this.name = name;
    this.roll_no = roll_no;
    this.class = className;
    this.section = section;
    this.marks_of_5_subjects = marks_of_5_subjects;
    this.printTop3Subjects = function () {
        let subjects = Object.keys(this.marks_of_5_subjects);
        let marks = Object.values(this.marks_of_5_subjects);
        let sortedSubjects = subjects.sort((a, b) => this.marks_of_5_subjects[b] - this.marks_of_5_subjects[a]);
        console.log("Top Three Subjects:");
        for (let i = 0; i < 3; i++) {
            console.log(`${i + 1}. ${sortedSubjects[i]} - ${marks[subjects.indexOf(sortedSubjects[i])]}`);
        }
    };
    this.printReportCard = function () {
        console.log("+--------------------+");
        console.log("|     REPORT CARD    |");
        console.log("+--------------------+");
        console.log(`| Name     - ${this.name}`);
        console.log(`| Roll no. - ${this.roll_no}`);
        console.log(`| Class    - ${this.class}`);
        console.log(`| Section  - ${this.section}`);
        for (const subject in this.marks_of_5_subjects) {
            console.log(`| ${subject}  - ${this.marks_of_5_subjects[subject]}`);
        }
        let totalMarks = Object.values(this.marks_of_5_subjects).reduce((acc, mark) => acc + mark, 0);
        let percentage = (totalMarks / (5 * 100)) * 100;
        console.log(`| Percentage - ${percentage.toFixed(1)} %`);
        console.log("+--------------------+");
    };
}
// Example usage
let student1 = new Student("Huzaifa", 16, "X", "A", {
    science: 73,
    maths: 75,
    social_science: 79,
    english: 80,
    hindi: 67
});
let student2 = new Student("Samyak", 16, "X", "B",{
    science: 56,
    maths: 60,
    social_science: 70,
    english: 78,
    hindi: 79
});

// Print top three subjects
student1.printTop3Subjects();

// Print report card
student1.printReportCard();
