const formatValue = (type, data, modelValue) => {
    let value = modelValue
    if (type === 'input') {
        value = data.detail.value
    }
    if (type === 'radio') {
        value = data.currentTarget.dataset.value
    }
    if (type === 'textarea') {
        value = data.detail.value
    }
    if (type === 'moreSelect') {
        if (!value) {
            value = []
        } else if (!Array.isArray(value)) {
            value = value.split(',')
        }
        if (value.indexOf(data.currentTarget.dataset.value) === -1) {
            value.push(data.currentTarget.dataset.value)
        } else {
            value.splice(value.indexOf(data.currentTarget.dataset.value), 1)
        }
    }
    if (type === 'select') {
        value = data.detail.value
    }
    return value
}

export {
    formatValue
}
