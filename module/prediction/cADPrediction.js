var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var SchemaTypes = Schema.Types;

/**
 * 定义fADPrediction对象模型
 */
var cADPredictionSchema = new Schema({
    patientInfo: {
        id: SchemaTypes.String,
        name: SchemaTypes.String,
        age: SchemaTypes.String,
        gender: SchemaTypes.String,
        phone: SchemaTypes.String,
        address: SchemaTypes.String,
        other: SchemaTypes.String,
        location: SchemaTypes.Array,
        characteristic: SchemaTypes.Array,
        duration: SchemaTypes.String,
        precipitationFactors: SchemaTypes.Array,
        reliefFactors: SchemaTypes.Array,
        reliefTime: SchemaTypes.String
    },
    resultData:  {
        percent: SchemaTypes.String,
        probability: SchemaTypes.String,
        symptomStatus: SchemaTypes.String
    },
    userId: SchemaTypes.String,
    createTime: SchemaTypes.String,
    lastUpdateTime: SchemaTypes.String
});

module.exports = mongoose.model('cADPrediction', cADPredictionSchema);
