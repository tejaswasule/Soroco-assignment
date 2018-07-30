'use strict';

var cgpa_data = [
  {"count": 1, "cgpa": 1},
  {"count": 2, "cgpa": 2},
  {"count": 10, "cgpa": 3},
  {"count": 10, "cgpa": 4},
  {"count": 16, "cgpa": 5},
  {"count": 40, "cgpa": 6},
  {"count": 60, "cgpa": 7},
  {"count": 65, "cgpa": 8},
  {"count": 40, "cgpa": 9},
  {"count": 5, "cgpa": 10}
];

var top_schools_data = [
  {"school":"IIIT Bengaluru" , "applicant":52},
  {"school":"IIT Hyderabad","applicant":50},
  {"school":"IIIT Hyderabad","applicant":47},
  {"school":"IIT Chennai","applicant":46},
  {"school":"Harvard University","applicant":16},
  {"school":"MIT","applicant":12},
  {"school":"Carnegie Mellon","applicant":12},
  {"school":"LSE","applicant":11},
  {"school":"Columbia University","applicant":10}
];

$(".button-collapse").sideNav();

(function(){

  sortTopSchoolsData();//NOT required for above hardcoded data
  setSchoolDataOnView();
  

  var XAxisData=[];
  var YAxisData=[];
      
  setHistogramData();
  setHistogram();

  
  /**
   * function to set sorted school data on View
   */
  function setSchoolDataOnView(){
    var schoolData = "";
    $.each(top_schools_data, function( key, value ) {
      schoolData = schoolData + "<tr>"+"<td>" + value.school + "</td>" + "<td>" + value.applicant + "</td>" +"</tr>";
    });
    $("#college-table-content").html(schoolData);
  }


  /**
   * function to sort top_school_data in case data is NOT sorted
   * 
   */
  
   function sortTopSchoolsData(){

    top_schools_data.sort(function(a, b){
      
      return b.applicant-a.applicant
    });
  }  
  /**
  * function to gather required data for Histogram 
  */
    function setHistogramData(){
      XAxisData=[];
      YAxisData=[];
      $.each(cgpa_data, function( key, value ) {
        XAxisData.push(value.count);
        YAxisData.push(value.cgpa);
      });
    }

    function setHistogram(){
      var chart = document.getElementById("card3-content");
      Chart.defaults.scale.gridLines.display = false;
      Chart.defaults.global.animation.duration = 200;
      var barChart = new Chart(chart,{
        type:'bar',
        options: {
          legend: { display: false },
          scales: {
            yAxes: [{
            display: false
            }],
          }
        },
        data :{
        labels: YAxisData,
        datasets:[
          {
            data:XAxisData,
            borderWidth : "0",
            hoverBorderColor : "#000",
            backgroundColor: "#A9D6F8"

          }
        ],
    }
});
   

  }

}());
