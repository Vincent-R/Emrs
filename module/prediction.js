var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var SchemaTypes = Schema.Types;

/**
 * 定义user对象模型
 */
var predictionSchema = new Schema({
    rawData: {
        basicInfo: {
            address: SchemaTypes.String,
            age: SchemaTypes.String,
            chiefComplain: SchemaTypes.String,
            height: SchemaTypes.String,
            name: SchemaTypes.String,
            patientId: SchemaTypes.String,
            phone: SchemaTypes.String,
            provisonalDiagnosis: SchemaTypes.String,
            sex: SchemaTypes.String,
            weight: SchemaTypes.String
        },
        drugsForTreatment: {
            ACEIARB: SchemaTypes.String,
            CCB: SchemaTypes.String,
            antiplatelets: SchemaTypes.String,
            bBlocker: SchemaTypes.String,
            digoxin: SchemaTypes.String,
            diuretic: SchemaTypes.String,       
            echocardiogramAngiographyReport: SchemaTypes.String,
            statin: SchemaTypes.String,
            warfarin: SchemaTypes.String,
            otherDrugs: SchemaTypes.String
        },
        labExamination: {
            GFR: SchemaTypes.String,
            abnormalLiverFunction: SchemaTypes.String,
            abnormalRenalFunction: SchemaTypes.String,
            haemoglobin: SchemaTypes.String,
            hematocrit: SchemaTypes.String,
            labileINR: SchemaTypes.String,
            whiteBloodCells: SchemaTypes.String
        },
        labExamination2: {
            HDL: SchemaTypes.String,
            LDL: SchemaTypes.String,
            cr: SchemaTypes.String,
            dDimer: SchemaTypes.String,
            glucose: SchemaTypes.String,
            highSensitivityCardiacTroponinI: SchemaTypes.String,
            hsCRP: SchemaTypes.String,
            nTerminalProBrainNatriureticPeptide: SchemaTypes.String,
            plateletsCount: SchemaTypes.String,
            totalCholesterol: SchemaTypes.String,
            triglyceride: SchemaTypes.String,
            urea: SchemaTypes.String,
            uricAcid: SchemaTypes.String
        },
        medicalHistory: {
            congestiveHeartsFailure: SchemaTypes.String,
            diabetesMellitus: SchemaTypes.String,
            leftVentricularSystolicDysfunction: SchemaTypes.String,
            mIAtPresentation: SchemaTypes.String,
            medicationUsagePredisposingToBleeding: SchemaTypes.String,
            priorHistoryBleeding: SchemaTypes.String,
            priorMI: SchemaTypes.String,
            priorPCI: SchemaTypes.String,
            priorStrokeOrTIAOrThromboembolism: SchemaTypes.String,
            priorVascularDisease: SchemaTypes.String,
            treatedHypertensionOnMedication: SchemaTypes.String
        },
        physicalExamination: {
            diastolicBloodPressure: SchemaTypes.String,
            heartRate: SchemaTypes.String,
            systolicBloodPressure: SchemaTypes.String
        },
        riskFactors: {
            alcoholUsageHistory: SchemaTypes.String,
            cigaretteSmoking: SchemaTypes.String
        },
        specialExamination: {
            lvef: SchemaTypes.String,
            paclitaxelElutingStent: SchemaTypes.String,
            stentDiameter: SchemaTypes.String,
            veinGraftStent: SchemaTypes.String
        }
    },
    resultData:  {
        BleedingScore: {
            GFR: SchemaTypes.String,
            congestiveHeartsFailure: SchemaTypes.String,
            diabetesMellitus: SchemaTypes.String,
            heartRate: SchemaTypes.String,
            hematocrit: SchemaTypes.String,
            priorVascularDisease: SchemaTypes.String,
            sex: SchemaTypes.String,
            systolicBloodPressure: SchemaTypes.String,
            result: {
                desc: SchemaTypes.String,
                value: SchemaTypes.String
            }
        },
        CHADSVASScore: {
            age: SchemaTypes.String,
            chfOrLvsd: SchemaTypes.String,
            diabetesMellitus: SchemaTypes.String,
            hypertension: SchemaTypes.String,
            priorStrokeOrTIAOrThromboembolism: SchemaTypes.String,
            result: {
                value: SchemaTypes.String,
                desc: SchemaTypes.String,
                risk: SchemaTypes.String,
                therapy: SchemaTypes.String
            },
            sexCategory: SchemaTypes.String,
            vascularDisease: SchemaTypes.String,
        },
        DAPTScore: {
            age: SchemaTypes.String,
            cigaretteSmoking: SchemaTypes.String,
            diabetesMellitus: SchemaTypes.String,
            historyOfCHFOrLevflt30: SchemaTypes.String,
            mIAtPresentation: SchemaTypes.String,
            paclitaxelElutingStent: SchemaTypes.String,
            priorMIOrPriorPCI: SchemaTypes.String,
            result: {
                value: SchemaTypes.String,
                desc: SchemaTypes.String
            },
            stentDiameterlt3: SchemaTypes.String,
            veinGraftStent: SchemaTypes.String
        },
        HASBLEDScore: {
            abnormalLiverFunction: SchemaTypes.String,
            abnormalRenalFunction: SchemaTypes.String,
            alcoholUsageHistory: SchemaTypes.String,
            elderly: SchemaTypes.String,
            hypertension: SchemaTypes.String,
            labileINR: SchemaTypes.String,
            medicationUsagePredisposingToBleeding: SchemaTypes.String,
            priorMajorBleedingOrPredisposingToBleeding: SchemaTypes.String,
            priorStroke: SchemaTypes.String,
            result: {
                value: SchemaTypes.String,
                desc: SchemaTypes.String
            }
        },
        PreciseDaptScore: {
            age: SchemaTypes.String,
            creatinineClearance: SchemaTypes.String,
            haemoglobin: SchemaTypes.String,
            priorBleeding: SchemaTypes.String,
            result: {
                value: SchemaTypes.String,
                desc: SchemaTypes.String,
                risk: SchemaTypes.String,
                riskOfMajorBleeding: SchemaTypes.String,
                riskOfMajorOrMinorBleeding: SchemaTypes.String
            },
            whiteBloodCells: SchemaTypes.String
        }
    },
    followUpInfo: [],
    userId: SchemaTypes.String,
    createTime: SchemaTypes.String,
    lastUpdateTime: SchemaTypes.String
});

module.exports = mongoose.model('prediction', predictionSchema);
