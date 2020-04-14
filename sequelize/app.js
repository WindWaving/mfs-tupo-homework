// const Koa = require('koa')
// const app = new Koa()

const Student = require('./models/Student')
const Teacher = require('./models/Teacher')
const Course = require('./models/Course')
const Score = require('./models/Score')

var info_stu = [
    [108, '曾华', '男', '1977-09-01', 95033],
    [105, '匡明', '男', '1975-10-02', 95031],
    [107, '王丽', '女', '1976-01-23', 95033],
    [101, '李军', '男', '1976-02-20', 95033],
    [109, '王芳', '女', '1975-02-10', 95031],
    [103, '陆君', '男', '1974-06-03', 95031],
];
var info_cour = [
    [105, '计算机导论', 825],
    [245, '操作系统', 804],
    [166, '数字电路', 856],
    [888, '高等数学', 831],
];
var info_sco = [
    [103, 245, 86],
    [105, 245, 75],
    [109, 245, 68],
    [103, 105, 92],
    [105, 105, 88],
    [101, 105, 64],
    [107, 105, 91],
    [108, 105, 78],
    [101, 166, 85],
    [107, 166, 79],
    [108, 166, 81]
];
var info_tea = [
    [804, '李诚', '男', '1958-12-02', '副教授', '计算机系'],
    [856, '张旭', '男', '1969-03-12', '讲师', '电子工程系'],
    [825, '王萍', '女', '1972-05-05', '助教', '计算机系'],
    [831, '刘冰', '女', '1977-08-14', '助教', '电子工程系'],
];
(async () => {
    try {
        for (let i = 0; i < info_stu.length; ++i) {
            await Student.create({
                Sno: info_stu[i][0],
                Sname: info_stu[i][1],
                Ssex: info_stu[i][2],
                Sbirthday: info_stu[i][3],
                Class: info_stu[i][4]
            })
        }
    } catch (err) {
        console.log('student failed' + err);
    }
})();
(async () => {
    try {
        for (let i = 0; i < info_tea.length; ++i) {
            await Teacher.create({
                Tno: info_tea[i][0],
                Tname: info_tea[i][1],
                Tsex: info_tea[i][2],
                Tbirthday: info_tea[i][3],
                Prof: info_tea[i][4],
                Depart: info_tea[i][5]
            })
        }
    } catch (err) {
        console.log('teacher failed:' + err)
    }

})();

(async () => {
    try {
        for (let i = 0; i < info_cour.length; ++i) {
            await Course.create({
                Cno: info_cour[i][0],
                Cname: info_cour[i][1],
                Tno: info_cour[i][2]
            })
        }
    } catch (err) {
        console.log('course failed:' + err)
    }

})();

(async () => {
    try {
        for (let i = 0; i < info_sco.length; ++i) {
            await Score.create({
                Sno: info_sco[i][0],
                Cno: info_sco[i][1],
                Degree: info_cour[i][2]
            })
        }
    } catch (err) {
        console.log('score failed:' + err);
    }

})();
