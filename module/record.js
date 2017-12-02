var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var SchemaTypes = Schema.Types;

/**
 * 定义record对象模型
 */
var recordSchema = new Schema({
    basicInfo: {
        admissionNum: SchemaTypes.String,
        bedNum: SchemaTypes.String,
        doctor: {
            _id: SchemaTypes.String,
            name: SchemaTypes.String
        },
        recorder: SchemaTypes.String,
        name: SchemaTypes.String,
        age: SchemaTypes.String,
        medicalCardNum: SchemaTypes.String,
        idNum: SchemaTypes.String,
        cellphone1: SchemaTypes.String,
        cellphone2: SchemaTypes.String,
        telephone: SchemaTypes.String,
        gender: SchemaTypes.String,
        nationality: SchemaTypes.String,
        birthProvince: SchemaTypes.String,
        birthCity: SchemaTypes.String,
        birthday: SchemaTypes.String,
        profession: SchemaTypes.String,
        addressProvince: SchemaTypes.String,
        addressCity: SchemaTypes.String,
        addressArea: SchemaTypes.String,
        addressTown: SchemaTypes.String,
        address: SchemaTypes.String
    },
    historyOfPresentIllness: {
        careCauses: [SchemaTypes.String],
        careCauseOthers: SchemaTypes.String,
        chestPain: {
            timesPerDay: SchemaTypes.String,
            timesPerWeek: SchemaTypes.String,
            timesPerMonth: SchemaTypes.String,
            timesPerYear: SchemaTypes.String,
            onsetTime: [SchemaTypes.String],
            onsetTimeOthers: SchemaTypes.String,
            diseaseBodyParts: [
                {
                    bodyPartName: SchemaTypes.String,
                    bodyPartNameOthers: SchemaTypes.String,
                    qualityOfPain: SchemaTypes.String,
                    qualityOfPainOthers: SchemaTypes.String,
                    durationOfPain: SchemaTypes.String,
                    durationOfPainOthers: SchemaTypes.String,
                    painDegree: SchemaTypes.String
                }
            ],
            relievingFactors: [SchemaTypes.String],
            relievingDuration: SchemaTypes.String,
            relievingFactorsOthers: SchemaTypes.String,
            precipitatingFactors: [SchemaTypes.String],
            precipitatingFactorsOthers: SchemaTypes.String,
            radiationSites: [SchemaTypes.String],
            radiationSitesOthers: SchemaTypes.String,
            simultaneousPhenomena: [SchemaTypes.String],
            simultaneousPhenomenonOthers: SchemaTypes.String
        },
        chestDistress: {
            timesPerDay: SchemaTypes.String,
            timesPerWeek: SchemaTypes.String,
            timesPerMonth: SchemaTypes.String,
            timesPerYear: SchemaTypes.String,
            onsetTime: [SchemaTypes.String],
            onsetTimeOthers: SchemaTypes.String,
            diseaseBodyParts: [
                {
                    bodyPartName: SchemaTypes.String,
                    bodyPartNameOthers: SchemaTypes.String,
                    qualityOfPain: SchemaTypes.String,
                    qualityOfPainOthers: SchemaTypes.String,
                    durationOfPain: SchemaTypes.String,
                    durationOfPainOthers: SchemaTypes.String,
                    painDegree: SchemaTypes.String
                }
            ],
            relievingFactors: [SchemaTypes.String],
            relievingDuration: SchemaTypes.String,
            relievingFactorsOthers: SchemaTypes.String,
            precipitatingFactors: [SchemaTypes.String],
            precipitatingFactorsOthers: SchemaTypes.String,
            radiationSites: [SchemaTypes.String],
            radiationSitesOthers: SchemaTypes.String,
            simultaneousPhenomena: [SchemaTypes.String],
            simultaneousPhenomenonOthers: SchemaTypes.String
        },
        dyspnea: {
            timesPerDay: SchemaTypes.String,
            timesPerWeek: SchemaTypes.String,
            timesPerMonth: SchemaTypes.String,
            timesPerYear: SchemaTypes.String,
            onsetTime: [SchemaTypes.String],
            onsetTimeOthers: SchemaTypes.String
        },
        palpitation: {
            timesPerDay: SchemaTypes.String,
            timesPerWeek: SchemaTypes.String,
            timesPerMonth: SchemaTypes.String,
            timesPerYear: SchemaTypes.String,
            onsetTime: [SchemaTypes.String],
            onsetTimeOthers: SchemaTypes.String
        },
        abnormalEcg: {
            timesPerDay: SchemaTypes.String,
            timesPerWeek: SchemaTypes.String,
            timesPerMonth: SchemaTypes.String,
            timesPerYear: SchemaTypes.String,
            onsetTime: [SchemaTypes.String],
            onsetTimeOthers: SchemaTypes.String
        }
    },
    anamnesis: {
        isLipidAbnormality: SchemaTypes.String,
        lipidAbnormalityType: SchemaTypes.String,
        lipidAbnormalityDuration: SchemaTypes.String,
        isLipidAbnormalityUnderTreatment: SchemaTypes.String,
        lipidAbnormalityDrugName: SchemaTypes.String,
        isEssentialHypertension: SchemaTypes.String,
        essentialHypertensionDuration: SchemaTypes.String,
        maximumBP: {
            SBP: SchemaTypes.String,
            DBP: SchemaTypes.String
        },
        ordinaryBP: {
            SBP: SchemaTypes.String,
            DBP: SchemaTypes.String
        },
        isEssentialHypertensionUnderTreatment: SchemaTypes.String,
        essentialHypertensionDrugName: SchemaTypes.String,
        isDysglycemia: SchemaTypes.String,
        dysglycemiaDuration: SchemaTypes.String,
        dysglycemiaType: SchemaTypes.String,
        isDiabetesMellitus: SchemaTypes.String,
        diabetesMellitusDuration: SchemaTypes.String,
        diabetesMellitusType: SchemaTypes.String,
        isDiabetesMellitusUnderTreatment: SchemaTypes.String,
        diabetesMellitusTreatmentMethod: [SchemaTypes.String],
        diabetesMellitusOralDrugName: SchemaTypes.String,
        isGout: SchemaTypes.String,
        goutDuration: SchemaTypes.String,
        serumUricAcidLevel: SchemaTypes.String,
        isRenalInsufficiency: SchemaTypes.String,
        renalInsufficiencyDuration: SchemaTypes.String,
        maximumCr: SchemaTypes.String,
        recentCr: SchemaTypes.String,
        renalInsufficiencyEtiology: SchemaTypes.String,
        isOldMyocardialInfarction: SchemaTypes.String,
        oldMyocardialInfarctionOnsetTimeYear: SchemaTypes.String,
        oldMyocardialInfarctionOnsetTimeMonth: SchemaTypes.String,
        oldMyocardialInfarctionOnsetFrequency: SchemaTypes.String,
        oldMyocardialInfarctionLocation: [SchemaTypes.String],
        oldMyocardialInfarctionLocationOthers: SchemaTypes.String,
        isPciHistory: SchemaTypes.String,
        isCabgHistory: SchemaTypes.String,
        isCasGt50History: SchemaTypes.String,
        isAtrialFibrillation: SchemaTypes.String,
        isOtherHeartDiseaseHistory: SchemaTypes.String,
        otherHeartDiseaseType: [SchemaTypes.String],
        otherHeartDiseaseTypeOthers: SchemaTypes.String,
        isDeepVenousThrombosis: SchemaTypes.String,
        deepVenousThrombosisOnsetTimeYear: SchemaTypes.String,
        deepVenousThrombosisOnsetTimeMonth: SchemaTypes.String,
        deepVenousThrombosisInducements: [SchemaTypes.String],
        deepVenousThrombosisInducementsOthers: SchemaTypes.String,        
        deepVenousThrombosisSymptoms: [SchemaTypes.String],
        deepVenousThrombosisDiagnosisResult: SchemaTypes.String,
        isOldIschemicStroke: SchemaTypes.String,
        oldIschemicStrokeTypes: [
            {
                typeName: SchemaTypes.String,
                onsetTimeYear: SchemaTypes.String,
                onsetTimeMonth: SchemaTypes.String,
                onsetFrequency: SchemaTypes.String
            }
        ],
        isVascularDiseases: SchemaTypes.String,
        vascularDiseasesTypes: [SchemaTypes.String],
        isHemorrhage: SchemaTypes.String,
        hemorrhageTypes: [
            {
                typeName: SchemaTypes.String,
                onsetTime: SchemaTypes.String,
                onsetFrequency: SchemaTypes.String
            }
        ],
        isBleeding: SchemaTypes.String,
        bleedingCauses: [
            {
                cause: SchemaTypes.String,
                onsetTime: SchemaTypes.String
            }
        ]
    },
    riskFactors: {
        isSomking: SchemaTypes.String,
        smokingDuration: SchemaTypes.String,
        piecesPerDay: SchemaTypes.String,
        cigretteType: [SchemaTypes.String],
        cigretteTypeOthers: SchemaTypes.String,
        isSmokingCessation: SchemaTypes.String,
        smokingCessationDuration: SchemaTypes.String,
        isDrinking: SchemaTypes.String,
        drinkingDuration: SchemaTypes.String,
        talesPerDay: SchemaTypes.String,
        wineType: [SchemaTypes.String],
        wineTypeOthers: SchemaTypes.String,
        isTemperance: SchemaTypes.String,
        temperanceDuration: SchemaTypes.String,
        drinkingAmount: SchemaTypes.String,
        paddyPotato: SchemaTypes.String,
        grainMixedBeans: SchemaTypes.String,
        potato: SchemaTypes.String,
        vegetables: SchemaTypes.String,
        fruits: SchemaTypes.String,
        livestockMeat: SchemaTypes.String,
        aquaticProducts: SchemaTypes.String,
        eggs: SchemaTypes.String,
        milkProducts: SchemaTypes.String,
        soybeansNuts: SchemaTypes.String,
        salt: SchemaTypes.String,
        sugar: SchemaTypes.String,
        oil: SchemaTypes.String,
        fatMeat: SchemaTypes.String,
        visceral: SchemaTypes.String,
        bloodType: SchemaTypes.String,
        isLongtermPsychologicalStress: SchemaTypes.String,
        isDepression: SchemaTypes.String,
        exerciseType: SchemaTypes.String,
        exerciseDuration: SchemaTypes.String,
        exerciseMode: [SchemaTypes.String],
        exerciseModeOthers: SchemaTypes.String,
        isCentralObesity: SchemaTypes.String,
        centralObesityDuration: SchemaTypes.String,
        height: SchemaTypes.String,
        weight: SchemaTypes.String,
        BMI: SchemaTypes.String,
        waistline: SchemaTypes.String,
        neckCircumference: SchemaTypes.String,
        hipline: SchemaTypes.String
    },
    familyHistory: {
        prematureChd: {
            isPrematureChd: SchemaTypes.String,
            onsetMembers: [
                {
                    onsetMember: SchemaTypes.String,
                    gender: SchemaTypes.String,
                    onsetAge: SchemaTypes.String,
                    prematureChdType: SchemaTypes.String
                }
            ]
        },
        myocardialInfarction: {
            isMyocardialInfarction: SchemaTypes.String,
            onsetMembers: [
                {
                    onsetMember: SchemaTypes.String,
                    gender: SchemaTypes.String,
                    onsetAge: SchemaTypes.String
                }
            ]
        },
        suddenDeath: {
            isSuddenDeath: SchemaTypes.String,
            onsetMembers: [
                {
                    onsetMember: SchemaTypes.String,
                    gender: SchemaTypes.String,
                    onsetAge: SchemaTypes.String,
                    etiology: SchemaTypes.String,
                    etiologyOthers: SchemaTypes.String
                }
            ]
        },
        ischemicStroke: {
            isIschemicStroke: SchemaTypes.String,
            onsetMembers: [
                {
                    onsetMember: SchemaTypes.String,
                    gender: SchemaTypes.String,
                    onsetAge: SchemaTypes.String
                }
            ]
        },
        hemorrhagicStroke: {
            isHemorrhagicStroke: SchemaTypes.String,
            onsetMembers: [
                {
                    onsetMember: SchemaTypes.String,
                    gender: SchemaTypes.String,
                    onsetAge: SchemaTypes.String
                }
            ]
        }
    },
    physicalExamination: {
        bodyTemperature: SchemaTypes.String,
        respiratoryRate: SchemaTypes.String,
        isBreathSoundsNormal: SchemaTypes.String,
        breathSoundsType: SchemaTypes.String,
        breathSoundsPart: SchemaTypes.String,
        isLungWetRales: SchemaTypes.String,
        lungWetRalesRange: SchemaTypes.String,
        lungWetRalesPart: SchemaTypes.String,
        heartRate: SchemaTypes.String,
        cardiacRhythm: SchemaTypes.String,
        heartSoundS1Result: SchemaTypes.String,
        isS3S4GallopRhythm: SchemaTypes.String,
        pulse: SchemaTypes.String,
        BP: {
            SBP: SchemaTypes.String,
            DBP: SchemaTypes.String
        },
        isEarLobeLongitudinalCrack: SchemaTypes.String,
        earLobeLongitudinalCrackParts: [SchemaTypes.String],
        isSkinYellowPigmentTumor: SchemaTypes.String,
        skinYellowPigmentTumorParts: [SchemaTypes.String],
        isAlopecia: SchemaTypes.String,
        alopeciaParts: [SchemaTypes.String]
    },
    routineExamination: {
        TC: SchemaTypes.String,
        TG: SchemaTypes.String,
        LDL: SchemaTypes.String,
        HDL: SchemaTypes.String,
        notHDL: SchemaTypes.String,
        APOA1: SchemaTypes.String,
        APOB: SchemaTypes.String,
        bloodGlucoseFasting: SchemaTypes.String,
        isSerumMyocardialNecrosisMarkers: SchemaTypes.String,
        myocardialCK: SchemaTypes.String,
        myocardialCKMB: SchemaTypes.String,
        myocardialCTnI: SchemaTypes.String,
        myocardialMb: SchemaTypes.String,
        isInflammatoryMarkers: SchemaTypes.String,
        inflammationHsCRP: SchemaTypes.String,
        inflammationIL6: SchemaTypes.String,
        inflammationIL1Beta: SchemaTypes.String,
        inflammationTNFAlpha: SchemaTypes.String,
        heartFailureNTproBNP: SchemaTypes.String,
        electrolyteNa: SchemaTypes.String,
        electrolyteK: SchemaTypes.String,
        electrolyteCa: SchemaTypes.String,
        electrolyteCl: SchemaTypes.String,
        isLiverFunction: SchemaTypes.String,
        totalProtein: SchemaTypes.String,
        albumin: SchemaTypes.String,
        totalBilirubin: SchemaTypes.String,
        directBilirubin: SchemaTypes.String,
        indirectBilirubin: SchemaTypes.String,
        ALT: SchemaTypes.String,
        AST: SchemaTypes.String,
        isRenalFunction: SchemaTypes.String,
        Cr: SchemaTypes.String,
        UA: SchemaTypes.String,
        BUN: SchemaTypes.String,
        GFR: SchemaTypes.String,
        isHepatorenalDisease: SchemaTypes.String,
        APTT: SchemaTypes.String,
        PT: SchemaTypes.String,
        TT: SchemaTypes.String,
        FIB: SchemaTypes.String,
        dDimer: SchemaTypes.String,
        INR: SchemaTypes.String,
        isINRStable: SchemaTypes.String,
        redBloodCellCount: SchemaTypes.String,
        redBloodCellSpecificVolume: SchemaTypes.String,
        HGB: SchemaTypes.String,
        leukocyteCount: SchemaTypes.String,
        neutrophil: SchemaTypes.String,
        eosinophil: SchemaTypes.String,
        basophil: SchemaTypes.String,
        lymphocyte: SchemaTypes.String,
        monocyte: SchemaTypes.String,
        isQualitativePlatelet: SchemaTypes.String,
        PCPLT: SchemaTypes.String,
        PCMPV: SchemaTypes.String,
        PCPDW: SchemaTypes.String,
        PARADP: SchemaTypes.String,
        PAREpinephrine: SchemaTypes.String,
        PARArachidonicAcid: SchemaTypes.String,
        PARCollagen: SchemaTypes.String,
        PARRistocetin: SchemaTypes.String
    },
    specialExamination: {
        ecg: {
            pathologicalQWave: {
                isPathologicalQWave: SchemaTypes.String,
                qWaveLeads: [SchemaTypes.String]
            },
            stSegmentChange: {
                isStSegmentChange: SchemaTypes.String,
                stSegmentDepression: {
                    isStSegmentDepression: SchemaTypes.String,
                    changeDetail: [
                        {
                            lead: SchemaTypes.String,
                            amplitude: SchemaTypes.String
                        }
                    ]
                },
                stSegmentElevation: {
                    isStSegmentElevation: SchemaTypes.String,
                    changeDetail: [
                        {
                            lead: SchemaTypes.String,
                            amplitude: SchemaTypes.String
                        }
                    ]
                }
            },
            tWaveChange: {
                isTWaveChange: SchemaTypes.String,
                changeDetail: [
                    {
                        lead: SchemaTypes.String,
                        amplitude: SchemaTypes.String,
                        waveform: SchemaTypes.String
                    }
                ]
            },
            arrhythmia: {
                isArrhythmia: SchemaTypes.String,
                arrhythmiaTypes: [SchemaTypes.String],
                arrhythmiaTypeOthers: SchemaTypes.String
            },
            isResultNormal: SchemaTypes.String,
            findings: SchemaTypes.String
        },
        exerciseEcg: {
            exerciseDuration: SchemaTypes.String,
            isExerciseAngina: SchemaTypes.String,
            maximumBP: {
                SBP: SchemaTypes.String,
                DBP: SchemaTypes.String
            },
            minimumBP: {
                SBP: SchemaTypes.String,
                DBP: SchemaTypes.String
            },
            stSegmentChange: {
                isStSegmentChange: SchemaTypes.String,
                stSegmentDepression: {
                    isStSegmentDepression: SchemaTypes.String,
                    duration: SchemaTypes.String,
                    changeDetail: [SchemaTypes.String]
                },
                stSegmentElevation: {
                    isStSegmentElevation: SchemaTypes.String,
                    duration: SchemaTypes.String,
                    changeDetail: [SchemaTypes.String]
                }
            },
            tWaveChange: {
                isTWaveChange: SchemaTypes.String,
                duration: SchemaTypes.String,
                changeDetail: [SchemaTypes.String]
            },
            result: SchemaTypes.String,
            findings: SchemaTypes.String
        },
        holterEcg: {
            totalHeartbeats: SchemaTypes.String,
            averageHeartRate: SchemaTypes.String,
            maximalHeartRate: SchemaTypes.String,
            maximalHeartRateOccurrenceTime: SchemaTypes.String,
            minimalHeartRate: SchemaTypes.String,
            minimalHeartRateOccurrenceTime: SchemaTypes.String,
            arrhythmia: {
                isArrhythmia: SchemaTypes.String,
                frequentness: SchemaTypes.String,
                totalAbnormalHeartbeats: SchemaTypes.String,
                arrhythmiaTypes: [
                    {
                        arrhythmiaType: SchemaTypes.String,
                        arrhythmiaTypeOthers: SchemaTypes.String,
                        duration: SchemaTypes.String
                    }
                ]
            },
            pathologicalQWave: {
                isPathologicalQWave: SchemaTypes.String,
                frequentness: SchemaTypes.String,
                qWaveLeadsDetail: [
                    {
                        time: SchemaTypes.String,
                        qWaveLeads: [SchemaTypes.String]
                    }
                ]
            },
            stSegmentChange: {
                isStSegmentChange: SchemaTypes.String,
                stSegmentDepression: {
                    isStSegmentDepression: SchemaTypes.String,
                    frequentness: SchemaTypes.String,
                    changesDetail: [
                        {
                            duration: SchemaTypes.String,
                            leads: [
                                {
                                    lead: SchemaTypes.String,
                                    amplitude: SchemaTypes.String
                                }
                            ]
                        }
                    ]
                },
                stSegmentElevation: {
                    isStSegmentElevation: SchemaTypes.String,
                    frequentness: SchemaTypes.String,
                    changesDetail: [
                        {
                            duration: SchemaTypes.String,
                            leads: [
                                {
                                    lead: SchemaTypes.String,
                                    amplitude: SchemaTypes.String
                                }
                            ]
                        }
                    ]
                }
            },
            tWaveChange: {
                isTWaveChange: SchemaTypes.String,
                frequentness: SchemaTypes.String,
                changesDetail: [
                    {
                        duration: SchemaTypes.String,
                        leads: [
                            {
                                lead: SchemaTypes.String,
                                amplitude: SchemaTypes.String,
                                waveform: SchemaTypes.String
                            }
                        ]
                    }
                ]
            },
            findings: SchemaTypes.String
        },
        ucg: {
            LVD: SchemaTypes.String,
            EDV: SchemaTypes.String,
            LVS: SchemaTypes.String,
            ESV: SchemaTypes.String,
            LAD: SchemaTypes.String,
            LVPW: SchemaTypes.String,
            IVST: SchemaTypes.String,
            isLVEFLtFortyPercent: SchemaTypes.String,
            ratioEToA: SchemaTypes.String,
            EF: SchemaTypes.String,
            isLocalMotionAbnormality: SchemaTypes.String,
            localMotionAbnormalityParts: [SchemaTypes.String],
            isVntricularAneurysm: SchemaTypes.String,
            vntricularAneurysmParts: [SchemaTypes.String],
            isLeftVentricularThrombosis: SchemaTypes.String,
            leftVentricularThrombosisParts: [SchemaTypes.String],
            findings: SchemaTypes.String
        },
        pci: {
            num: SchemaTypes.String,
            date: SchemaTypes.String,
            pciType: SchemaTypes.String,
            thrombolysisInterval: SchemaTypes.String,
            onsetIntervalDay: SchemaTypes.String,
            onsetIntervalHour: SchemaTypes.String,
            stayTimePrehospital: SchemaTypes.String,
            stayTimeEmergencyCall: SchemaTypes.String,
            stayTimeCCU: SchemaTypes.String,
            stayTimeConduitRoom: SchemaTypes.String,
            contrastMedia: [SchemaTypes.String],
            contrastMediaOthers: SchemaTypes.String,
            coronaryDistributionType: SchemaTypes.String,
            isCoronaryMalformations: SchemaTypes.String,
            isGrade3Lesions: SchemaTypes.String,
            isBloodFlowTIMIGrade0to2: SchemaTypes.String,
            isCTO: SchemaTypes.String,
            isCollateralCirculation: SchemaTypes.String,
            pciPaths: [SchemaTypes.String],
            implantedBracketCountLAD: SchemaTypes.String,
            implantedBracketCountLCX: SchemaTypes.String,
            implantedBracketCountRCA: SchemaTypes.String,
            implantedBracketCountLM: SchemaTypes.String,
            segmentalLesions: [
                {
                    num: SchemaTypes.String,
                    stenosis: SchemaTypes.String,
                    length: SchemaTypes.String,
                    shape: SchemaTypes.String,
                    isCalcification: SchemaTypes.String,
                    isOstialLesion: SchemaTypes.String,
                    isThrombus: SchemaTypes.String,
                    TIMIGrade: SchemaTypes.String,
                    kindsOfLesions: SchemaTypes.String,
                    pciGuidewire: SchemaTypes.String,
                    balloon: SchemaTypes.String,
                    stent: SchemaTypes.String
                }
            ]
        }
    },
    admissionDiagnosis: {
        isSilentMyocardialIschemia: SchemaTypes.String,
        isCoronaryMicrovascularDisease: SchemaTypes.String,
        isMyocardialInfarction: SchemaTypes.String,
        myocardialInfarctionType: SchemaTypes.String,
        myocardialInfarctionPart: SchemaTypes.String,
        isAngina: SchemaTypes.String,
        anginaType: SchemaTypes.String,
        anginaCcs: SchemaTypes.String,
        isIschemicCardiomyopathy: SchemaTypes.String,
        isSuddenCoronaryDeath: SchemaTypes.String,
        isChestPainOfUnknownOrigin: SchemaTypes.String,
        isDiagnosisOthers: SchemaTypes.String,
        diagnosisOthers: SchemaTypes.String
    },
    dischargeDiagnosis: {
        isSilentMyocardialIschemia: SchemaTypes.String,
        isCoronaryMicrovascularDisease: SchemaTypes.String,
        isMyocardialInfarction: SchemaTypes.String,
        myocardialInfarctionType: SchemaTypes.String,
        myocardialInfarctionPart: SchemaTypes.String,
        isAngina: SchemaTypes.String,
        anginaType: SchemaTypes.String,
        anginaCcs: SchemaTypes.String,
        isIschemicCardiomyopathy: SchemaTypes.String,
        isSuddenCoronaryDeath: SchemaTypes.String,
        isChestPainOfUnknownOrigin: SchemaTypes.String,
        isDiagnosisOthers: SchemaTypes.String,
        diagnosisOthers: SchemaTypes.String
    },
    createTime: SchemaTypes.String,
    lastUpdateTime: SchemaTypes.String
});

module.exports = mongoose.model('record', recordSchema);