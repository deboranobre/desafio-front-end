const imagesSize = {large: 464, regular: 216}

$.getJSON( "../../data.json", function( data ) {
    let [mainNews, brazilNews, worldNews] = data.section;
    setMainNewsSection(mainNews);
    setNewsSection(brazilNews);
    setNewsSection(worldNews);
});

let setMainNewsSection = (news) => {
    let data = {name: news.name, large: [], medium: [], small: []};

    for (let [key, value] of Object.entries(news.data)) {
        if(key == 0 || key == 1){
            data.large.push(value);
        }else if(key == 2 || key == 3){
            data.medium.push(value);
        }else{
            data.small.push(value);
        }
    }

    setNewsSection(data);       
}

let setNewsSection = (news) => {
    var template = $(`#${news.name.toLowerCase()}-wrapper`).html();
    Mustache.parse(template);
    var rendered = Mustache.render(template, news);
    $(`#${news.name.toLowerCase()}-content`).html(rendered);
}

$( document ).ready(function() {
    $("#brasil-content div:gt(4)").hide();
    $("#mundo-content div:gt(4)").hide();

    $("#brasil-more").click(() => {
        $("#brasil-content div:gt(4)").toggle();
    });

    $("#world-more").click(() => {
        $("#mundo-content div:gt(4)").toggle();
    });
});