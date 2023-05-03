function downloadPDFWithjsPDF() {
  var doc = new jspdf.jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: "a4",
  });

  doc.html(document.querySelector("#content"), {
    callback: function (doc) {
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
