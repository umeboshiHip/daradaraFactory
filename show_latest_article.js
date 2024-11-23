var articlesPath = "./article/articles.json";
var MainContents = document.getElementsByClassName("main_contents");

window.onload = function() {
    fetch(articlesPath)
        .then((r) => {
            return r.json();
        })
        .then((result) => {
            OpenData(result);
        })
        .catch((e) => {
            console.log(e);
        })
}

function OpenData(r) {
    r.sort((a, b) => new Date(a.date) - new Date(b.date));

    const mainContentElement = MainContents[0];

    for(var i = 0; i < r.length; i++) {
        let articleDate = r[i].date;
        let articlePath = r[i].path;
    
        fetch(articlePath)
        .then(response => response.text())
        .then(htmlString => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(htmlString, "text/html");

            console.log(doc)

//            const description = doc.querySelector('meta[name="description"]')?.content; //サイトの説明取得
            var description = doc.body.getElementsByClassName("main_contents");
            console.log(description[0].innerText)
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