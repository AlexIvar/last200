
  //your code here
  $("#numberbutton").click(function () {
    $("#numbersOutput").val('');
    var numbersResult = '';
    var subjectNr = $('#subjects input:checked').val();
    var theSelectedNumber = parseInt($("#inputnumber").val());
    if (!isNaN(theSelectedNumber) && theSelectedNumber > 200) {
        //alert("The number chosen : " + theSelectedNumber)
        console.log(theSelectedNumber < 200);
        var theSelectedNumber = theSelectedNumber - 200;
        for(var i = 0; i <= 200; i++){

          var num = theSelectedNumber + i;

          if(i === 200){
            numbersResult += ((num < 1000) ? subjectNr + '0' : subjectNr) + num;
          }else{
            numbersResult += ((num < 1000) ? subjectNr + '0' : subjectNr) + num + ", ";
          }
        }
        console.log(numbersResult);
        $("#numbersOutput").val(numbersResult);
        return;
    }
    else {
        alert("You have to choose a number bigger than 200!")
    }
});

$("#copyButton").click(function(){
  copyTheNumbers();

});


function copyTheNumbers() {
  /* Get the text field */
  var copyText = document.getElementById("numbersOutput");

  /* Select the text field */
  copyText.select();

  /* Copy the text inside the text field */
  document.execCommand("copy");

   $("#copyButton").tooltip('show')

   setTimeout(function () {
        $("#copyButton").tooltip('dispose');
    }, 2000)

     $('#numbersOutput').trigger('blur');

}
