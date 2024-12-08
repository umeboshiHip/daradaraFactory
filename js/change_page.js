window.onload = checkCanMovePage();

var nPageLink, pPageLink;

function checkCanMovePage() {
    pPageLink = document.getElementsByClassName("to_previouspage");
    nPageLink = document.getElementsByClassName("to_nextpage");

    if(siteIndex == 0) {
        pPageLink[0].style.display = "none";
    } else {
        pPageLink.innerText = "前のページへ";
    }

    if(siteIndex > articleData.length) {
        nPageLink[0].style.display = "none";
    } else {
        nPageLink.innerText = "次のページへ";
    }
}

function previousPage() {
    if(siteIndex > 0) {
        siteIndex--;
        MainContents[0].innerHTML = "";
        OpenData(articleData, siteIndex*10);
        window.scroll(0, 0);

        checkCanMovePage()
    } else {
        alert("このページに乗っている記事が最新の記事です。")
    }
}

function nextPage() {
    if(articleData.length > (siteIndex+1)*10) {
        siteIndex++;
        MainContents[0].innerHTML = "";
        OpenData(articleData, siteIndex*10);
        window.scroll(0, 0);

        checkCanMovePage()
    } else {
        alert("このページに乗っている記事が一番古い記事です。")
    }
}