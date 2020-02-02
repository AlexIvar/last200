
  //your code here
  document.getElementById('aircraftNumber').innerHTML = ""
  document.getElementById('mtom').innerHTML = ""
  document.getElementById('empty_leverarm').innerHTML = ""
  document.getElementById('empty_mass').innerHTML = ""
  document.getElementById('empty_moment').innerHTML = ""
  document.getElementById('frontseats_mass').innerHTML = ""
  document.getElementById('frontseats_moment').innerHTML = ""
  document.getElementById('rearseats_mass').innerHTML = ""
  document.getElementById('rearseats_moment').innerHTML = ""
  document.getElementById('stdbaggage_mass').innerHTML = ""
  document.getElementById('stdbaggage_moment').innerHTML = ""

  document.getElementById('baggagetube_mass').innerHTML = "-"
  document.getElementById('baggagetube_moment').innerHTML = "-"
  document.getElementById('shortbaggage_mass').innerHTML = "-"
  document.getElementById('shortbaggage_moment').innerHTML = "-"
  document.getElementById('fwdbaggage_mass').innerHTML = "-"
  document.getElementById('fwdbaggage_moment').innerHTML = "-"
  document.getElementById('aftbaggage_mass').innerHTML = "-"
  document.getElementById('aftbaggage_moment').innerHTML = "-"

  document.getElementById('zfm_leverarm').innerHTML = ""
  document.getElementById('zfm_mass').innerHTML = ""
  document.getElementById('zfm_moment').innerHTML = ""
  document.getElementById('fuel_mass').innerHTML = ""
  document.getElementById('fuel_moment').innerHTML = ""
  document.getElementById('tom_leverarm').innerHTML = ""
  document.getElementById('tom_mass').innerHTML = ""
  document.getElementById('tom_moment').innerHTML = ""
  document.getElementById('fuelburn_mass').innerHTML = ""
  document.getElementById('fuelburn_moment').innerHTML = ""
  document.getElementById('lm_leverarm').innerHTML = ""
  document.getElementById('lm_mass').innerHTML = ""
  document.getElementById('lm_moment').innerHTML = ""

  var aircraftlist = [
    { value: 'C', mass: '958', moment: 2377, mtom: 1310 },
    { value: 'D', mass: '954', moment: 2365, mtom: 1310 },
    { value: 'E', mass: '962', moment: 2393, mtom: 1280 },
    { value: 'G', mass: '955', moment: 2367, mtom: 1280 },
    { value: 'H', mass: '958', moment: 2378, mtom: 1310 },
    { value: 'J', mass: '959', moment: 2378, mtom: 1310 },
    { value: 'K', mass: '955', moment: 2368, mtom: 1280 },
    { value: 'M', mass: '963', moment: 2379, mtom: 1310 },
    { value: 'N', mass: '959', moment: 2379, mtom: 1310 },
    { value: 'O', mass: '957', moment: 2371, mtom: 1310 },
    { value: 'P', mass: '958', moment: 2393, mtom: 1310 },
    { value: 'R', mass: '958', moment: 2390, mtom: 1310 },
    { value: 'T', mass: '950', moment: 2377, mtom: 1310 }
];

function myFunction(){
  var aplane = aircraftlist.find(x => x.value === document.getElementById("aircraft").value);
  var mass = aplane.mass;
  var moment = aplane.moment;
  var mtom = aplane.mtom;
  var aircraftnumber = 'G-CTS' + aplane.value;
  var frontSeat1 = document.getElementById("frontSeat1").value;
  var frontSeat2 = document.getElementById("frontSeat2").value;
  var backSeats = document.getElementById("backSeats").value;
  var baggage = document.getElementById("baggage").value;
  var fuel = document.getElementById("fuel").value;
  var fuelburn = document.getElementById("fuelburn").value;
  var emptyleverarm = roundToTwoTwo(moment/mass);
  var frontseatmass = roundToTwo(+frontSeat1 + +frontSeat2);
  var fronseatmoment = roundToTwo(frontseatmass * 2.3);
  var backseatmoment = roundToTwo(3.25 * backSeats);
  var baggagemoment = roundToTwo(3.65 * baggage);
  var zfmMass = roundToTwo(+mass + +frontseatmass + +backSeats + +baggage);
  var zfmMoment = roundToTwo(+moment + +fronseatmoment + +backseatmoment + +baggagemoment);
  var zfmleverarm = zfmMoment / zfmMass;
  var fuelmass = roundToTwo(fuel * 3.03);
  var fuelmoment = roundToTwo(fuelmass * 2.63);
  var tomMass = roundToTwo(+zfmMass + +fuelmass);
  var tomMoment = roundToTwo(+zfmMoment + +fuelmoment);
  var tomLeverarm = tomMoment / tomMass;
  var fuelburnmass = roundToTwo(3.03 * fuelburn);
  var fuelburnmoment = roundToTwo(fuelburnmass * 2.63);
  var lmMass = roundToTwo(tomMass - fuelburnmass);
  var lmMoment = roundToTwo(tomMoment - fuelburnmoment);
  var lmLeverarm = lmMoment / lmMass;

  document.getElementById('aircraftNumber').innerHTML = aircraftnumber;
  console.log(aircraftnumber)
  document.getElementById('mtom').innerHTML = 'MTOM: ' + mtom + ' kg';
  document.getElementById('empty_leverarm').innerHTML = emptyleverarm;
  document.getElementById('empty_mass').innerHTML = mass;
  document.getElementById('empty_moment').innerHTML = moment;

  document.getElementById('frontseats_mass').innerHTML = frontseatmass;
  document.getElementById('frontseats_moment').innerHTML = fronseatmoment;
  document.getElementById('rearseats_mass').innerHTML = ((backSeats == '0' || backSeats == '') ? '-' : backSeats);
  document.getElementById('rearseats_moment').innerHTML = ((backseatmoment == '0' || backseatmoment == '') ? '-' : backseatmoment);
  document.getElementById('stdbaggage_mass').innerHTML = baggage;
  document.getElementById('stdbaggage_moment').innerHTML = baggagemoment;

  document.getElementById('zfm_leverarm').innerHTML = roundToTwoTwo(zfmleverarm);
  document.getElementById('zfm_leverarm2').innerHTML = roundToThree(zfmleverarm);
  document.getElementById('zfm_mass').innerHTML = zfmMass;
  document.getElementById('zfm_moment').innerHTML = zfmMoment;
  document.getElementById('fuel_mass').innerHTML = fuelmass;
  document.getElementById('fuel_moment').innerHTML = fuelmoment;
  document.getElementById('tom_leverarm').innerHTML = roundToTwoTwo(tomLeverarm);
  document.getElementById('tom_leverarm2').innerHTML = roundToThree(tomLeverarm);
  document.getElementById('tom_mass').innerHTML = tomMass;
  document.getElementById('tom_moment').innerHTML = tomMoment;
  document.getElementById('fuelburn_mass').innerHTML = fuelburnmass;
  document.getElementById('fuelburn_moment').innerHTML = fuelburnmoment;
  document.getElementById('lm_leverarm').innerHTML = roundToTwoTwo(lmLeverarm);
  document.getElementById('lm_leverarm2').innerHTML = roundToThree(lmLeverarm);
  document.getElementById('lm_mass').innerHTML = lmMass;
  document.getElementById('lm_moment').innerHTML = lmMoment;

}

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

function roundToTwo(num) {
    return +(Math.round(num + "e+1")  + "e-1");
}

function roundToTwoTwo(num) {
    return +(Math.round(num + "e+2")  + "e-2");
}

function roundToThree(num) {
    return +(Math.round(num + "e+3")  + "e-3");
}
