// var apiKey = require('./../.env').apiKey;
var DoctorData = require('./../js/doctor.js').doctorModule;
var displayDoctors = function(medicalIssue, doctorEntry){
  doctorEntry.forEach(function(entry){
    $('#showDoctors').append("<li>Full name:" + entry.profile.first_name + ' ' + entry.profile.last_name + "<br>" + entry.specialties[0].name + "</li>" + "<p class='lead'>" + entry.profile.bio + "</p><div class='col-lg-5 col-sm-pull-6  col-sm-6'><img class='img-responsive doc-profile' src=" + entry.profile.image_url + ">"+ "</div>"
    );
  });
};

$(document).ready(function() {
  var currentDoctorData = new DoctorData();
  $('#search-form').submit(function(event){
    event.preventDefault();
    var medicalIssue = $('#condition-input').val();
    $('#condition-input').val("");
    currentDoctorData.getDoctor(medicalIssue,displayDoctors);
  });
});
