const Sequelize=require('sequelize')
const defineModel=require('../define')

const Teacher=defineModel('Teacher',{
    Tno:{
        type:Sequelize.INTEGER,
        primaryKey:true
    },
    Tname:Sequelize.CHAR(4),
    Tsex:Sequelize.CHAR(2),
    Tbirthday:{
        type:Sequelize.DATE,
        allowNull:true
    },
    Prof:{
        type:Sequelize.CHAR(6),
        allowNull:true
    },
    Depart:Sequelize.STRING(10)
})
Teacher.sync();//如果表存在则不重新创建
module.exports=Teacher