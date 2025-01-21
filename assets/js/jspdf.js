function downloadPDFWithjsPDF() {
  // set font to Helvetica to correct render on pdf
  document.querySelector("#content").style.fontFamily = "Helvetica, Arial, sans-serif";
  var doc = new jspdf.jsPDF({
    orientation: 'p',
    unit: 'pt',
    format: 'a4',
    putOnlyUsedFonts: true,
    compress: true
  });

  doc.html(document.querySelector("#content"), {
    callback: function (doc) {
      doc.setFont("Helvetica");
      doc.save("cv.pdf");
      // set original font once pdf generation is completed
      document.querySelector("#content").style.fontFamily = '"Orbitron", "Helvetica Neue", Helvetica, Arial, sans-serif, serifHelvetica, Arial, sans-serif';
    },
    x: 10,
    y: 10,
    margin: [20, 10, 20, 10],
    width: 595,
    windowWidth: 1024,
    autoPaging: 'text'
  });

}

document.addEventListener("DOMContentLoaded", function (event) {
  document
    .querySelector("#jsPDF")
    .addEventListener("click", downloadPDFWithjsPDF);
});