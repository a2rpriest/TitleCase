var sketch = require('sketch')

var document = sketch.getSelectedDocument()

var dontCapList = ['a', 'an', 'the', 'and', 'but', 'for', 'at', 'by', 'from', 'of', 'to', 'or', 'nor', 'in', 'on', 'up', 'as']

function onRun() {
  var selectedLayers = document.selectedLayers
  var selectedCount = selectedLayers.length

  if (selectedCount === 0) {
    console.log('No layers are selected.')
  } else {
    selectedLayers.forEach(function (layer, i) {
      //console.log((i + 1) + '. ' + layer.name)
      //console.log(layer.type)
      if (layer.type == 'Text') {
          //console.log("type Text")
          var inputText = layer.text
          var titleCaseText = titleCase(inputText)
          if (titleCaseText == inputText) {
            var lowerText = lowercase(inputText)
            lowerText = capFirstLetter(lowerText)
            layer.text = lowerText
          } else {
            layer.text = titleCaseText
          }
      }
    })

      
  }
}

function titleCase(inputText) {
  var titleCaseText = ""
  var inputTextList = inputText.split(" ")

  if (inputTextList.length == 0) {
    console.log("No text")
  } else {
    var endIndex = inputTextList.length - 1
    for (i = 0; i < inputTextList.length; i++) {
      var word = inputTextList[i]
      if (shouldNotCapWord(word)) {
        word = lowercase(word)
      } else {
        word = capFirstLetter(word)
      }

      if (i == endIndex) {
        titleCaseText += word
      } else {
        titleCaseText += word + " "
      }
    }
  }

  return titleCaseText
}

function lowercase(inputText) {
  var lowercaseText = inputText.toLowerCase()
  return lowercaseText
}


function shouldNotCapWord(word) {

  for (j = 0; j < dontCapList.length; j++) {
    if (word == dontCapList[j]) {
      return true
    }
  }
  return false
}

function capFirstLetter(word) {
  var newWord = word.charAt(0).toUpperCase() + word.slice(1)
  return newWord
}










