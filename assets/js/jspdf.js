function downloadPDFWithjsPDF() {
  var doc = new jspdf.jsPDF({
    orientation: 'p',
    unit: 'pt',
    format: 'a4',
    putOnlyUsedFonts: true,
    compress: true
  });

  doc.html(document.querySelector("#content"), {
    callback: function (doc) {
      doc.text('test', 0, 0);
      doc.save("cv.pdf");
    },
    margin: [20, 10, 20, 10],
    width: 595,
    windowWidth: 1024,
  });
}

document.addEventListener("DOMContentLoaded", function (event) {
  document
    .querySelector("#jsPDF")
    .addEventListener("click", downloadPDFWithjsPDF);
});
