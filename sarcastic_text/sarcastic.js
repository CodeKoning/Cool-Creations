function sarcastify(){
    var word = document.getElementById("inputText").value;
    var wordLen = word.length;
    var result = "";
    for(i = 0; i < wordLen - 1; i++){
      result += word.charAt(2*i);
      result += word.charAt((2*i)+1).toUpperCase();
    }
    var pElement = document.getElementById("result");
    pElement.textContent += result;
  }

  function clear_word(){
    var pElement = document.getElementById("result");
      var inp = document.getElementById("inputText");
    pElement.textContent = "";
    inp.value = "";

  }

  function switch_order(){
    var word = document.getElementById("result").textContent.trim();
    var wordLen = word.length;
    var result = "";
    const isUpperCase = (string) => /^[A-Z]*$/.test(word[0]);
    console.log(isUpperCase());
    if(isUpperCase()){
      for(i = 0; i < wordLen - 1; i++){
        result += word.charAt(2*i).toLowerCase();
        result += word.charAt((2*i)+1).toUpperCase();
      }
    }
    else{
      for(i = 0; i < wordLen - 1; i++){
        result += word.charAt(2*i).toUpperCase();
        result += word.charAt((2*i)+1).toLowerCase();
      }
      console.log(result);
    }
    var pElement = document.getElementById("result");
    pElement.textContent = result;
  }