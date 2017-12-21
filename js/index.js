var url = "https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?";
var quote, author;

function getQuote() {

  $.getJSON(url, function (data) {
    //console.log(data);
    author = "";quote = "";
    var q = "",
        qA,
        q1 = "",
        q2 = "",
        q3 = "",
        q4 = "",
        q5 = "",
        q6 = "";

    author = data.quoteAuthor;
    quote = data.quoteText;
    if (author === "") {
      author = "Unknown";
    }
    //logic for string length adjustment
    q = quote.toString();
    qA = q.split(" ");
    for (var i = 0; i < qA.length; i++) {
      if (i < 7) q1 += qA[i] + " ";else if (i < 14) q2 += qA[i] + " ";else if (i < 21) q3 += qA[i] + " ";else if (i < 28) q4 += qA[i] + " ";else if (i < 35) q5 += qA[i] + " ";else q6 += qA[i] + " ";
    }

    q2 === "" ? q1 += "&#8221;<tspan id='q16' x='20' y='210'>" + "~ " + author + "</tspan>" : q3 === "" ? q2 += "&#8221<tspan id='q16' x='20' y='250'>" + "~ " + author + "</tspan>" : q4 === "" ? q3 += "&#8221;<tspan id='q16' x='20' y='290'>" + "~ " + author + "</tspan>" : q5 === "" ? q4 += "&#8221;<tspan id='q16' x='20' y='330'>" + "~ " + author + "</tspan>" : q6 === "" ? q5 += "&#8221;<tspan id='q16' x='20' y='370'>" + "~ " + author + "</tspan>" : q6 += "&#8221;<tspan id='q16' x='20' y='410'>" + "~ " + author + "</tspan>";

    $('#q11').html("&#8220; " + q1);
    $('#q12').html(q2);
    $('#q13').html(q3);
    $('#q14').html(q4);
    $('#q15').html(q5);
    $('#q17').html(q6);
    $('#setQuote').fadeIn(1000);
    //$('#q16').html("~ "+author);
    $('#twitter-link').attr('href', 'https://twitter.com/intent/tweet?hashtags=quote&related=freecodecamp&text=' + encodeURIComponent('"' + quote + '" -' + author));
  });
}
$(document).ready(function () {
  $('#setQuote').hide();
  getQuote();
  var col = 1;
  $('#getQuote').on("click", function () {
    $('#setQuote').hide();
    getQuote();
    col % 3 === 0 ? $('#window').css("fill", "#000") : $('#window').css("fill", "#cc5200");
    col++;if (col === 3) col = 0;
  });
});