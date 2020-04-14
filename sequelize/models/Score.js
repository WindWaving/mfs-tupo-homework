const Sequelize=require('sequelize')
const defineModel=require('../define')
const Student=require('./Student')
const Course=require('./Course')

const Score=defineModel('Score',{
    Sno:{
        type:Sequelize.INTEGER,
        //foreignKey
        // references: {
        //     model: Student,
        //     key: 'Sno'
        // }
    },
    Cno:{
        type:Sequelize.INTEGER,
        //foreignKey
        // references: {
        //     model: Course,
        //     key: 'Cno'
        // }
    },
    Degree:{
        type:Sequelize.DECIMAL(4,1),
        allowNull:true
    }
})
Score.belongsTo(Student,{foreignKey:'Sno'});
Score.belongsTo(Course,{foreignKey:'Cno'});//这种方式可以设置约束，默认ondelete=set null,onupdate=cascade
Score.sync();//如果表存在则不重新创建
module.exports=Score