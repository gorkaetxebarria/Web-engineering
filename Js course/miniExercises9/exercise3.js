function countTags() {
  let tagName = document.getElementById("tags").value;
  let countTags = document.getElementsByTagName(tagName).length;
  document.getElementById("writeMe").innerHTML = "There are "+countTags+" '"+tagName+"' tags";
}