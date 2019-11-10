var shuffleSequence = seq("setcounter","intro","practice", "presep", sepWith("sep", rshuffle(startsWith("A"),startsWith("V"), startsWith("C"))), "exit");
var practiceItemTypes = ["practice"];

//var progressBarText = "Your current progress"
//var completionMessage = "数据传送完毕。 非常感谢您的参与！"


var defaults = [
    "Separator", {
        transfer: 800,
        normalMessage: "",
    },

    "AcceptabilityJudgment", {
        as: ["1", "2", "3", "4", "5", "6", "7"],
        presentAsScale: true,
        instructions: "How acceptable is this sentence? Use number keys or click boxes to answer.",
        leftComment: "(Bad)", rightComment: "(Good)"
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
    ["practice", aj, {s: "This is just a practice sentence to get you used to the method of presentation."}],

    ["practice", aj, {s: "The cleaning lady working in the bathroom cursed himself for forgetting his wrench."}],

    ["practice", aj, {s: "The pop star sang herself hoarse at the concert last night."}],

    ["practice", "Message", {consentRequired: false, transfer: "keypress",
                    html: ["div",
                          ["p", "The practice session is over now. You will start the experiment now. Pleae press the spacebar to continue"],
                          ]}],


    ["presep", Separator, { transfer: 2000, normalMessage: "Please get ready. We will start. Please wait..." }],


["A-N-W-G", aj, {s: "Which picture of himself did Mary think John saw?"}],
["A-N-R-G", aj, {s: "This is the picture of himself that Mary thought John saw."}],
["A-N-T-G", aj, {s: "This picture of himself, Mary thought John saw."}],
["A-N-W-R", aj, {s: "Which picture of himself did Mary think John saw it?"}],
["A-N-R-R", aj, {s: "This is the pciture of himself that Mary thought John saw it."}],
["A-N-T-R", aj, {s: "This picture of himself, Mary thought John saw it."}],

["A-W-W-G", aj, {s: "Which picture of himself did Mary wonder whether John saw?"}],
["A-W-R-G", aj, {s: "This is the picture of himself that Mary wondered whether John saw."}],
["A-W-T-G", aj, {s: "This picture of himself, Mary wondered whether John saw."}],
["A-W-W-R", aj, {s: "Which picture of himself did Mary wonder whether John saw it?"}],
["A-W-R-R", aj, {s: "This is the picture of himself that Mary wondered whether John saw it."}],
["A-W-T-R", aj, {s: "This picture of himself, Mary wondered whether John saw it."}],
    
["A-C-W-G", aj, {s: "Which picture of himself did Mary make the claim that John saw?"}],
["A-C-R-G", aj, {s: "This is the picture that Mary made the claim that John saw."}],
["A-C-T-G", aj, {s: "This picture of himself, Mary made the claim that John saw."}],
["A-C-W-R", aj, {s: "Which picture of himself did Mary make the claim that John saw it?"}],
["A-C-R-R", aj, {s: "This is the picture that Mary made the claim that John saw it."}],
["A-C-T-R", aj, {s: "This picture of himself, Mary made the claim that John saw it."}],

["A-A-W-G", aj, {s: "Which picture of himself did Mary get upset because John saw?"}],
["A-A-R-G", aj, {s: "This is the picture of himself that Mary got upset because John saw."}],
["A-A-T-G", aj, {s: "This picture of himself, Mary got upset because John saw."}],
["A-A-W-R", aj, {s: "Which picture of himself did Mary get upset because John saw it?"}],
["A-A-R-R", aj, {s: "This is the picture of himself that Mary got upset because John saw it."}],
["A-A-T-R", aj, {s: "This picture of himself, Mary got upset because John saw it."}],

["A-R-W-G", aj, {s: "Which picture of himself did Mary know a boy who saw?"}],
["A-R-R-G", aj, {s: "This is the picture of himself that Mary knew a boy who saw."}],
["A-R-T-G", aj, {s: "This picture of himself, Mary knew a boy who it worried."}],
["A-R-W-R", aj, {s: "Which picture of himself did Mary know a boy who saw it?"}],
["A-R-R-R", aj, {s: "This is the picture of himself that Mary knew a boy who saw it."}],
["A-R-T-R", aj, {s: "This picture of himself, Mary knew a boy who saw it."}],

["V-N-W-G", aj, {s: "Which girl in his class did every teacher think you liked?"}],
["V-N-R-G", aj, {s: "This is the girl in his class that every teacher thought you liked."}],
["V-N-T-G", aj, {s: "This girl in his class, every teacher thought you liked."}],
["V-N-W-R", aj, {s: "Which girl in his class did every teacher think you liked her?"}],
["V-N-R-R", aj, {s: "This is the girl in his class that every teacher thought you liked."}],
["V-N-T-R", aj, {s: "This girl in his class, every teacher thought you liked her."}],

["V-W-W-G", aj, {s: "Which girl in his class did every teacher wonder whether you liked?"}],
["V-W-R-G", aj, {s: "This is the girl in his class that every teacher wondered whether you liked."}],
["V-W-T-G", aj, {s: "This girl in his class, every teacher wondered whether you liked."}],
["V-W-W-R", aj, {s: "Which girl in his class did every teacher wonder whether you liked her?"}],
["V-W-R-R", aj, {s: "This is the girl in his class that every teacher wondered whether you liked."}],
["V-W-T-R", aj, {s: "This girl in his class, every teacher wondered whether you liked her."}],
    
["V-C-W-G", aj, {s: "Which girl in his class did every teacher make the claim that you liked?"}],
["V-C-R-G", aj, {s: "This is the girl in his class that every teacher made the claim that you liked."}],
["V-C-T-G", aj, {s: "This girl in his class, every teacher made the claim that you liked."}],
["V-C-W-R", aj, {s: "Which girl in his class did every teacher make the claim that you liked her?"}],
["V-C-R-R", aj, {s: "This is the girl in his class that every teacher made the claim that you liked."}],
["V-C-T-R", aj, {s: "This girl in his class, every teacher made the claim that you liked her."}],

["V-A-W-G", aj, {s: "Which girl in his class did every teacher get upset because you liked?"}],
["V-A-R-G", aj, {s: "This is the girl in his class that every teacher got upset because you liked."}],
["V-A-T-G", aj, {s: "This girl in his class, every teacher got upset because you liked."}],
["V-A-W-R", aj, {s: "Which girl in his class did every teacher get upset because you liked her?"}],
["V-A-R-R", aj, {s: "This is the girl in his class that every teacher got upset because you liked her."}],
["V-A-T-R", aj, {s: "This girl in his class, every teacher got upset because you liked her."}],

["V-R-W-G", aj, {s: "Which girl in his class did every teacher know a boy who liked?"}],
["V-R-R-G", aj, {s: "This is the girl in his class that every teacher knew a boy who liked."}],
["V-R-T-G", aj, {s: "This girl in his class, every teacher knew a boy who liked."}],
["V-R-W-R", aj, {s: "Which girl in his class did every teacher know a boy who liked her?"}],
["V-R-R-R", aj, {s: "This is the girl in his class that every teacher knew a boy who liked her."}],
["V-R-T-R", aj, {s: "This girl in his class, every teacher knew a boy who liked her."}],

["C-N-W-G", aj, {s: "Which picture of John did he think you saw?"}],
["C-N-R-G", aj, {s: "This is the picture of John that he thought you saw."}],
["C-N-T-G", aj, {s: "This picture of John, he thought you saw."}],
["C-N-W-R", aj, {s: "Which picture of John did he think you saw it?"}],
["C-N-R-R", aj, {s: "This is the picture of John that he thought you saw it."}],
["C-N-T-R", aj, {s: "This picture of John, he thought you saw it."}],

["C-W-W-G", aj, {s: "Which picture of John did he wonder whether you saw?"}],
["C-W-R-G", aj, {s: "This is the picture of John that he wondered whether you saw."}],
["C-W-T-G", aj, {s: "This picture of John, he wondered whether you saw."}],
["C-W-W-R", aj, {s: "Which picture of John did he wonder whether you saw it?"}],
["C-W-R-R", aj, {s: "This is the picture of John that he wondered whether you saw it."}],
["C-W-T-R", aj, {s: "This picture of John, he wondered whether you saw it."}],
    
["C-C-W-G", aj, {s: "Which picture of John did he make the claim that you saw?"}],
["C-C-R-G", aj, {s: "This is the picture of John that he made the claim that you saw."}],
["C-C-T-G", aj, {s: "This picture of John, he made the claim that you saw."}],
["C-C-W-R", aj, {s: "Which picture of John did he make the claim that you saw it?"}],
["C-C-R-R", aj, {s: "This is the picture of John that he made the claim that you saw it."}],
["C-C-T-R", aj, {s: "This picture of John, he made the claim that you saw it."}],

["C-A-W-G", aj, {s: "Which picture of John did he get upset because you saw?"}],
["C-A-R-G", aj, {s: "This is the picture of John that he got upset because you saw."}],
["C-A-T-G", aj, {s: "This picture of John, he got upset because you saw."}],
["C-A-W-R", aj, {s: "Which picture of John did he get upset because you saw it?"}],
["C-A-R-R", aj, {s: "This is the picture of John that he got upset because you saw it."}],
["C-A-T-R", aj, {s: "This picture of John, he got upset because you saw it."}],

["C-R-W-G", aj, {s: "Which picture of John did he know a boy who saw?"}],
["C-R-R-G", aj, {s: "This is the picture of John that he knew a boy who saw."}],
["C-R-T-G", aj, {s: "This picture of John, he knew a boy who saw."}],
["C-R-W-R", aj, {s: "Which picture of John did he know a boy who saw it?"}],
["C-R-R-R", aj, {s: "This is the picture of John that he knew a boy who saw it."}],
["C-R-T-R", aj, {s: "This picture of John, he knew a boy who saw it."}],

["F", aj, {s: "Which picture of John did he know a boy who saw?"}],
["F", aj, {s: "This is the picture of John that he knew a boy who saw."}],
["F", aj, {s: "This picture of John, he knew a boy who saw."}],
["F", aj, {s: "Which picture of John did he know a boy who saw it?"}],
["F", aj, {s: "This is the picture of John that he knew a boy who saw it."}],
["F", aj, {s: "This picture of John, he knew a boy who saw it."}],
["F", aj, {s: "Which picture of John did he know a boy who saw?"}],
["F", aj, {s: "This is the picture of John that he knew a boy who saw."}],
["F", aj, {s: "This picture of John, he knew a boy who saw."}],
["F", aj, {s: "Which picture of John did he know a boy who saw it?"}],
["F", aj, {s: "This is the picture of John that he knew a boy who saw it."}],
["F", aj, {s: "This picture of John, he knew a boy who saw it."}],
["F", aj, {s: "Which picture of John did he know a boy who saw?"}],
["F", aj, {s: "This is the picture of John that he knew a boy who saw."}],
["F", aj, {s: "This picture of John, he knew a boy who saw."}],
["F", aj, {s: "Which picture of John did he know a boy who saw it?"}],
["F", aj, {s: "This is the picture of John that he knew a boy who saw it."}],
["F", aj, {s: "This picture of John, he knew a boy who saw it."}],




];
