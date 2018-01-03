## 导出word时officegen插件要修改的地方

1. docxtable.js
```
if (opts.borders) {
      baseTable["w:tbl"]["w:tblPr"]["w:tblBorders"] = {
        "w:top": {
          "@w:val": "single",
          "@w:sz": "12",
          "@w:space": "0",
          "@w:color": "000000"
        },
        "w:bottom": {
          "@w:val": "single",
          "@w:sz": "12",
          "@w:space": "0",
          "@w:color": "000000"
        },
        "w:left": {
          "@w:val": "single",
          "@w:sz": "12",
          "@w:space": "0",
          "@w:color": "000000"
        },
        "w:right": {
          "@w:val": "single",
          "@w:sz": "12",
          "@w:space": "0",
          "@w:color": "000000"
        },
        "w:insideH": {
          "@w:val": "single",
          "@w:sz": "12",
          "@w:space": "0",
          "@w:color": "000000"
        },
        "w:insideV": {
          "@w:val": "single",
          "@w:sz": "12",
          "@w:space": "0",
          "@w:color": "000000"
        }
      };
    }
    //将上面代码中的"@w:sz": "12"全部修改为"@w:sz": "6"。是的表格的边框变细。
```

2. gendocx.js
```
if ( pPrData ) {
	outString += '<w:pPr>' + pPrData + '</w:pPr>';
} // Endif.
//替换成一下代码以消除段后间距以及调整行距
if ( pPrData ) {
	outString += '<w:pPr><w:spacing w:after="0" w:line="240" w:lineRule="auto"/>' + pPrData + '</w:pPr>';
} // Endif.
//w:after="0":消除段后间距
//w:line="240" w:lineRule="auto":行距设为1
```
