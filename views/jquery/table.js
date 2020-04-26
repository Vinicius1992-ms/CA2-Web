function select_row()
{
	$("#myTable tbody tr[id]").click(function ()
	{
		$(".selected").removeClass("selected");
		$(this).addClass("selected");
		var CCTcafe = $(this).prevAll("tr").children("td[colspan='3']").length - 1;
        var cd = $(this).attr("id")-1;
        console.log(CCTcafe);
		delete_row(CCTcafe);
	})
};


function validationForm() {
  var title = document.forms["myForm"]["title"].value;

  var item = document.forms["myForm"]["item"].value;

  var price = document.forms["myForm"]["price"].value;

  if (item == "") {
    alert("item field has to be filled");
    return false;
}

else if (price == "") {
    alert("price field has to be filled");
    return false;
}

}





