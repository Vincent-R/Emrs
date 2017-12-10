var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var SchemaTypes = Schema.Types;

/**
 * 定义fRSPrediction对象模型
 */
var fRSPredictionSchema = new Schema({
    patientInfo: {
        id: SchemaTypes.String,
        name: SchemaTypes.String,
        age: SchemaTypes.String,
        sex: SchemaTypes.String,
        phone: SchemaTypes.String,
        smoke: SchemaTypes.String,
        TC: SchemaTypes.String,
        HDL_C: SchemaTypes.String,
        SBP: SchemaTypes.String,
        SBP_Treated: SchemaTypes.String,
        address: SchemaTypes.String,
        other: SchemaTypes.String
    },
    resultData:  {
        ageScore: SchemaTypes.Number,
        TCScore: SchemaTypes.Number,
        smokeScore: SchemaTypes.Number,
        HDL_CScore: SchemaTypes.Number,
        SBPScore: SchemaTypes.Number,
        totalScore: SchemaTypes.Number,
        FRScore: SchemaTypes.String
    },
    userId: SchemaTypes.String,
    createTime: SchemaTypes.String,
    lastUpdateTime: SchemaTypes.String
});

module.exports = mongoose.model('fRSPrediction', fRSPredictionSchema);
