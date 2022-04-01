# bb-auto-form

一款小程序自动化表单

目前包含input / radio / textarea

value:          绑定值
label:          标题
subTitle:       副标题
required:       是否必选
placeholder:    占位符  （type === input | textarea有效）
unit:           单位    （type === input有效）
type:           输入框类型 (input | radio | textarea)
maxlength:      textarea 最大长度（type === radio有效）
lineHeight:     textarea高度（type === radio有效）
radioOption：   单选框选项（type === radio有效）

<div>project.config.json 中 setting 加入</div>

"packNpmManually": true,
"packNpmRelationList": [
    {
    "packageJsonPath": "./package.json",
    "miniprogramNpmDistDir": "./miniprogram/"
    }
]

<div>在需要页面的index.json文件中加入</div>
  "usingComponents": {
    "bb-auto-form": "/miniprogram/miniprogram_npm/bb-auto-form/index"
  }

页面使用
<bb-auto-form label="输入框"></bb-auto-form>