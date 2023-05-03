function downloadPDFWithjsPDF() {
  var doc = new jspdf.jsPDF("p", "pt", "a4", false);

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
