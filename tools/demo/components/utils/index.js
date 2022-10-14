const formatValue = (type, data) => {
    let value = ''
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
        value = data.detail.value
    }
    return value
}

export {
    formatValue
}
