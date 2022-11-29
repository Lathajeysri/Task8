function generatePDF(){
    const element=document.getElementById("downloadpdf");
    html2pdf()
    .from(element)
    .save();

 }