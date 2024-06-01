function checkInput() {
  const input = document.getElementById("inputBox").value.trim().toLowerCase();
  const backgroundVideo = document.getElementById("backgroundVideo");
  let videoURL;

  if (input === "7" || input === "seven") {
    videoURL = "Bole jo koyal baago me Dhoni Dancing video meme.mp4";
  } else {
    videoURL = "MS Dhoni get's angry __ audio __ bole jo koyal __ bich raste mai helicopter shot maarunga audio.mp4"; 
  }

  backgroundVideo.src = videoURL;
}
