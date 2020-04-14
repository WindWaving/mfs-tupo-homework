const Sequelize=require('sequelize')
const defineModel=require('../define')

//创建学生表
const Student=defineModel('Student',{
    Sno:{
        type:Sequelize.INTEGER,
        primaryKey:true
    },
    Sname:Sequelize.CHAR(8),
    Ssex:Sequelize.CHAR(2),
    Sbirthday:{
        type:Sequelize.DATE,
        allowNull:true,
    },
    Class:{
        type:Sequelize.CHAR(5),
        allowNull:true
    }
})

Student.sync();//如果表存在则不重新创建
module.exports=Student