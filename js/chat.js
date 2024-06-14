// array (if u wanted add more just make another array)
const greetings = [
    "halo",
    "selamat pagi",
    "selamat siang",
    "selamat sore",
    "selamat malam",
    "hai",
    "hello",
    "hi",
    "hay",
    "hai",
    "hey bot",
    "hey",
    "hallo",
    "helo",
    "p",
    "test",
    "tst",
    "smlt pgi",
    "smlt siang",
    "smlt sore",
    "smlt mlm",
    "halo bot",
    "hllo bot",
    "hllo",
    "hello bot",
    "helo bot",
    "hai bot",
    "hey bot",
  ];
  const farewells = [
    "goodbye",
    "daa",
    "terimakasih",
    "thanks",
    "tysm",
    "goodbye bot",
    "daa bot",
    "terimakasih bot",
    "thanks bot",
    "tysm bot",
    "gdbye bot",
    "trmksh bot",
    "gdbye",
    "trmksh",
    "bye",
    "bye bot",
    "sip",
    "ok",
    "da",
    "baik",
    "siap",
    "okey",
    "okok",
  ];
  
  const chatButton = document.getElementById("chatButton");
  const chatContent = document.getElementById("chatContent");
  const closeButtonChat = document.getElementById("closeButtonChat");
  
  chatButton.addEventListener("click", function () {
    const icons = buttonChatIcons.getAttribute("src");
    buttonChatIcons.setAttribute("src", "assets/cross-chat.svg");
    if (icons === "assets/chat.svg") {
      chatContent.classList.remove("hidden");
      document.body.classList.add("chat-open");
  
      if (window.innerWidth <= 500) {
        chatButton.classList.add("hidden");
        closeButtonChat.classList.remove("hidden");
      }
    } else {
      buttonChatIcons.setAttribute("src", "assets/chat.svg");
      chatContent.classList.add("hidden");
      document.body.classList.remove("chat-open");
  
      chatButton.classList.remove("hidden");
    }
  
    if (icons === "assets/cross-chat.svg") {
      buttonChatIcons.style.width = "2rem";
    } else {
      buttonChatIcons.style.width = "1.3rem";
    }
  });
  
  closeButtonChat.addEventListener("click", function () {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    if (mediaQuery.matches && chatButton.classList.contains("hidden")) {
      chatButton.classList.remove("hidden");
      chatContent.classList.add("hidden");
      buttonChatIcons.setAttribute("src", "assets/chat.svg");
      document.body.classList.remove("chat-open");
    }
  });
  
  
  // function condition (response bot)
  function getBotResponse(input) {
    if (greetings.includes(input.toLowerCase())) {
      return "Halo, <br /> aku adalah ChatBot apakah ada yang ingin kamu ketahui tentang Experience?";
    } else if (farewells.includes(input.toLowerCase())) {
      return "Sama-sama senang bisa membantu";
    } else {
      return "Maaf, <br /> chat bot tidak bisa terkoneksi ke server untuk sementara pertanyaan/kata respons Chatbot terbatas (masih dalam tahap pengembangan) ";
    }
  }
  
  // first massage if user click chat bot
  function firstBotMessage() {
    let firstMessage =
      "Halo,<br/>Selamat datang di Xperience! Saya adalah asisten virtualmu untuk mengeksplorasi dunia gadget terbaru. Bagaimana saya bisa membantu hari ini?";
    document.getElementById("botStarterMessage").innerHTML =
      '<p class="botText"><span>' + firstMessage + "</span></p>";
  
    document.getElementById("userInput").scrollIntoView(false);
  }
  
  // execute the function
  firstBotMessage();
  
  
  // get the response when user input the field 
  function getResponse() {
    let userText = $("#chatInput").val().trim();
  
    if (userText == "") {
      return;
    }
  
    let userHtml = '<p class="userText"><span>' + userText + "</span></p>";
  
    $("#chatInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chatBars").scrollIntoView(true);
  
    setTimeout(() => {
      getHardResponse(userText);
    }, 1000);
  }
  
  
  
  // send the response
  function sendButton() {
    getResponse();
  }
  
  $("#chatInput").keypress(function (e) {
    if (e.which == 13) {
      getResponse();
    }
  });
  
  
  // bot response
  function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let loadingSpinnerHtml = '<div class="loader-chat"></div>';
    let botResponseHtml =
      '<p class="botText"><span>' + botResponse + "</span></p>";
  
    // loader
    $("#chatbox").append(loadingSpinnerHtml);
  
    setTimeout(function () {
      $("#chatbox").find(".loader-chat").remove();
      $("#chatbox").append(botResponseHtml);
      document.getElementById("chatBars").scrollIntoView(true);
    }, 1000);
  }
  