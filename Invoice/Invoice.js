//Copy
function copyText() {
  var Text = document.getElementById("textbox");

  Text.select();

  navigator.clipboard.writeText(Text.value);

  document.getElementById("clipboard")
      .innerHTML = Text.value;
}

//Pdf Generator
function generatePdf() {
  var printableArea = document.getElementById('Pdf');

  html2canvas(printableArea, {
    useCORS: true,
    onrendered: function(canvas) {
  
      var pdf = new jsPDF('p', 'pt', 'letter');
  
      var pageHeight = 1000;
      var pageWidth = 1000;
      for (var i = 0; i <= printableArea.clientHeight / pageHeight; i++) {
        var srcImg = canvas;
        var sX = 0;
        var sY = pageHeight * i; // start 1 pageHeight down for every new page
        var sWidth = pageWidth;
        var sHeight = pageHeight;
        var dX = 0;
        var dY = 0;
        var dWidth = pageWidth;
        var dHeight = pageHeight;
      
        window.onePageCanvas = document.createElement("canvas");
        onePageCanvas.setAttribute('width', pageWidth);
        onePageCanvas.setAttribute('height', pageHeight);
        var ctx = onePageCanvas.getContext('2d');
        ctx.drawImage(srcImg, sX, sY, sWidth, sHeight, dX, dY, dWidth, dHeight);
      
        var canvasDataURL = onePageCanvas.toDataURL("logo.png", 1.0);
        var width = onePageCanvas.width;
        var height = onePageCanvas.clientHeight;
      
        if (i > 0) // if we're on anything other than the first page, add another page
          pdf.addPage(612, 791); // 8.5" x 11" in pts (inches*72)
      
        pdf.setPage(i + 1); // now we declare that we're working on that page
        pdf.addImage(canvasDataURL, 'PNG', 20, 40, (width * .62), (height * .62)); // add content to the page
      
      }
      pdf.save('Invoice.pdf');
    }
  });
}             

//mul
function multiplyBy()
{
  num1 = document.getElementById("qty").value;
  num2 = document.getElementById("prc").value;
  document.getElementById("ttl").innerHTML = num1 * num2;
  document.getElementById("sub").innerHTML = num1 * num2;
}

//tax-sub
function taxBy(){
  num3 = document.getElementById("sub").value;
  num4 = document.getElementById("tax").value;
  document.getElementById("tax-val").innerHTML = (num3 * num4)/100;
}

//sub-tot
function subBy()
{
  num5 = document.getElementById("sub").value;
  num6 = document.getElementById("tax-val").value;
  document.getElementById("sub-tax").innerHTML = parseInt(num5) + parseInt(num6);
}

//curr-change
function currChange(){
  let a = document.getElementById("select").value;

  if(a == "British Pound - GBP"){
    let p = document.getElementById("prc").value;
    var m = p*0.0099
    document.getElementById("prc").value = m;
  }
  else if(a == "Indian - INR"){
    let p = document.getElementById("prc").value;
    var m = p*1
    document.getElementById("prc").value = m;
  }
  else{
    let p = document.getElementById("prc").value;
    var m = p*0.013
    document.getElementById("prc").value = m;
  }
}

//updated amount
function updateAmount(){
  num1 = document.getElementById("qty").value;
  num2 = document.getElementById("prc").value;
  document.getElementById("ttl").innerHTML = num1 * num2;
  document.getElementById("sub").innerHTML = num1 * num2;
}

//tax-sub-update
function uptaxBy(){
  num3 = document.getElementById("sub").value;
  num4 = document.getElementById("tax").value;
  document.getElementById("tax-val").innerHTML = (num3 * num4)/100;
}

//updated sub
function upsubBy()
{
  num5 = document.getElementById("sub").value;
  num6 = document.getElementById("tax-val").value;
  document.getElementById("sub-tax").innerHTML = parseInt(num5) + parseInt(num6);
}

