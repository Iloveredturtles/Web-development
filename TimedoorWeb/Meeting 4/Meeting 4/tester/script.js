var genres = ["test", "test 1", "test 2", "test 3"];
var testing = ["hallo", "word", "tester"];
//for loop
for (i = 0; i < genres.length; i++) {
  document.write("I choose " + genres[i] + "<br>");
  console.log("testing");
}
document.write("<br> ");
//for each
testing.forEach(function (i) {
  document.write("I choose " + i + "<br>");
});
