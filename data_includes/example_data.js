var shuffleSequence = seq("setcounter","intro","practice", "presep", sepWith("sep", rshuffle(startsWith("A"),startsWith("V"), startsWith("C"), "F")), "exit");
var practiceItemTypes = ["practice"];

//var progressBarText = "Your current progress"
//var completionMessage = "数据传送完毕。 非常感谢您的参与！"


var defaults = [
    "Separator", {
        transfer: 800,
        normalMessage: "",
    },

    "AcceptabilityJudgment", {
        as: ["1", "2", "3", "4", "5"],
        presentAsScale: true,
        q: "How acceptable is this sentence? Use number keys or click boxes to answer.",
        instructions: "Whenever you see '[i]' in a sentence, you must interpret the sentence in such a way that everything indexed with '[i]' covaries with each other.",
        leftComment: "(Completely unacceptable)", rightComment: "(Completely acceptable)"
    },

    "Message", {
        hideProgressBar: true
    },
    "Form", {
        hideProgressBar: true,
        continueOnReturn: true,
        saveReactionTime: true,
        continueMessage: "Please press here to continue"
    }
];

var aj = "AcceptabilityJudgment";
var items = [

["setcounter", "__SetCounter__", { }],

["intro", "Form", {consentRequired: true, html: {include: "intro.html" }} ],
["intro", "Form", {consentRequired: true, html: {include: "intro1.html" }} ],
["intro", "Form", {consentRequired: true, html: {include: "intro2.html" }} ],
["intro", "Form", {consentRequired: true, html: {include: "intro3.html" }} ],
["exit", "Form", {consentRequired: false, html: {include: "exit.html" }} ],



["sep", Separator, { }],
    ["practice", aj, {s: "John wonders that Mary is a singer."}],
    
    ["practice", aj, {s: "John wonders if Mary is a singer."}],
    
    ["practice", "Message", {consentRequired: false, transfer: "keypress",
                    html: ["div",
                          ["p", "Whenever you see '[i]' in a sentence, you must interpret the sentence in such a way that everything indexed with '[i]' covaries with each other."],
                          ["p", "Take the sentence 'Every boy[i] likes his[i] mother.' for example."],
                          ["p", "In this case, you must interpret this sentence as 'for every x, x a boy, x likes x's mother.', and then give your acceptability judgement."],
                          ["p", "Press the spacebar to continue."]
                          ]}],
                          
    ["practice", aj, {s: "Every boy[i] likes his[i] mother.",
                      instructions: "Whenever you see '[i]', you must read the sentence in the way \n that everything indexed with '[i]' covaries with each other. Here, you must take the reading 'for every x, x a boy, x likes x's mother.'"}],
    
    ["practice", aj, {s: "His[i] mother like every boy[i].",
                      instructions: "Whenever you see '[i]', you must read the sentence in the way that everything indexed with '[i]' covaries with each other. Here, you must take the reading 'for every x, x a boy, x's mother likes x.'"}],
                      
    ["practice", "Message", {consentRequired: false, transfer: "keypress",
                    html: ["div",
                          ["p", "The practice session is over now. You will start the experiment now. There is no right or wrong answer. Go with your instinct. Pleae press the spacebar to continue"],
                          ]}],


    ["presep", Separator, { transfer: 2000, normalMessage: "Please get ready. We will start. Please wait..." }],


["A-N-W-G", aj, {s: "Which picture of himself[i] did Mary think John[i] saw?"}],
["A-N-R-G", aj, {s: "This is the picture of himself[i] that Mary thought John[i] saw."}],
["A-N-T-G", aj, {s: "This picture of himself[i], Mary thought John[i] saw."}],
["A-N-W-R", aj, {s: "Which picture of himself[i] did Mary think John[i] saw it?"}],
["A-N-R-R", aj, {s: "This is the pciture of himself[i] that Mary thought John[i] saw it."}],
["A-N-T-R", aj, {s: "This picture of himself[i], Mary thought John[i] saw it."}],

["A-W-W-G", aj, {s: "Which picture of himself[i] did Mary wonder whether John[i] saw?"}],
["A-W-R-G", aj, {s: "This is the picture of himself[i] that Mary wondered whether John[i] saw."}],
["A-W-T-G", aj, {s: "This picture of himself[i], Mary wondered whether John[i] saw."}],
["A-W-W-R", aj, {s: "Which picture of himself[i] did Mary wonder whether John[i] saw it?"}],
["A-W-R-R", aj, {s: "This is the picture of himself[i] that Mary wondered whether John[i] saw it."}],
["A-W-T-R", aj, {s: "This picture of himself[i], Mary wondered whether John[i] saw it."}],

["A-C-W-G", aj, {s: "Which picture of himself[i] did Mary make the claim that John[i] saw?"}],
["A-C-R-G", aj, {s: "This is the picture of himself[i] that Mary made the claim that John[i] saw."}],
["A-C-T-G", aj, {s: "This picture of himself[i], Mary made the claim that John[i] saw."}],
["A-C-W-R", aj, {s: "Which picture of himself[i] did Mary make the claim that John[i] saw it?"}],
["A-C-R-R", aj, {s: "This is the picture of himself[i] that Mary made the claim that John[i] saw it."}],
["A-C-T-R", aj, {s: "This picture of himself[i], Mary made the claim that John[i] saw it."}],

["A-A-W-G", aj, {s: "Which picture of himself[i] did Mary get upset because John[i] saw?"}],
["A-A-R-G", aj, {s: "This is the picture of himself[i] that Mary got upset because John[i] saw."}],
["A-A-T-G", aj, {s: "This picture of himself[i], Mary got upset because John[i] saw."}],
["A-A-W-R", aj, {s: "Which picture of himself[i] did Mary get upset because John[i] saw it?"}],
["A-A-R-R", aj, {s: "This is the picture of himself[i] that Mary got upset because John[i] saw it."}],
["A-A-T-R", aj, {s: "This picture of himself[i], Mary got upset because John[i] saw it."}],

["A-R-W-G", aj, {s: "Which picture of himself[i] did Mary know a boy[i] who saw?"}],
["A-R-R-G", aj, {s: "This is the picture of himself[i] that Mary knew a boy[i] who saw."}],
["A-R-T-G", aj, {s: "This picture of himself[i], Mary knew a boy[i] who it worried."}],
["A-R-W-R", aj, {s: "Which picture of himself[i] did Mary know a boy[i] who saw it?"}],
["A-R-R-R", aj, {s: "This is the picture of himself that Mary knew a boy[i] who saw it."}],
["A-R-T-R", aj, {s: "This picture of himself[i], Mary knew a boy[i] who saw it."}],

["V-N-W-G", aj, {s: "Which girl in his[i] class did every teacher[i] think you liked?"}],
["V-N-R-G", aj, {s: "This is the girl in his[i] class that every teacher[i] thought you liked."}],
["V-N-T-G", aj, {s: "This girl in his[i] class, every teacher[i] thought you liked."}],
["V-N-W-R", aj, {s: "Which girl in his[i] class did every teacher[i] think you liked her?"}],
["V-N-R-R", aj, {s: "This is the girl in his[i] class that every teacher[i] thought you liked."}],
["V-N-T-R", aj, {s: "This girl in his[i] class, every teacher[i] thought you liked her."}],

["V-W-W-G", aj, {s: "Which girl in his[i] class did every teacher[i] wonder whether you liked?"}],
["V-W-R-G", aj, {s: "This is the girl in his[i] class that every teacher[i] wondered whether you liked."}],
["V-W-T-G", aj, {s: "This girl in his[i] class, every teacher[i] wondered whether you liked."}],
["V-W-W-R", aj, {s: "Which girl in his[i] class did every teacher[i] wonder whether you liked her?"}],
["V-W-R-R", aj, {s: "This is the girl in his[i] class that every teacher[i] wondered whether you liked."}],
["V-W-T-R", aj, {s: "This girl in his[i] class, every teacher[i] wondered whether you liked her."}],

["V-C-W-G", aj, {s: "Which girl in his[i] class did every teacher[i] make the claim that you liked?"}],
["V-C-R-G", aj, {s: "This is the girl in his[i] class that every teacher[i] made the claim that you liked."}],
["V-C-T-G", aj, {s: "This girl in his[i] class, every teacher[i] made the claim that you liked."}],
["V-C-W-R", aj, {s: "Which girl in his[i] class did every teacher[i] make the claim that you liked her?"}],
["V-C-R-R", aj, {s: "This is the girl in his[i] class that every teacher[i] made the claim that you liked."}],
["V-C-T-R", aj, {s: "This girl in his[i] class, every teacher[i] made the claim that you liked her."}],

["V-A-W-G", aj, {s: "Which girl in his[i] class did every teacher[i] get upset because you liked?"}],
["V-A-R-G", aj, {s: "This is the girl in his[i] class that every teacher[i] got upset because you liked."}],
["V-A-T-G", aj, {s: "This girl in his[i] class, every teacher[i] got upset because you liked."}],
["V-A-W-R", aj, {s: "Which girl in his[i] class did every teacher[i] get upset because you liked her?"}],
["V-A-R-R", aj, {s: "This is the girl in his[i] class that every teacher[i] got upset because you liked her."}],
["V-A-T-R", aj, {s: "This girl in his[i] class, every teacher[i] got upset because you liked her."}],

["V-R-W-G", aj, {s: "Which girl in his[i] class did every teacher[i] know a boy who liked?"}],
["V-R-R-G", aj, {s: "This is the girl in his[i] class that every teacher[i] knew a boy who liked."}],
["V-R-T-G", aj, {s: "This girl in his[i] class, every teacher[i] knew a boy who liked."}],
["V-R-W-R", aj, {s: "Which girl in his[i] class did every teacher[i] know a boy who liked her?"}],
["V-R-R-R", aj, {s: "This is the girl in his[i] class that every teacher[i] knew a boy who liked her."}],
["V-R-T-R", aj, {s: "This girl in his[i] class, every teacher[i] knew a boy who liked her."}],

["C-N-W-G", aj, {s: "Which picture of John[i] did he[i] think you saw?"}],
["C-N-R-G", aj, {s: "This is the picture of John[i] that he[i] thought you saw."}],
["C-N-T-G", aj, {s: "This picture of John[i], he[i] thought you saw."}],
["C-N-W-R", aj, {s: "Which picture of John[i] did he[i] think you saw it?"}],
["C-N-R-R", aj, {s: "This is the picture of John[i] that he[i] thought you saw it."}],
["C-N-T-R", aj, {s: "This picture of John[i], he[i] thought you saw it."}],

["C-W-W-G", aj, {s: "Which picture of John[i] did he[i] wonder whether you saw?"}],
["C-W-R-G", aj, {s: "This is the picture of John[i] that he[i] wondered whether you saw."}],
["C-W-T-G", aj, {s: "This picture of John[i], he[i] wondered whether you saw."}],
["C-W-W-R", aj, {s: "Which picture of John[i] did he[i] wonder whether you saw it?"}],
["C-W-R-R", aj, {s: "This is the picture of John[i] that he[i] wondered whether you saw it."}],
["C-W-T-R", aj, {s: "This picture of John[i], he[i] wondered whether you saw it."}],

["C-C-W-G", aj, {s: "Which picture of John[i] did he[i] make the claim that you saw?"}],
["C-C-R-G", aj, {s: "This is the picture of John[i] that he[i] made the claim that you saw."}],
["C-C-T-G", aj, {s: "This picture of John[i], he[i] made the claim that you saw."}],
["C-C-W-R", aj, {s: "Which picture of John[i] did he[i] make the claim that you saw it?"}],
["C-C-R-R", aj, {s: "This is the picture of John[i] that he[i] made the claim that you saw it."}],
["C-C-T-R", aj, {s: "This picture of John[i], he[i] made the claim that you saw it."}],

["C-A-W-G", aj, {s: "Which picture of John[i] did he[i] get upset because you saw?"}],
["C-A-R-G", aj, {s: "This is the picture of John[i] that he[i] got upset because you saw."}],
["C-A-T-G", aj, {s: "This picture of John[i], he[i] got upset because you saw."}],
["C-A-W-R", aj, {s: "Which picture of John[i] did he[i] get upset because you saw it?"}],
["C-A-R-R", aj, {s: "This is the picture of John[i] that he[i] got upset because you saw it."}],
["C-A-T-R", aj, {s: "This picture of John[i], he[i] got upset because you saw it."}],

["C-R-W-G", aj, {s: "Which picture of John[i] did he[i] know a boy who saw?"}],
["C-R-R-G", aj, {s: "This is the picture of John[i] that he[i] knew a boy who saw."}],
["C-R-T-G", aj, {s: "This picture of John[i], he[i] knew a boy who saw."}],
["C-R-W-R", aj, {s: "Which picture of John[i] did he[i] know a boy who saw it?"}],
["C-R-R-R", aj, {s: "This is the picture of John[i] that he[i] knew a boy who saw it."}],
["C-R-T-R", aj, {s: "This picture of John[i], he[i] knew a boy who saw it."}],

["F", aj, {s: "Which picture of John has been hanging on the wall for so long?"}],
["F", aj, {s: "This is the picture of John, and it has been taken at a long time."}],
["F", aj, {s: "This picture of John, I would never recommends you seen it."}],
["F", aj, {s: "Which picture of John is the best ones taken so far today?"}],
["F", aj, {s: "This is the picture of John and the only picture he loves."}],
["F", aj, {s: "This picture of John are what makes everyone satisfied."}],
["F", aj, {s: "Which picture of John would you like to buy out of all these?"}],
["F", aj, {s: "This is the picture of John that everyone wants to have one"}],
["F", aj, {s: "This picture of John can bring fame and fortune to anyone who sees it."}],
["F", aj, {s: "Which picture of John have being on displays recent days those week?"}],
["F", aj, {s: "This is the picture of John that the boy who has seen it died."}],
["F", aj, {s: "This picture of John, he has dreamt of having for a long time."}],
["F", aj, {s: "Which picture of John would a boy try to tear off the wall?"}],
["F", aj, {s: "This is the picture of John that Mary would like to buy one."}],
["F", aj, {s: "This picture of John, I have seen many that looks like it."}],
["F", aj, {s: "Which picture of John does John seem to love the most?"}],
["F", aj, {s: "This is the picture of John which is so good that everyone loves it."}],
["F", aj, {s: "This picture of John he has known for a long time."}],




];
