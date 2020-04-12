const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record){
  win = record.find(game => game.result === "W")
  if(win){
    return win.year
  }
}