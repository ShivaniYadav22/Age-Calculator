const today = new Date();

const todayDate  = today.getDate();
const todayMonth = today.getMonth() + 1 ;
const todayYear = today.getFullYear();



var ageDate;
var ageMonth;
var ageYear;

function Age() {
  var date = document.querySelector('.day').value;
  var month = document.querySelector('.month').value;
  var year = document.querySelector('.year').value;
  // sample born date 16/06/2000
  // sample today's date 06/05/2023

  if(date == 0 || month == 0 || year == 0) {
    document.querySelector('.p-day').innerHTML = 'This field is required';
      document.querySelector('.p-month span').innerHTML = "This field is required";
      document.querySelector('.p-year span').innerHTML = "This field is required";

  }else{
    ageYear = todayYear - year; // 2023 - 2000 = 23


      if(todayMonth < month) {
        ageYear--; // if 5 < 6 (month born) then that year is not completed so reduce 1 year from the age so this becomes 22
          // ageYear = 22
        ageMonth = 12 + todayMonth - month; // add 12 because of the 12 months in a year and then add the current month and reduce the month born
        // ageMonth = 12+ 5 - 6 = 11
      }else {
        ageMonth = todayMonth - month;
      }

    if(todayDate < date) { // 6 < 16
      ageMonth--;  // month not completed so we will reduce the 1 month which is 11 previously so now it is 10
      //ageMonth = 10
      ageDate = 31 + todayDate - date; // total no.of days in a month 30 or 31 add to todays date and sub by born Date
      //ageDate = 31 + 6 -16 = 21

      if (ageMonth < 0) { // if the ageMonth becomes -ve then the month will be 11 and year will be reduced by 1
        ageMonth = 11;
        ageYear--;
      }
    }else {
      ageDate = todayDate - date;
    }



    console.log(ageDate);
    console.log(ageMonth);
    console.log(ageYear);

    document.querySelector('.resultYear').innerHTML = ageYear;
      document.querySelector('.resultMonth').innerHTML = ageMonth;
        document.querySelector('.resultDay').innerHTML = ageDate;
  }

}

//
// function Invalid(){
//
//    console.log("none")
// }
