const db = require('./commonDB')

function defineModel(tablename, pros) {
    var attr = {};
    for (let key in pros) {
        let val = pros[key];
        if (typeof val === 'object' && val['type']) {//参数包含多个对象
            val.allowNull = val.allowNull || false;//默认不允许为空
            attr[key] = val;
        } else {
            attr[key] = {//参数只包含字段类型
                type: val,
                allowNull: false
            }
        }
    }

    return db.define(tablename, attr,
        {
            charset: 'utf8',
            collate: 'utf8_general_ci',//utf8编码
            timestamp: false//关闭自动添加的时间戳
        })
}

module.exports = defineModel