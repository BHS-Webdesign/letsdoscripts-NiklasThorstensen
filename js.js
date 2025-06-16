
var LIST = [
    {
        title:"Back in Mid-May, 2 people fought over some...",
        class:"f1",
        chrs:[
            "mainchar",
            "rival",
            "flintandsteel",
            "deadguy"
        ],
        words:[
            "Flint and Steel!",
            "No shut up",
            "Flint and Steel!",
            "i am ded"
        ]
    },
    {
        title:"And this green dude won, but he also picked up...",
        class:"f2",
        chrs:[
            "mainchar",
            "AnEnderPearl",
            "rival"
        ],
        words:[
            "An Ender Pearl.",
            "???????",
            "AAAAAAAAAA"
        ]
    },
    {
        title:"And he ends up finding an already finished portal to...",
        class:"f3",
        chrs:[
            "mainchar",
            "AnEnderPearl"
        ],
        words:[
            "G",
            "blanktext"
        ]
    },
    {
        title:"Uhhh... Dude?",
        class:"f4",
        chrs:[  
            "nether"
        ],
        words:[
            "Nevermind, forgot the brainrot's already old"
        ]
    },
    {
        title:"the_end",
        class:"f5",
        chrs:[
            "theEnd"
        ],
        words:[
            "The End"
        ]
    }
];

var dance = function(x, dunno){

    var blocks =  document.querySelector(x);

    for(var i = 0; i < dunno.length; i++){
        var placing = blocks.cloneNode(true);
        placing.innerHTML = dunno[i].title;
        placing.classList.add(dunno[i].class);
        placing.classList.add("blocks");

        for(var c = 0; c< dunno[i].chrs.length; c++){
            var chrHTML = document.querySelector("#placers .chr").cloneNode(true);
            var talkHTML = chrHTML.querySelector(".talk");
            //chrHTML.innerHTML = dunno[i].chrs[c];
            chrHTML.classList.add(dunno[i].chrs[c]);
            chrHTML.classList.add("chr");
            talkHTML.innerHTML = dunno[i].words[c];

            placing.append(chrHTML);
        }

        document.body.append(placing);
    }
}

dance("#placers .frame", LIST);

var inHtml = function(x){
    document.querySelector("div#innerHTMLFUN").innerHTML = x;
}
inHtml("I have no idea what i am even doing here anymore or what to type here so 1234567890qwertyuiopasdfghjklzxcvbnmI..amSteveQWERTYUIOPASDFGHKLZXCVBNM123");

var draw = function(x){
    var target = document.getElementById(target);
    var stuffshowin = "";
    for(
        var count = 0;
        count < x.length;
        count++
    ){
        alert("!!!!!!!!!FRAME!!!!!!!!!");
        var nextList = x[count]
        for(var i = 0; i < nextList.length; i++){
            alert(nextList[i]);
            target.innerHTML = stuffshowin += nextList[i];
        }
    }
}
//draw(LIST);