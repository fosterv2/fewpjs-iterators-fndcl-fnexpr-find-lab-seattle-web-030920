const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(records) {
  let record = records.find(record => record.result === "W")
  !!record ? (return record.year) : (return false)
}
