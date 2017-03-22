var apiKey = require('./../.env').apiKey;

DoctorData = function(){

};

DoctorData.prototype.getDoctor = function(medicalIssue, displayDoctors){

  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue +'&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=2&user_key=' + apiKey)
  .then(function(response){
    console.log(response);
    displayDoctors(medicalIssue, response.data);

  }).fail(function(error){
    console.log("fail");
  });
};

exports.doctorModule = DoctorData;
//query for list of specialities:  https://api.betterdoctor.com/2016-03-01/specialties?user_key=

// https://api.betterdoctor.com/2016-03-01/doctors?query=toothache&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=1&user_key=c62784b962f978cfe0691e677aa67371
