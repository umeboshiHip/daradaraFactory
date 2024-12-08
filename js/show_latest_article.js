var articlesPath = "./article/articles.json";
var MainContents = document.getElementsByClassName("main_contents");

var siteIndex = 0;
var aNumOfOnePage = 10;

var articleData;

window.onload = function() {
    fetch(articlesPath)
        .then((r) => {
            return r.json();
        })
        .then((result) => {
            OpenData(result, 0);
        })
        .catch((e) => {
            console.log(e);
        })
}

function OpenData(r, _i) {
    r.sort((a, b) => new Date(a.date) - new Date(b.date));
    articleData = r;

    console.log(r)

    const mainContentElement = MainContents[0];

    for(var i = _i; i < aNumOfOnePage+_i; i++) {
        if(r[i] == undefined) {
            break;
        }

        let articleDate = r[i].date;
        let articlePath = r[i].path;
    
        fetch(articlePath)
        .then(response => response.text())
        .then(htmlString => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(htmlString, "text/html");

            const description = doc.querySelector('meta[name="description"]')?.content; //サイトの説明取得
            const title = doc.title;    //サイトのタイトル取得

            mainContentElement.innerHTML += `
                <div class="article">
                    <a href="${articlePath}"> 
                        <span class="article_title">${title}</span>
                        <p class="article_date"><i class="fa-solid fa-clock"></i><strong>${articleDate}</strong></p>
                        <p class="article_description">${description}</p>
                    </a>
                </div>
            `;
        })
        .catch((e) => {
            console.log(e);
        }) 
    }
}