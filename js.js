
var LIST = [
    [
        "someone",
        "whoever",
        "dude what"
    ],
    [
        "someone"
    ],
    [
        "huh"
    ]
];

var dance = function(x, dunno){
    var blocks =  document.getElementById(x);
    for(var i = 0; i < dunno; i++){
        var placing = blocks.cloneNode(true);
        document.body.append(placing);
    }
}

dance("placing", 7);

var inHtml = function(x){
    document.querySelector("div#innerHTMLFUN").innerHTML = x;
}
inHtml("EYYAAAAAAAAAXXXXXX");


var draw = function(x){
    var target = document.getElementById(hitme);
    var stuffshowin = "";
    for(
        var count = 0;
        count < x.length;
        count++
    ){
        alert("!!!!!!!!!FUREMU!!!!!!!!!");
        var nextList = x[count]
        for(var i = 0; i < nextList.length; i++){
            alert(nextList[i]);
            target.innerHTML = stuffshowin += nextList[i];
        }
    }
}
//draw(LIST);