function addItem(){
    let title = $("#titlenput").val();
    
    //verifying if the form is not empty
    if (title.length === 0){
        $("#errorMsg").attr("hidden",false);
    } else {
        //getting value from the type select form
        let item = $("#itemInput").val();
        //getting value from size select form
        let price = $("#priceInput").val();

         //preparing request
         const data = {title, item, price};
         const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },    
            body:  JSON.stringify(data)
         }
         fetch("/item", options)
            .then(window.location.reload());
    }
}


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









// function draw_table()
// {
// 	$("#results").empty();
// 	$.getJSONuncached = function (url)
// 	{
// 		return $.ajax(
// 		{
// 			url: url,
// 			type: 'GET',
// 			cache: false,
// 			success: function (html)
// 			{
// 				$("#results").append(html);
// 				select_row();
// 			}
// 		});
// 	};
// 	$.getJSONuncached("/get/html")
// };

// function select_row()
// {
// 	$("#menuTable tbody tr[id]").click(function ()
// 	{
// 		$(".selected").removeClass("selected");
// 		$(this).addClass("selected");
// 		var section = $(this).prevAll("tr").children("td[colspan='3']").length - 1;
// 		var entree = $(this).attr("id") - 1;
// 		delete_row(section, entree);
// 	})
// };

// function delete_row(sec, ent)
// {
// 	$("#delete").click(function ()
// 	{
// 		$.ajax(
// 		{
// 			url: "/post/delete",
// 			type: "POST",
// 			data:
// 			{
// 				section: sec,
// 				entree: ent
// 			},
// 			cache: false,
// 			success: setTimeout(draw_table, 1000)
// 		})
// 	})
// };

// $(document).ready(function ()
// {
// 	draw_table();
// });