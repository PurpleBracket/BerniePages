$(document).foundation();

// Papa.parse("http://localhost:8000/assets/csv/data.csv", {
// 	download: true,
//   header: true,
//   dynamicTyping: true,
// 	step: function(row) {
// 	},
// 	complete: function(results) {
//     console.log(results.data);
// 	}
// });


// function doStuff(data) {
//     //Data is usable here
//     console.log(data);
//
//     var html = "<table border='1|1'>";
//     for (var i = 0; i < data.length; i++) {
//         html+="<tr>";
//         html+="<td>"+ (i + 1) +"</td>";
//         html+="<td>"+data[i].Followers+"</td>";
//         html+="<td>"+data[i].PageName+"</td>";
//         html+="<td>"+data[i].Category+"</td>";
//         html+="<td>"+data[i].PageID+"</td>";
//
//         html+="</tr>";
//     }
//     html+="</table>";
//     $("#data").html(html);
// }
function parseData(url, callBack) {
    Papa.parse(url, {
    	download: true,
      header: true,
      complete: function(results) {
          callBack(results.data);
      }
  });
}

parseData("assets/csv/data.csv", doStuff);

function doStuff(data) {
    //Data is usable here
    console.log(data);

    var html;
    for (var i = 0; i < 50; i++) {
        html+='<div class="fb-page" data-href="https://www.facebook.com/'+data[i].PageID+'" data-small-header=false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false"><div class="fb-xfbml-parse-ignore"><blockquote cite="https://www.facebook.com/'+data[i].PageID+'"><a href=https://www.facebook.com/'+data[i].PageID+'"></a></blockquote></div></div>';
        // html+="<td>"+ (i + 1) +"</td>";
        // html+="<td>"+data[i].Followers+"</td>";
        // html+="<td>"+data[i].PageName+"</td>";
        // html+="<td>"+data[i].Category+"</td>";
        // html+="<td>"+data[i].PageID+"</td>";

        // html+="</tr>";
    }
    // html+="</table>";
    $("#data").html(html);
}
