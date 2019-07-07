
  //your code here
  $("#numberbutton").click(function () {
    $("#numbersOutput").val('');
    var numbersResult = '';
    var theSelectedNumber = parseInt($("#inputnumber").val());
    console.log(theSelectedNumber);
    if (!isNaN(theSelectedNumber)) {
        //alert("The number chosen : " + theSelectedNumber)

        for(var i = 0; i <= 200; i++){

          var num = theSelectedNumber + i;
          if(i === 200){
            numbersResult += num;
          }else{
            numbersResult += num + ", ";
          }
        }
        console.log(numbersResult);
        $("#numbersOutput").val(numbersResult);
        return;
    }
    else {
        alert("no number has been chosen!")
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
  /* Alert the copied text */
  //alert("Copied the text: " + copyText.value);

}
