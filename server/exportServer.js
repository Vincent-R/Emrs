var officegen = require('officegen');
var fs = require('fs');
var path = require('path');
var origin_path = require('../config').origin_path;

/**
 * 导出word
 */
exports.exportWord = function(callBack) {
    let fileName = 'out.docx';
    var docx = officegen('docx');

    docx.on ( 'finalize', function ( written ) {
                // console.log ( 'Finish to create Word file.\nTotal bytes created: ' + written + '\n' );
            });

    docx.on ( 'error', function ( err ) {
                // console.log ( err );
            });

    var pObj = docx.createP ( { align: 'center' } );// 创建行 设置居中
    pObj.addText ( '血液透析（滤过）治疗知情同意书', { bold: true,font_face: 'Arial', font_size: 18 });// 添加文字 设置字体样式 加粗 大小

    // var table = [
    //     [{
    //       val: "姓名",
    //       opts: {
    //         align: "center",
    //         vAlign: "center",
    //         cellColWidth: 1000,//列宽
    //         b:false,//加粗
    //         sz: '24',//字体大小
    //         fontFamily: "SimSun",//字体
    //         gridSpan: "0"
    //       }
    //     },{
    //       val: "Title1",
    //       opts: {
    //         b:true,
    //         color: "A00000",
    //         align: "right",
    //         shd: {
    //           fill: "92CDDC",
    //           themeFill: "text1",
    //           "themeFillTint": "80"
    //         }
    //       }
    //     },{
    //       val: "Title2",
    //       opts: {
    //         align: "center",
    //         vAlign: "center",
    //         cellColWidth: 42,
    //         b:true,
    //         sz: '48',
    //         shd: {
    //           fill: "92CDDC",
    //           themeFill: "text1",
    //           "themeFillTint": "80"
    //         }
    //       }
    //     }],
    //     [1,'All grown-ups were once children',''],
    //     [2,'there is no harm in putting off a piece of work until another day.',''],
    //     [3,'But when it is a matter of baobabs, that always means a catastrophe.',''],
    //     [4,'watch out for the baobabs!','END'],
    //     [{
    //         val: "No.",
    //         opts: {
    //           cellColWidth: 4261,
    //           b:true,
    //           sz: '48',
    //           shd: {
    //             fill: "7F7F7F",
    //             themeFill: "text1",
    //             "themeFillTint": "80"
    //           },
    //           fontFamily: "Avenir Book"
    //         }
    //       },{
    //         val: "Title1",
    //         opts: {
    //           b:true,
    //           color: "A00000",
    //           align: "right",
    //           shd: {
    //             fill: "92CDDC",
    //             themeFill: "text1",
    //             "themeFillTint": "80"
    //           }
    //         }
    //       },{
    //         val: "Title2",
    //         opts: {
    //           align: "center",
    //           vAlign: "center",
    //           cellColWidth: 42,
    //           b:true,
    //           sz: '48',
    //           shd: {
    //             fill: "92CDDC",
    //             themeFill: "text1",
    //             "themeFillTint": "80"
    //           }
    //         }
    //       },
    //       {
    //         val: "Title2",
    //         opts: {
    //           align: "center",
    //           vAlign: "center",
    //           cellColWidth: 42,
    //           b:true,//加粗
    //           sz: '48',//字体大小
    //           shd: {
    //             fill: "92CDDC",
    //             themeFill: "text1",
    //             "themeFillTint": "80"
    //           }
    //         }
    //       }],
    //       [1,'All grown-ups were once children','','']
    // ]
      
    // var tableStyle = {
    //     tableColWidth: 2500,//默认列宽，总共10000
    //     tableSize: 24,//默认字体大小。21：五号；24：小四；28：四号；30：小三；32：三号；36：小二；44：二号。
    //     tableColor: "#000000",//字体颜色
    //     tableAlign: "center",//默认对其格式
    //     tableFontFamily: "SimSun",//默认字体
    //     borders: true,//是否显示边界
    // }
      
    // docx.createTable (table, tableStyle);

    var out = fs.createWriteStream ( path.join(origin_path, 'public', 'export', fileName), {flags: 'w'});// 文件写入
    out.on ( 'error', function ( err ) {
        callBack(err, fileName);
    });

    out.on ('finish', function () {
        out.close();
        callBack(null, fileName);
    });

    docx.generate (out);// 服务端生成word
}
