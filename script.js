function talk(){
    var know = {
      "hi" : "Hello, nice to meet you",
      "How are you" : "Good :)",
      "What can i do for you" : "Please Give me another bot so that i can chat with that.",
      "ok" : "Thank You So Much <3",
      "Bye" : "Okay! Will meet soon. TC:).."
    };
    var user = document.getElementById('userBox').value;
    //   document.getElementById('chatLog').innerHTML = user + "<br>";
    if (user in know) {
      document.getElementById('chatLog').innerHTML = know[user] ;
    }else{
      document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";
    }
  }