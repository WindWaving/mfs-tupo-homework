const Sequelize=require('sequelize')
const defineModel=require('../define')
const Teacher=require('./Teacher')
// const Score=require('./Score')

const Course=defineModel('Course',{
    Cno:{
        type:Sequelize.INTEGER,
        primaryKey:true
    },
    Cname:Sequelize.STRING(10),
    Tno:{
        type:Sequelize.INTEGER,
        //外键
        // references: {
        //     model: Teacher,
        //     key: 'Tno'
        // }
    }
})
Course.belongsTo(Teacher,{foreignKey:'Tno'})
// Course.hasOne(Score)
Course.sync();//如果表存在则不重新创建
module.exports=Course