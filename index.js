$(document).ready(function() {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");

  envelope.click(function() {
      open();
  });
  btn_open.click(function() {
      open();
  });
  btn_reset.click(function() {
      close();
  });

  function open() {
      envelope.addClass("open")
          .removeClass("close");
  }

  function close() {
      envelope.addClass("close")
          .removeClass("open");
  }

})
// Function to generate random emojis
function getRandomEmoji() {
  const emojis = ['❤️', '😍', '😘', '💕', '🥰', '💖', '💘'];
  const randomIndex = Math.floor(Math.random() * emojis.length);
  return emojis[randomIndex];
}

// Function to populate the page with floating emojis
function populatePageWithFloatingEmojis() {
  const numEmojis = 30; // Adjust the number of emojis as needed
  const body = document.body;

  for (let i = 0; i < numEmojis; i++) {
      const emojiSpan = document.createElement('span');
      emojiSpan.className = 'emoji';
      emojiSpan.innerHTML = getRandomEmoji();
      emojiSpan.style.top = Math.random() * 100 + 'vh'; // Random vertical position
      emojiSpan.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
      body.appendChild(emojiSpan);
  }
}

// Call the populatePageWithFloatingEmojis function when the page loads
window.onload = function () {
  populatePageWithFloatingEmojis();
};
