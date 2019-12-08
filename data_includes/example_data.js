var shuffleSequence = seq("setcounter","intro","practice", "presep", sepWith("sep", rshuffle(endsWith("1"),endsWith("2"), endsWith("3"), startsWith("F"))), "exit");
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
                    html: "<p>The sentence you just looked at, 'John wonders that Mary is a singer', should be an impossible sentence for a native English speaker and should receive a score of <q><font color='red'><b>1</b></font></q> by the standards of this experiment.</p><p>Press the spacebar to continue.</p>"}],
                          
    ["practice", aj, {s: "John wonders if Mary is a singer.", 
                      instructions: null}],
                      
    ["practice", "Message", {consentRequired: false, transfer: "keypress",
                    html: "<p>The sentence you just looked at, 'John wonders if Mary is a singer.', should sound natural for a native speaker and should receive a score of <q><font color='red'><b>5</b></font></q> by the standards of this experiment.</p><p>Press the spacebar to continue.</p>"}],
                          
    ["practice", "Message", {consentRequired: false, transfer: "keypress",
                    html: ["div",
                          ["p", "Now, in this experiment, some sentences that you will be seeing are more complicated than what you have seen. We will now introduce the first kind of such sentences."],
                          ["p", "Whenever you see '{i}' in a sentence, you must interpret the sentence in such a way that two phrases indexed with '{i}' co-vary."],
                          ["p", "Take the sentence 'Every boy{i} likes his{i} mother', for example."],
                          ["p", "In this case, you must interpret this sentence as 'for every x, x a boy, x likes x's mother.'"],
                          ["p", "Suppose there are only two boys in the world, Peter and John. This intended interpretation is that in this world, for all the boys, which include Peter and John, Peter loves Peter's mother, and John loves John's mother."],
                          ["p", "When you see sentences marked with {i}, you must intrepret them in a similar way and then give your judgment of their acceptability accordingly."],
                          ["p", "Press the spacebar to continue."]
                          ]}],
                          
    ["practice", aj, {s: "Every boy{i} likes his{i} mother.",
                      instructions: "Whenever you see '{i}', you must read the sentence in such a way that everything indexed with '{i}' covaries with each other. Here, you must take the reading 'for every x, x a boy, x likes x's mother.'"}],
                      
    ["practice", "Message", {consentRequired: false, transfer: "keypress",
                    html: "<p>The sentence you just looked at, 'Every boy{i} likes his{i} mother.', should sound natural for a native speaker and should receive a score of <q><font color='red'><b>5</b></font></q> by the standards of this experiment.</p><p>Press the spacebar to continue.</p>"}],
    
    ["practice", aj, {s: "His{i} mother likes every boy{i}.",
                      instructions: "Whenever you see '{i}', you must read the sentence in such a way that everything indexed with '{i}' covaries with each other. Here, you must take the reading 'for every x, x a boy, x's mother likes x.'"}],
    
    ["practice", "Message", {consentRequired: false, transfer: "keypress",
                    html: "<p>The sentence you just looked at, 'His{i} mother likes every boy{i}.', should sound be an impossible sentence for a native speaker and should receive a score of <q><font color='red'><b>1</b></font></q> by the standards of this experiment.</p><p>Press the spacebar to continue.</p>"}],
                          
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
                    html: "<p>The sentence you just looked at, 'John[i] thinks that Peter likes him[i].', should sound natural for a native English speaker given the intended interpretation and should receive a score of <q><font color='red'><b>5</b></font></q> by the standards of this experiment.</p><p>Press the spacebar to continue.</p>"}],
    
    ["practice", aj, {s: "He[i] thinks that Peter likes John[i].",
                      instructions: "Whenever you see '[i]' in a sentence, you must interpret the sentence in such a way that everything indexed with '[i]' refers to the same person. Here, 'he' must refer to John."}],
    
    ["practice", "Message", {consentRequired: false, transfer: "keypress",
                    html: "<p>The sentence you just looked at, 'He[i] thinks that Peter likes John[i].', should be an impossible sentence for a native English speaker given the intended interpretation and should receive a score of <q><font color='red'><b>1</b></font></q> by the standards of this experiment.</p><p>Press the spacebar to continue.</p>"}],
                      
    ["practice", "Message", {consentRequired: false, transfer: "keypress",
                    html: ["div",
                          ["p", "The practice session is over now. We will now start the experiment. Remember that in cases of uncertainties, go with your first instinct. Please press the spacebar to continue."]
                          ]}],


    ["presep", Separator, { transfer: 2000, normalMessage: "Please get ready. We will start. Please wait..." }],

    
["1A-2N-3W-4G-1", aj, {s: "Which picture of himself did Mary think that John saw?"}],
["1A-2N-3W-4R-1", aj, {s: "Which picture of himself did Mary think that John saw it?"}],
["1V-2N-3W-4G-1", aj, {s: "Which girl in his{i} class did every teacher{i} think that you like?"}],
["1V-2N-3W-4R-1", aj, {s: "Which girl in his{i} class did every teacher{i} think that you like her?"}],
["1C-2N-3W-4G-1", aj, {s: "Which picture of John[i] did he[i] think that you saw?"}],
["1C-2N-3W-4R-1", aj, {s: "Which picture of John[i] did he[i] think that you saw it?"}],
    
["1A-2W-3W-4G-1", aj, {s: "Which picture of himself did Mary wonder whether John saw?"}],
["1A-2W-3W-4R-1", aj, {s: "Which picture of himself did Mary wonder whether John saw it?"}],  
["1V-2W-3W-4G-1", aj, {s: "Which girl in his{i} class did every teacher{i} wonder whether you like?"}],  
["1V-2W-3W-4R-1", aj, {s: "Which girl in his{i} class did every teacher{i} wonder whether you like her?"}],  
["1C-2W-3W-4G-1", aj, {s: "Which picture of John[i] did he[i] wonder whether you saw?"}],  
["1C-2W-3W-4R-1", aj, {s: "Which picture of John[i] did he[i] wonder whether you saw it?"}],  

["1A-2C-3W-4G-1", aj, {s: "Which picture of himself did Mary believe the claim that John saw?"}],
["1A-2C-3W-4R-1", aj, {s: "Which picture of himself did Mary believe the claim that John saw it?"}],  
["1V-2C-3W-4G-1", aj, {s: "Which girl in his{i} class did every teacher{i} hear the rumor that you like?"}],  
["1V-2C-3W-4R-1", aj, {s: "Which girl in his{i} class did every teacher{i} hear the rumor that you like her?"}],  
["1C-2C-3W-4G-1", aj, {s: "Which picture of John[i] did he[i] believe the claim that you saw?"}],  
["1C-2C-3W-4R-1", aj, {s: "Which picture of John[i] did he[i] believe the claim that you saw it?"}], 

["1A-2N-3W-4G-2", aj, {s: "Which portrait of herself did John think that Mary kept?"}],
["1A-2N-3W-4R-2", aj, {s: "Which portrait of herself did John think that Mary kept it?"}],
["1V-2N-3W-4G-2", aj, {s: "Which book in her{i} room did every author{i} think that you read?"}],
["1V-2N-3W-4R-2", aj, {s: "Which book in her{i} room did every author{i} think that you read it?"}],
["1C-2N-3W-4G-2", aj, {s: "Which portrait of Mary[i] did she[i] think that you kept?"}],
["1C-2N-3W-4R-2", aj, {s: "Which portrait of Mary[i] did she[i] think that you kept it?"}],
    
["1A-2W-3W-4G-2", aj, {s: "Which portrait of herself did John wonder whether Mary kept?"}],
["1A-2W-3W-4R-2", aj, {s: "Which portrait of herself did John wonder whether Mary kept it?"}],  
["1V-2W-3W-4G-2", aj, {s: "Which book in her{i} room did every author{i} wonder whether you read?"}],  
["1V-2W-3W-4R-2", aj, {s: "Which book in her{i} room did every author{i} wonder whether you read it?"}],  
["1C-2W-3W-4G-2", aj, {s: "Which portrait of Mary[i] did she[i] wonder whether you kept?"}],  
["1C-2W-3W-4R-2", aj, {s: "Which portrait of Mary[i] did she[i] wonder whether you kept it?"}],  

["1A-2C-3W-4G-2", aj, {s: "Which portrait of herself did John believe the claim that Mary kept?"}],
["1A-2C-3W-4R-2", aj, {s: "Which portrait of herself did John believe the claim that Mary kept it?"}],  
["1V-2C-3W-4G-2", aj, {s: "Which book in her{i} room did every author{i} believe the claim that you read?"}],  
["1V-2C-3W-4R-2", aj, {s: "Which book in her{i} room did every author{i} believe the claim that you read it?"}],  
["1C-2C-3W-4G-2", aj, {s: "Which portrait of Mary[i] did she[i] believe the claim that you kept?"}],  
["1C-2C-3W-4R-2", aj, {s: "Which portrait of Mary[i] did she[i] believe the claim that you kept it?"}], 

["1A-2N-3W-4G-3", aj, {s: "Which painting of yourself did John think that you criticized?"}],
["1A-2N-3W-4R-3", aj, {s: "Which painting of yourself did John think that you criticized it?"}],
["1V-2N-3W-4G-3", aj, {s: "Which boy in her{i} lab did every chemist{i} think that you met?"}],
["1V-2N-3W-4R-3", aj, {s: "Which boy in her{i} lab did every chemist{i} think that you met him?"}],
["1C-2N-3W-4G-3", aj, {s: "Which painting of Peter[i] did he[i] think that you criticized?"}],
["1C-2N-3W-4R-3", aj, {s: "Which painting of Peter[i] did he[i] think that you criticized it?"}],
    
["1A-2W-3W-4G-3", aj, {s: "Which painting of yourself did John wonder whether you criticized?"}],
["1A-2W-3W-4R-3", aj, {s: "Which painting of yourself did John wonder whether you criticized it?"}],  
["1V-2W-3W-4G-3", aj, {s: "Which boy in her{i} lab did every chemist{i} wonder whether you met?"}],  
["1V-2W-3W-4R-3", aj, {s: "Which boy in her{i} lab did every chemist{i} wonder whether you met him?"}],  
["1C-2W-3W-4G-3", aj, {s: "Which painting of Peter[i] did he[i] wonder whether you criticized?"}],  
["1C-2W-3W-4R-3", aj, {s: "Which painting of Peter[i] did he[i] wonder whether you criticized it?"}],  

["1A-2C-3W-4G-3", aj, {s: "Which painting of yourself did John believe the claim that you criticized?"}],
["1A-2C-3W-4R-3", aj, {s: "Which painting of yourself did John believe the claim that you criticized it?"}],  
["1V-2C-3W-4G-3", aj, {s: "Which boy in her{i} lab did every chemist{i} believe the claim that you met?"}],  
["1V-2C-3W-4R-3", aj, {s: "Which boy in her{i} lab did every chemist{i} believe the claim that you met him?"}],  
["1C-2C-3W-4G-3", aj, {s: "Which painting of Peter[i] did he[i] believe the claim that you criticized?"}],  
["1C-2C-3W-4R-3", aj, {s: "Which painting of Peter[i] did he[i] believe the claim that you criticized it?"}],

["F5", aj, {s: "Which picture of Mary does he think has been selling very well?"}],
["F1", aj, {s: "Which picture of himself do you think that they will like?"}],
["F5", aj, {s: "Which portrait of Mary do you think that he will buy?"}],
["F1", aj, {s: "Which portrait of Mary does he think that has been selling very well?"}],
["F5", aj, {s: "Which painting of Peter does she believe that my father will purchase?"}],
["F1", aj, {s: "Which painting of Peter does she believe if my father will purchase?"}]

];
