import { formatValue } from './utils/index'

Component({
    properties: {
        /**
         * @label
         * @String 标题
        */
        label: {
            type: String,
            value: ''
        },

        subTitle: {
            type: String,
            value: ''
        },

        required: {
            type: Boolean,
            value: true
        },
        /**
         * @placeholder
         * @String 输入框占位
         * 只有在type为input、select时有效
        */
        placeholder: {
            type: String,
            value: '请输入'
        },
        /**
         * @unit
         * @String 输入框后边携带单位
         * 只有在type为input时有效
        */
        unit: {
            type: String,
            value: ''
        },
        /**
         * @type
         * @String 输入框类型
         * input    输入框
         * select   下拉框
         * radio    单选框
         * textarea 文本域
        */
        type: {
            type: String,
            value: 'input'
        },

        maxlength: {
            type: Number,
            value: -1
        },

        lineHeight: {
            type: Number,
            value: 2
        },

        /**
         * @selectList
         * @Array radio 类型的可选值
         * 例：
         * [
         *  { label: '是', value: 1 },
         *  { label: '否', value: 0 },
         * ]
        */
        selectList: {
            type: Array,
            value: [
                { label: '是', value: '1' },
                { label: '否', value: '0' }
            ]
        },
        value: {
            type: String,
            value: ''
        }
    },
    data: {
        modelValue: null
    },
    attached() {
        if (this.properties.value || this.properties.value === 0) {
            this.setData({
                modelValue: this.properties.value
            })
        }
    },
    methods: {
        // change事件
        change(e) {
            this.setData({
                modelValue: formatValue(this.data.type, e, this.data.modelValue)
            })
            // 把事件传递上去
            this.triggerEvent('change', this.data.modelValue)
        }
    }
})
