function getCourseInfo() {
  var courseName = document.getElementById("courseName").value;
  var startTime = document.getElementById("startTime").value;
  var endTime = document.getElementById("endTime").value;
  var day = document.getElementById("day").value;
  var repeat = document.getElementById("repeat").value;
  var courseSchedule = [courseName, startTime, endTime, day, repeat];
}

function getWorkInfo() {
  var workStartTime = document.getElementById("workStartTime").value;
  var workEndTime = document.getElementById("workEndTime").value;
  var workDay = document.getElementsById("day").value;
  var repeat = document.getElementById("repeat").value;
  var workSchedule = [workStartTime, workEndTime, workDay, repeat];
}

function getTask() {
  var taskName = document.getElementById("taskName").value;
  var taskTimeEst = document.getElementById("taskTimeEst").value;
  var dailyTask = [taskName, taskTimeEst];
}
