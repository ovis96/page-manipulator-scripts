const skipAd = () => {
  const skipAdButton = document.querySelector(".ytp-ad-skip-button-slot");
  if (skipAdButton) {
    skipAdButton.click();
    console.log("~~~ we skipped an ad!! 😱");
  }
  requestAnimationFrame(skipAd);
};

skipAd();
