Page({
  data: {
    form: {
      input: '1234',
      radio: 1,
      moreSelect: 1,
      select: 1
    }
  },
  change(e) {
    console.log(e)
    const form = this.data.form
    form[e.currentTarget.dataset.name] = e.detail
    this.setData({form})
  }
})
