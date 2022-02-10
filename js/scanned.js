var scan = document.getElementById("startscan");
var stopscan = document.getElementById("stop");

var scannedInfo = document.getElementById("scanned_info");
var cont = document.getElementById("qr-reader");
var camera = document.querySelector(".camera");

function scanQr(sc) {
  if (
    document.readyState === "complete" ||
    document.readyState === "interactive"
  ) {
    setTimeout(sc, 1);
  } else {
    document.addEventListener("DOMContentLoaded", sc);
  }
}

scanQr(function () {
  var resultContainer = document.getElementById("qr-reader-results");
  var lastResult,
    countResults = 0;
  function onScanSuccess(decodedText, decodedResult) {
    if (decodedText !== lastResult) {
      ++countResults;
      lastResult = decodedText;
      console.log(`Scan result ${decodedText}`, decodedResult);
      scannedInfo.style.display = "flex";
      camera.style.marginBottom = "50px";
    }
  }

  var html5QrcodeScanner = new Html5QrcodeScanner("qr-reader", {
    fps: 10,
    qrbox: 250,
  });
  html5QrcodeScanner.render(onScanSuccess);
});
