$(document).ready(function () {
  var date = $(".date");
  var inputForm = $(".inputs");
  var hours = ["7 am", "8 am", "9 am", "10 am", "11 am", "12 pm", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm"];
  var currentHour = moment().format("H");

  date.text(moment().format("llll"));

  for (let i = 0; i < hours.length; i++) {
    let time = parseInt(hours[i]) + 12;

    let timeGroup = $("<div>");
    let timeBlock = $("<input>");
    let hourBlock = $("<div>");
    let buttonBlock = $("<div>");
    let saveButton = $("<button>");
    let saveImage = $("<i>");

    timeGroup.addClass("input-group mb-3");
    timeBlock.addClass("form-control").attr("type", "text");
    hourBlock.addClass("input-group-prepend input-group-text").text(hours[i]);
    buttonBlock.addClass("input-group-append");
    saveButton.addClass("btn btn-primary save-button");
    saveImage.addClass("material-icons").text("save");

    if (time > currentHour) {
      timeBlock.addClass("future");
    } else if (time < currentHour) {
      timeBlock.addClass("past");
    } else {
      timeBlock.addClass("present");
    }

    if(localStorage.getItem(hours[i])) {
        timeBlock.val(localStorage.getItem(hours[i]))
    }



    saveButton.append(saveImage);
    buttonBlock.append(saveButton);
    timeGroup.append(hourBlock, timeBlock, buttonBlock);
    inputForm.append(timeGroup);



  }

  $(document).on("click", ".save-button", function(e){
      e.preventDefault();
      let timeBlockValue = $(this).parents(".input-group-append").siblings("input").val();
      let hourBlockValue = $(this).parents(".input-group-append").siblings(".input-group-text").text();

      localStorage.setItem(hourBlockValue, timeBlockValue);
  })
});
