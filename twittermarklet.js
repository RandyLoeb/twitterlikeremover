window.setInterval(function () {
  var tempList1 = document.getElementsByTagName("span");
  var tempList2 = document.getElementsByTagName("div");
  for (i = 0; i <= tempList1.length; i++) {
    try {
      if (tempList1[i].innerHTML.includes("liked")) {
        tempList1[i].closest("article").style.display = "none";
      }
    } catch {}

    try {
      if (tempList1[i].innerHTML.includes("received a reply")) {
        tempList1[i].closest(
          "article"
        ).parentNode.parentNode.parentNode.parentNode.parentNode.nextElementSibling.style.display =
          "none";
      }
    } catch {}

    try {
      const regex = /and \d+ others follow/g;
      if (tempList1[i].innerHTML.match(regex)) {
        tempList1[i].closest("article").style.display = "none";
      }
    } catch {}

    try {
      if (tempList1[i].innerHTML.includes("follows")) {
        tempList1[i].closest("article").style.display = "none";
      }
    } catch {}
  }

  for (i = 0; i <= tempList2.length; i++) {
    try {
      if (tempList2[i].innerHTML.includes("Replying to")) {
        var targetArticle = tempList2[i].closest("article");
        var articleOk = false;
        var targetArticleDivs = targetArticle.getElementsByTagName("div");

        for (j = 0; j <= targetArticleDivs.length; j++) {
          try {
            if (
              targetArticleDivs[j].hasAttribute("role") &&
              targetArticleDivs[j].getAttribute("role") == "blockquote"
            ) {
              articleOk = true;
            }
          } catch {}
        }
        if (!articleOk) {
          targetArticle.style.display = "none";
        }
      }
    } catch {}
  }
}, 10000);
