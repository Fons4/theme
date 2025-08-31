(function() {
  let cursor = document.createElement("div");
  cursor.style.width = "24px";
  cursor.style.height = "24px";
  cursor.style.position = "fixed";
  cursor.style.zIndex = "99999";
  cursor.style.pointerEvents = "none";
  cursor.style.background = "url('https://cdn-icons-png.flaticon.com/512/616/616408.png') no-repeat center";
  cursor.style.backgroundSize = "contain";
  document.body.appendChild(cursor);

  document.addEventListener("mousemove", function(e) {
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
  });
})();
