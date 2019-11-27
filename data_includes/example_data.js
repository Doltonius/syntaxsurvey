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
        instructions: "Everything indexed with '{i}' covaries with each other; everything indexed with [i] refers to the same person.",
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
    ["practice", aj, {s: "John wonders that Mary is a singer.",
                      instructions: null}],
                      
    ["practice", "Message", {consentRequired: false, transfer: "keypress",
                    html: //["div",
                          //["p", "The sentence you just looked at, 'John wonders that Mary is a singer', should be an impossible sentence for native English speakers and should receive a score of ", ["<b>1</b>"], " by the standards of this experiment."],
                          //["p", "Press the spacebar to continue."]]}],
                          "<p>The sentence you just looked at, 'John wonders that Mary is a singer', should be an impossible sentence for native English speakers and should receive a score of <font color='red'><b>1</b></font> by the standards of this experiment.</p><p>Press the spacebar to continue.</p>"
                          }],
                          
    ["practice", aj, {s: "John wonders if Mary is a singer.", 
                      instructions: null}],
                      
    ["practice", "Message", {consentRequired: false, transfer: "keypress",
                    html: ["div",
                          ["p", "The sentence you just looked at, 'John wonders if Mary is a singer.', should sound natural for a native speaker and should receive a score of <b>5</b> by the standards of this experiment."],
                          ["p", "Press the spacebar to continue."]]}],
                          
    ["practice", "Message", {consentRequired: false, transfer: "keypress",
                    html: ["div",
                          ["p", "Now, in this experiment, some sentences that you will be looking at are more complicated than what you have seen. We will now introduce the first kind of such sentences."],
                          ["p", "Whenever you see '{i}' in a sentence, you must interpret the sentence in such a way that everything indexed with '{i}' covaries with each other."],
                          ["p", "Take the sentence 'Every boy{i} likes his{i} mother.' for example."],
                          ["p", "In this case, you must interpret this sentence as 'for every x, x a boy, x likes x's mother.'"],
                          ["p", "Suppose there are only two boys in the world, Peter and John. This interpretation means that in this world, for all the boys, which include Peter and John, Peter loves Peter's mother, and John loves John's mother."],
                          ["p", "When you see sentences marked with {i}, you must intrepret them in a similar way and then give your judgment of their acceptability."],
                          ["p", "Press the spacebar to continue."]
                          ]}],
                          
    ["practice", aj, {s: "Every boy{i} likes his{i} mother.",
                      instructions: "Whenever you see '{i}', you must read the sentence in the way that everything indexed with '{i}' covaries with each other. Here, you must take the reading 'for every x, x a boy, x likes x's mother.'"}],
                      
    ["practice", "Message", {consentRequired: false, transfer: "keypress",
                    html: ["div",
                          ["p", "The sentence you just looked at, 'Every boy{i} likes his{i} mother.', should sound natural for a native speaker given the intended interpretation and should receive a score of 5 by the standards of this experiment."],
                          ["p", "Press the spacebar to continue."]]}],
    
    ["practice", aj, {s: "His{i} mother like every boy{i}.",
                      instructions: "Whenever you see '{i}', you must read the sentence in the way that everything indexed with '{i}' covaries with each other. Here, you must take the reading 'for every x, x a boy, x's mother likes x.'"}],
    
    ["practice", "Message", {consentRequired: false, transfer: "keypress",
                    html: ["div",
                          ["p", "The sentence you just looked at, 'His{i} mother like every boy{i}', should be an impossible sentence for native English speakers given the intended interpretation and should receive a score of 1 by the standards of this experiment."],
                          ["p", "Press the spacebar to continue."]]}],
                          
    ["practice", "Message", {consentRequired: false, transfer: "keypress",
                    html: ["div",
                          ["p", "Now we introduce the second type of more complicated sentences."],
                          ["p", "Whenever you see '[i]' in a sentence, you must interpret the sentence in such a way that everything indexed with '[i]' refers to the same person."],
                          ["p", "Take the sentence 'He[i] thinks that Peter likes John[i].' for example."],
                          ["p", "In this case, you must interpret this sentence so that 'he' refers to John."],
                          ["p", "When you see sentences marked with [i], you must intrepret them in a similar way and then give your judgment of their acceptability."],
                          ["p", "Press the spacebar to continue."]]}],
              
     ["practice", aj, {s: "John[i] thinks that Peter likes him[i].",
                      instructions: "Whenever you see '[i]' in a sentence, you must interpret the sentence in such a way that everything indexed with '[i]' refers to the same person. Here, 'him' must refer to John."}],
                      
    ["practice", "Message", {consentRequired: false, transfer: "keypress",
                    html: ["div",
                          ["p", "The sentence you just looked at, 'John[i] thinks that Peter likes him[i].', should sound natural for a native speaker given the intended interpretation and should receive a score of 5 by the standards of this experiment."],
                          ["p", "Press the spacebar to continue."]]}],
    
    ["practice", aj, {s: "He[i] thinks that Peter likes John[i].",
                      instructions: "Whenever you see '[i]' in a sentence, you must interpret the sentence in such a way that everything indexed with '[i]' refers to the same person. Here, 'he' must refer to John."}],
    
    ["practice", "Message", {consentRequired: false, transfer: "keypress",
                    html: ["div",
                          ["p", "The sentence you just looked at, 'He[i] thinks that Peter likes John[i].', should be an impossible sentence for native English speakers given the intended interpretation and should receive a score of 1 by the standards of this experiment."],
                          ["p", "Press the spacebar to continue."]]}],
                      
    ["practice", "Message", {consentRequired: false, transfer: "keypress",
                    html: ["div",
                          ["p", "The practice session is over now. You will start the experiment now. There is no right or wrong answer. Go with your instinct. Please press the spacebar to continue."],
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
["A-C-R-G", aj, {s: "This is the picture of himself that Mary made the claim that John saw."}],
["A-C-T-G", aj, {s: "This picture of himself, Mary made the claim that John saw."}],
["A-C-W-R", aj, {s: "Which picture of himself did Mary make the claim that John saw it?"}],
["A-C-R-R", aj, {s: "This is the picture of himself that Mary made the claim that John saw it."}],
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

["V-N-W-G", aj, {s: "Which girl in his{i} class did every teacher{i} think you liked?"}],
["V-N-R-G", aj, {s: "This is the girl in his{i} class that every teacher{i} thought you liked."}],
["V-N-T-G", aj, {s: "This girl in his{i} class, every teacher{i} thought you liked."}],
["V-N-W-R", aj, {s: "Which girl in his{i} class did every teacher{i} think you liked her?"}],
["V-N-R-R", aj, {s: "This is the girl in his{i} class that every teacher{i} thought you liked."}],
["V-N-T-R", aj, {s: "This girl in his{i} class, every teacher{i} thought you liked her."}],

["V-W-W-G", aj, {s: "Which girl in his{i} class did every teacher{i} wonder whether you liked?"}],
["V-W-R-G", aj, {s: "This is the girl in his{i} class that every teacher{i} wondered whether you liked."}],
["V-W-T-G", aj, {s: "This girl in his{i} class, every teacher{i} wondered whether you liked."}],
["V-W-W-R", aj, {s: "Which girl in his{i} class did every teacher{i} wonder whether you liked her?"}],
["V-W-R-R", aj, {s: "This is the girl in his{i} class that every teacher{i} wondered whether you liked."}],
["V-W-T-R", aj, {s: "This girl in his{i} class, every teacher{i} wondered whether you liked her."}],

["V-C-W-G", aj, {s: "Which girl in his{i} class did every teacher{i} make the claim that you liked?"}],
["V-C-R-G", aj, {s: "This is the girl in his{i} class that every teacher{i} made the claim that you liked."}],
["V-C-T-G", aj, {s: "This girl in his{i} class, every teacher{i} made the claim that you liked."}],
["V-C-W-R", aj, {s: "Which girl in his{i} class did every teacher{i} make the claim that you liked her?"}],
["V-C-R-R", aj, {s: "This is the girl in his{i} class that every teacher{i} made the claim that you liked."}],
["V-C-T-R", aj, {s: "This girl in his{i} class, every teacher{i} made the claim that you liked her."}],

["V-A-W-G", aj, {s: "Which girl in his{i} class did every teacher{i} get upset because you liked?"}],
["V-A-R-G", aj, {s: "This is the girl in his{i} class that every teacher{i} got upset because you liked."}],
["V-A-T-G", aj, {s: "This girl in his{i} class, every teacher{i} got upset because you liked."}],
["V-A-W-R", aj, {s: "Which girl in his{i} class did every teacher{i} get upset because you liked her?"}],
["V-A-R-R", aj, {s: "This is the girl in his{i} class that every teacher{i} got upset because you liked her."}],
["V-A-T-R", aj, {s: "This girl in his{i} class, every teacher{i} got upset because you liked her."}],

["V-R-W-G", aj, {s: "Which girl in his{i} class did every teacher{i} know a boy who liked?"}],
["V-R-R-G", aj, {s: "This is the girl in his{i} class that every teacher{i} knew a boy who liked."}],
["V-R-T-G", aj, {s: "This girl in his{i} class, every teacher{i} knew a boy who liked."}],
["V-R-W-R", aj, {s: "Which girl in his{i} class did every teacher{i} know a boy who liked her?"}],
["V-R-R-R", aj, {s: "This is the girl in his{i} class that every teacher{i} knew a boy who liked her."}],
["V-R-T-R", aj, {s: "This girl in his{i} class, every teacher{i} knew a boy who liked her."}],

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

["F5", aj, {s: "Which picture of John has been hanging on the wall for so long?"}],
["F2", aj, {s: "This is the picture of John, and it has been taken at a long time."}],
["F1", aj, {s: "This picture of John, I would never recommends you seen it."}],
["F1", aj, {s: "Which picture of John is the best ones taken so far today?"}],
["F5", aj, {s: "This is the picture of John and the only picture he loves."}],
["F1", aj, {s: "This picture of John are what makes everyone satisfied."}],
["F5", aj, {s: "Which picture of John would you like to buy out of all these?"}],
["F3", aj, {s: "This is the picture of John that everyone wants to have one"}],
["F5", aj, {s: "This picture of John can bring fame and fortune to anyone who sees it."}],
["F1", aj, {s: "Which picture of John have being on displays recent days those week?"}],
["F1", aj, {s: "This is the picture of John that the boy who has seen it died."}],
["F5", aj, {s: "This picture of John, he has dreamt of having for a long time."}],
["F5", aj, {s: "Which picture of John would a boy try to tear off the wall?"}],
["F3", aj, {s: "This is the picture of John that Mary would like to buy one."}],
["F4", aj, {s: "This picture of John, I have seen many that looks like it."}],
["F5", aj, {s: "Which picture of John does John seem to love the most?"}],
["F5", aj, {s: "This is the picture of John which is so good that everyone loves it."}],
["F4", aj, {s: "This picture of John he has known for a long time."}],




];
