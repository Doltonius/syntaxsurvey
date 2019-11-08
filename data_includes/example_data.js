var shuffleSequence = seq("setcounter","intro","practice", "presep", sepWith("sep", rshuffle(startsWith("VMM"),startsWith("EP"),"f")), "exit");
var practiceItemTypes = ["practice"];

//var progressBarText = "Your current progress"
//var completionMessage = "数据传送完毕。 非常感谢您的参与！"

var x = 6

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


[["VMM_a",1], aj, {s: "Rick labeled the jar. Tim did too."}],
[["VMM_b",1], aj, {s: "Rick labeled the jar. The bowl was too."}],
[["VMM_c",1], aj, {s: "The jar was labeled by Rick. The bowl was too."}],
[["VMM_d",1], aj, {s: "The jar was labeled by Rick. Tim did too."}],    
[["VMM_e",1], aj, {s: "The jar lured Rick. The bowl did too."}],
[["VMM_f",1], aj, {s: "The jar lured Rick. Tim was too."}],
[["VMM_g",1], aj, {s: "Rick was lured by the jar. Tim was too."}],   
[["VMM_h",1], aj, {s: "Rick was lured by the jar. The bowl did too."}],
    
[["VMM_a",2], aj, {s: "Joanna completed the puzzle. Madeleine did too."}],
[["VMM_b",2], aj, {s: "Joanna completed the puzzle. The crossword was too."}],
[["VMM_c",2], aj, {s: "The puzzle was completed by Joanna. The crossword was too."}],
[["VMM_d",2], aj, {s: "The puzzle was completed by Joanna. Madeleine did too."}],    
[["VMM_e",2], aj, {s: "The puzzle amused Joanna. The crossword did too."}],
[["VMM_f",2], aj, {s: "The puzzle amused Joanna. Madeleine was too."}],
[["VMM_g",2], aj, {s: "Joanna was amused by the puzzle. Madeleine was too."}],   
[["VMM_h",2], aj, {s: "Joanna was amused by the puzzle. the crossword did too."}],
    
[["VMM_a",3], aj, {s: "Katie altered the plan. Carissa did too."}],
[["VMM_b",3], aj, {s: "Katie altered the plan. The directions were too."}],
[["VMM_c",3], aj, {s: "The plan was altered by Katie. The directions were too."}],
[["VMM_d",3], aj, {s: "The plan was altered by Katie. Carissa did too."}],    
[["VMM_e",3], aj, {s: "The plan delighted Katie. The directions did too."}],
[["VMM_f",3], aj, {s: "The plan delighted Katie. Carissa was too."}],
[["VMM_g",3], aj, {s: "Katie was delighted by the plan. Carissa was too."}],   
[["VMM_h",3], aj, {s: "Katie was delighted by the plan. The directions did too."}],
    
    
[["VMM_a",4], aj, {s: "Julia finished the ritual. Audrey did too."}],
[["VMM_b",4], aj, {s: "Julia finished the ritual. The ceremony was too."}],
[["VMM_c",4], aj, {s: "The ritual was finished by Julia. The ceremony was too."}],
[["VMM_d",4], aj, {s: "The ritual was finished by Julia. Audrey did too."}],    
[["VMM_e",4], aj, {s: "The ritual bored Julia. The ceremony did too."}],
[["VMM_f",4], aj, {s: "The ritual bored Julia. Audrey was too."}],
[["VMM_g",4], aj, {s: "Julia was bored by the ritual. Audrey was too."}],   
[["VMM_h",4], aj, {s: "Julia was bored by the ritual. The ceremony did too."}],
 
[["VMM_a",5], aj, {s: "Maya muted the song. Kristen did too."}],
[["VMM_b",5], aj, {s: "Maya muted the song. The static was too."}],
[["VMM_c",5], aj, {s: "The song was muted by Maya. The static was too."}],
[["VMM_d",5], aj, {s: "The song was muted by Maya. Kristen did too."}],    
[["VMM_e",5], aj, {s: "The song annoyed Maya. The static did too."}],
[["VMM_f",5], aj, {s: "The song annoyed Maya. Kristen was too."}],
[["VMM_g",5], aj, {s: "Maya was annoyed by the song. Kristen was too."}],   
[["VMM_h",5], aj, {s: "Maya was annoyed by the song. The static did too."}],
 
[["VMM_a",6], aj, {s: "Alana evaded the cliff. Evelyn did too."}],
[["VMM_b",6], aj, {s: "Alana evaded the cliff. The gorge was too."}],
[["VMM_c",6], aj, {s: "The cliff was evaded by Alana. The gorge was too."}],
[["VMM_d",6], aj, {s: "The cliff was evaded by Alana. Evelyn did too."}],    
[["VMM_e",6], aj, {s: "The cliff impressed Alana. The gorge did too."}],
[["VMM_f",6], aj, {s: "The cliff impressed Alana. Evelyn was too."}],
[["VMM_g",6], aj, {s: "Alana was impressed by the cliff. Evelyn was too."}],   
[["VMM_h",6], aj, {s: "Alana was impressed by the cliff. The gorge did too."}],
 
[["VMM_a",7], aj, {s: "Mia escorted the parade. Olivia did too."}],
[["VMM_b",7], aj, {s: "Mia escorted the parade. The procession was too."}],
[["VMM_c",7], aj, {s: "The parade was escorted by Mia. The procession was too."}],
[["VMM_d",7], aj, {s: "The parade was escorted by Mia. Olivia did too."}],    
[["VMM_e",7], aj, {s: "The parade frustrated Mia. The procession did too."}],
[["VMM_f",7], aj, {s: "The parade frustrated Mia. Olivia was too."}],
[["VMM_g",7], aj, {s: "Mia was frustrated by the parade. Olivia was too."}],   
[["VMM_h",7], aj, {s: "Mia was frustrated by the parade. The procession did too."}],
 
[["VMM_a",8], aj, {s: "Sarah heeded the warning. Abbie did too."}],
[["VMM_b",8], aj, {s: "Sarah heeded the warning. The omen was too."}],
[["VMM_c",8], aj, {s: "The warning was heeded by Sarah. The omen was too."}],
[["VMM_d",8], aj, {s: "The warning was heeded by Sarah. Abbie did too."}],    
[["VMM_e",8], aj, {s: "The warning disturbed Sarah. The omen did too."}],
[["VMM_f",8], aj, {s: "The warning disturbed Sarah. Abbie was too."}],
[["VMM_g",8], aj, {s: "Sarah was disturbed by the warning. Abbie was too."}],   
[["VMM_h",8], aj, {s: "Sarah was disturbed by the warning. The omen did too."}],
 
[["VMM_a",9], aj, {s: "Marina rejected the compliment. Kayla did too."}],
[["VMM_b",9], aj, {s: "Marina rejected the compliment. The suggestion was too."}],
[["VMM_c",9], aj, {s: "The compliment was rejected by Marina. The suggestion was too."}],
[["VMM_d",9], aj, {s: "The compliment was rejected by Marina. Kayla did too."}],    
[["VMM_e",9], aj, {s: "The compliment excited Marina. The suggestion did too."}],
[["VMM_f",9], aj, {s: "The compliment excited Marina. Kayla was too."}],
[["VMM_g",9], aj, {s: "Marina was excited by the compliment. Kayla was too."}],   
[["VMM_h",9], aj, {s: "Marina was excited by the compliment. The suggestion did too."}],
 
[["VMM_a",10], aj, {s: "Hannah weighed the necklace. Emily did too."}],
[["VMM_b",10], aj, {s: "Hannah weighed the necklace. The talisman was too."}],
[["VMM_c",10], aj, {s: "The necklace was weighed by Hannah. The talisman was too."}],
[["VMM_d",10], aj, {s: "The necklace was weighed by Hannah. Emily did too."}],    
[["VMM_e",10], aj, {s: "The necklace soothed Hannah. The talisman did too."}],
[["VMM_f",10], aj, {s: "The necklace soothed Hannah. Emily was too."}],
[["VMM_g",10], aj, {s: "Hannah was soothed by the necklace. Emily was too."}],   
[["VMM_h",10], aj, {s: "Hannah was soothed by the necklace. The talisman did too."}],
 
[["VMM_a",11], aj, {s: "Jack wrote the advertisement. David did too."}],
[["VMM_b",11], aj, {s: "Jack wrote the advertisement. The quote was too."}],
[["VMM_c",11], aj, {s: "The advertisement was written by Jack. The quote was too."}],
[["VMM_d",11], aj, {s: "The advertisement was written by Jack. David did too."}],    
[["VMM_e",11], aj, {s: "The advertisement angered Jack. The quote did too."}],
[["VMM_f",11], aj, {s: "The advertisement angered Jack. David was too."}],
[["VMM_g",11], aj, {s: "Jack was angered by the advertisement. David was too."}],   
[["VMM_h",11], aj, {s: "Jack was angered by the advertisement. The quote did too."}],
 
[["VMM_a",12], aj, {s: "Camille built the pyramid. Sophia did too."}],
[["VMM_b",12], aj, {s: "Camille built the pyramid. The monument was too."}],
[["VMM_c",12], aj, {s: "The pyramid was built by Camille. The monument was too."}],
[["VMM_d",12], aj, {s: "The pyramid was built by Camille. Sophia did too."}],    
[["VMM_e",12], aj, {s: "The pyramid awed Camille. The monument did too."}],
[["VMM_f",12], aj, {s: "The pyramid awed Camille. Sophia was too."}],
[["VMM_g",12], aj, {s: "Camille was awed by the pyramid. Sophia was too."}],   
[["VMM_h",12], aj, {s: "Camille was awed by the pyramid. The monument did too."}],
 
[["VMM_a",13], aj, {s: "Cristina recorded the criticism. Michelle did too."}],
[["VMM_b",13], aj, {s: "Cristina recorded the criticism. The question was too."}],
[["VMM_c",13], aj, {s: "The criticism was recorded by Cristina. The question was too."}],
[["VMM_d",13], aj, {s: "The criticism was recorded by Cristina. Michelle did too."}],    
[["VMM_e",13], aj, {s: "The criticism disappointed Cristina. The question did too."}],
[["VMM_f",13], aj, {s: "The criticism disappointed Cristina. Michelle was too."}],
[["VMM_g",13], aj, {s: "Cristina was disappointed by the criticism. Michelle was too."}],   
[["VMM_h",13], aj, {s: "Cristina was disappointed by the criticism. The question did too."}],
 
[["VMM_a",14], aj, {s: "Cindy embraced the doll. Deirdre did too."}],
[["VMM_b",14], aj, {s: "Cindy embraced the doll. The dress was too."}],
[["VMM_c",14], aj, {s: "The doll was embraced by Cindy. The dress was too."}],
[["VMM_d",14], aj, {s: "The doll was embraced by Cindy. Deirdre did too."}],    
[["VMM_e",14], aj, {s: "The doll interested Cindy. The dress did too."}],
[["VMM_f",14], aj, {s: "The doll interested Cindy. Deirdre was too."}],
[["VMM_g",14], aj, {s: "Cindy was interested by the doll. Deirdre was too."}],   
[["VMM_h",14], aj, {s: "Cindy was interested by the doll. The dress did too."}],
 
[["VMM_a",15], aj, {s: "Nikki edited the article. Margaret did too."}],
[["VMM_b",15], aj, {s: "Nikki edited the article. The headline was too."}],
[["VMM_c",15], aj, {s: "The article was edited by Nikki. The headline was too."}],
[["VMM_d",15], aj, {s: "The article was edited by Nikki. Margaret did too."}],    
[["VMM_e",15], aj, {s: "The article alarmed Nikki. The headline did too."}],
[["VMM_f",15], aj, {s: "The article alarmed Nikki. Margaret was too."}],
[["VMM_g",15], aj, {s: "Nikki was alarmed by the article. Margaret was too."}],   
[["VMM_h",15], aj, {s: "Nikki was alarmed by the article. The headline did too."}],
 
[["VMM_a",16], aj, {s: "Rebecca released the announcement. Emma did too."}],
[["VMM_b",16], aj, {s: "Rebecca released the announcement. The result was too."}],
[["VMM_c",16], aj, {s: "The announcement was released by Rebecca. The result was too."}],
[["VMM_d",16], aj, {s: "The announcement was released by Rebecca. Emma did too."}],    
[["VMM_e",16], aj, {s: "The announcement bothered Rebecca. The result did too."}],
[["VMM_f",16], aj, {s: "The announcement bothered Rebecca. Emma was too."}],
[["VMM_g",16], aj, {s: "Rebecca was bothered by the announcement. Emma was too."}],   
[["VMM_h",16], aj, {s: "Rebecca was bothered by the announcement. The result did too."}],
 
[["VMM_a",17], aj, {s: "Isabel controlled the plane. Helen did too."}],
[["VMM_b",17], aj, {s: "Isabel controlled the plane. The robot was too."}],
[["VMM_c",17], aj, {s: "The plane was controlled by Isabel. The robot was too."}],
[["VMM_d",17], aj, {s: "The plane was controlled by Isabel. Helen did too."}],    
[["VMM_e",17], aj, {s: "The plane amazed Isabel. The robot did too."}],
[["VMM_f",17], aj, {s: "The plane amazed Isabel. Helen was too."}],
[["VMM_g",17], aj, {s: "Isabel was amazed by the plane. Helen was too."}],   
[["VMM_h",17], aj, {s: "Isabel was amazed by the plane. The robot did too."}],
 
[["VMM_a",18], aj, {s: "Lisa scratched the label. Claudette did too."}],
[["VMM_b",18], aj, {s: "Lisa scratched the label. The sign was too."}],
[["VMM_c",18], aj, {s: "The label was scratched by Lisa. The sign was too."}],
[["VMM_d",18], aj, {s: "The label was scratched by Lisa. Claudette did too."}],    
[["VMM_e",18], aj, {s: "The label tempted Lisa. The sign did too."}],
[["VMM_f",18], aj, {s: "The label tempted Lisa. Claudette was too."}],
[["VMM_g",18], aj, {s: "Lisa was tempted by the label. Claudette was too."}],   
[["VMM_h",18], aj, {s: "Lisa was tempted by the label. The sign did too."}],
 
[["VMM_a",19], aj, {s: "Brian reproduced the experiment. Roger did too."}],
[["VMM_b",19], aj, {s: "Brian reproduced the experiment. The tests were too."}],
[["VMM_c",19], aj, {s: "The experiment was reproduced by Brian. The tests were too."}],
[["VMM_d",19], aj, {s: "The experiment was reproduced by Brian. Roger did too."}],    
[["VMM_e",19], aj, {s: "The experiment convinced Brian. The tests did too."}],
[["VMM_f",19], aj, {s: "The experiment convinced Brian. Roger was too."}],
[["VMM_g",19], aj, {s: "Brian was convinced by the experiment. Roger was too."}],   
[["VMM_h",19], aj, {s: "Brian was convinced by the experiment. The tests did too."}],
 
[["VMM_a",20], aj, {s: "Louis neglected the castle. John did too."}],
[["VMM_b",20], aj, {s: "Louis neglected the castle. The house was too."}],
[["VMM_c",20], aj, {s: "The castle was neglected by Louis. The house was too."}],
[["VMM_d",20], aj, {s: "The castle was neglected by Louis. John did too."}],    
[["VMM_e",20], aj, {s: "The castle astounded Louis. The house did too."}],
[["VMM_f",20], aj, {s: "The castle astounded Louis. John was too."}],
[["VMM_g",20], aj, {s: "Louis was astounded by the castle. John was too."}],   
[["VMM_h",20], aj, {s: "Louis was astounded by the castle. The house did too."}],
 
[["VMM_a",21], aj, {s: "Mark denounced the story. Tommy did too."}],
[["VMM_b",21], aj, {s: "Mark denounced the story. The sermon was too."}],
[["VMM_c",21], aj, {s: "The story was denounced by Mark. The sermon was too."}],
[["VMM_d",21], aj, {s: "The story was denounced by Mark. Tommy did too."}],    
[["VMM_e",21], aj, {s: "The story provoked Mark. The sermon did too."}],
[["VMM_f",21], aj, {s: "The story provoked Mark. Tommy was too."}],
[["VMM_g",21], aj, {s: "Mark was provoked by the story. Tommy was too."}],   
[["VMM_h",21], aj, {s: "Mark was provoked by the story. The sermon did too."}],
 
[["VMM_a",22], aj, {s: "Jeremy authorized the interview. Phillip did too."}],
[["VMM_b",22], aj, {s: "Jeremy authorized the interview. The broadcast was too."}],
[["VMM_c",22], aj, {s: "The interview was authorized by Jeremy. The broadcast was too."}],
[["VMM_d",22], aj, {s: "The interview was authorized by Jeremy. Phillip did too."}],    
[["VMM_e",22], aj, {s: "The interview embarrassed Jeremy. The broadcast did too."}],
[["VMM_f",22], aj, {s: "The interview embarrassed Jeremy. Phillip was too."}],
[["VMM_g",22], aj, {s: "Jeremy was embarrassed by the interview. Phillip was too."}],   
[["VMM_h",22], aj, {s: "Jeremy was embarrassed by the interview. The broadcast did too."}],
 
[["VMM_a",23], aj, {s: "Liam taped the fight. Mason did too."}],
[["VMM_b",23], aj, {s: "Liam taped the fight. The argument was too."}],
[["VMM_c",23], aj, {s: "The fight was taped by Liam. The argument was too."}],
[["VMM_d",23], aj, {s: "The fight was taped by Liam. Mason did too."}],    
[["VMM_e",23], aj, {s: "The fight frightened Liam. The argument did too."}],
[["VMM_f",23], aj, {s: "The fight frightened Liam. Mason was too."}],
[["VMM_g",23], aj, {s: "Liam was frightened by the fight. Mason was too."}],   
[["VMM_h",23], aj, {s: "Liam was frightened by the fight. The argument did too."}],
 
[["VMM_a",24], aj, {s: "Isaac lost the script. Theodore did too."}],
[["VMM_b",24], aj, {s: "Isaac lost the script. The letter was too."}],
[["VMM_c",24], aj, {s: "The script was lost by Isaac. The letter was too."}],
[["VMM_d",24], aj, {s: "The script was lost by Isaac. Theodore did too."}],    
[["VMM_e",24], aj, {s: "The script demoralized Isaac. The letter did too."}],
[["VMM_f",24], aj, {s: "The script demoralized Isaac. Theodore was too."}],
[["VMM_g",24], aj, {s: "Isaac was demoralized by the script. Theodore was too."}],   
[["VMM_h",24], aj, {s: "Isaac was demoralized by the script. The letter did too."}],
 
[["VMM_a",25], aj, {s: "Jackson removed the dust. Scott did too."}],
[["VMM_b",25], aj, {s: "Jackson removed the dust. The mold was too."}],
[["VMM_c",25], aj, {s: "The dust was removed by Jackson. The mold was too."}],
[["VMM_d",25], aj, {s: "The dust was removed by Jackson. Scott did too."}],    
[["VMM_e",25], aj, {s: "The dust shocked Jackson. The mold did too."}],
[["VMM_f",25], aj, {s: "The dust shocked Jackson. Scott was too."}],
[["VMM_g",25], aj, {s: "Jackson was shocked by the dust. Scott was too."}],   
[["VMM_h",25], aj, {s: "Jackson was shocked by the dust. The mold did too."}],
 
[["VMM_a",26], aj, {s: "Solomon timed the match. Samuel did too."}],
[["VMM_b",26], aj, {s: "Solomon timed the match. The game was too."}],
[["VMM_c",26], aj, {s: "The match was timed by Solomon. The game was too."}],
[["VMM_d",26], aj, {s: "The match was timed by Solomon. Samuel did too."}],    
[["VMM_e",26], aj, {s: "The match thrilled Solomon. The game did too."}],
[["VMM_f",26], aj, {s: "The match thrilled Solomon. Samuel was too."}],
[["VMM_g",26], aj, {s: "Solomon was thrilled by the match. Samuel was too."}],   
[["VMM_h",26], aj, {s: "Solomon was thrilled by the match. The game did too."}],
 
[["VMM_a",27], aj, {s: "Kevin praised the book. Will did too."}],
[["VMM_b",27], aj, {s: "Kevin praised the book. The essay was too."}],
[["VMM_c",27], aj, {s: "The book was praised by Kevin. The essay was too."}],
[["VMM_d",27], aj, {s: "The book was praised by Kevin. Will did too."}],    
[["VMM_e",27], aj, {s: "The book pleased Kevin. The essay did too."}],
[["VMM_f",27], aj, {s: "The book pleased Kevin. Will was too."}],
[["VMM_g",27], aj, {s: "Kevin was pleased by the book. Will was too."}],   
[["VMM_h",27], aj, {s: "Kevin was pleased by the book. The essay did too."}],

[["VMM_a",28], aj, {s: "Zach analyzed the finances. Alexander did too."}],
[["VMM_b",28], aj, {s: "Zach analyzed the finances. The reports were too."}],
[["VMM_c",28], aj, {s: "The finances were analyzed by Zach. The reports were too."}],
[["VMM_d",28], aj, {s: "The finances were analyzed by Zach. Alexander did too."}],    
[["VMM_e",28], aj, {s: "The finances upset Zach. The reports did too."}],
[["VMM_f",28], aj, {s: "The finances upset Zach. Alexander was too."}],
[["VMM_g",28], aj, {s: "Zach was upset by the finances. Alexander was too."}],   
[["VMM_h",28], aj, {s: "Zach was upset by the finances. The reports did too."}],
 
[["VMM_a",29], aj, {s: "Christian cut the ropes. Anthony did too."}],
[["VMM_b",29], aj, {s: "Christian cut the ropes. The restraints were too."}],
[["VMM_c",29], aj, {s: "The ropes were cut by Christian. The restraints were too."}],
[["VMM_d",29], aj, {s: "The ropes were cut by Christian. Anthony did too."}],    
[["VMM_e",29], aj, {s: "The ropes terrified Christian. The restraints did too."}],
[["VMM_f",29], aj, {s: "The ropes terrified Christian. Anthony was too."}],
[["VMM_g",29], aj, {s: "Christian was terrified by the ropes. Anthony was too."}],   
[["VMM_h",29], aj, {s: "Christian was terrified by the ropes. The restraints did too."}],
 
[["VMM_a",30], aj, {s: "James interrupted the lecture. Ian did too."}],
[["VMM_b",30], aj, {s: "James interrupted the lecture. The speech was too."}],
[["VMM_c",30], aj, {s: "The lecture was interrupted by James. The speech was too."}],
[["VMM_d",30], aj, {s: "The lecture was interrupted by James. Ian did too."}],    
[["VMM_e",30], aj, {s: "The lecture discouraged James. The speech did too."}],
[["VMM_f",30], aj, {s: "The lecture discouraged James. Ian was too."}],
[["VMM_g",30], aj, {s: "James was discouraged by the lecture. Ian was too."}],   
[["VMM_h",30], aj, {s: "James was discouraged by the lecture. The speech did too."}],
 
[["VMM_a",31], aj, {s: "Steve identified the flash. Brayden did too."}],
[["VMM_b",31], aj, {s: "Steve identified the flash. The glow was too."}],
[["VMM_c",31], aj, {s: "The flash was identified by Steve. The glow was too."}],
[["VMM_d",31], aj, {s: "The flash was identified by Steve. Brayden did too."}],    
[["VMM_e",31], aj, {s: "The flash scared Steve. The glow did too."}],
[["VMM_f",31], aj, {s: "The flash scared Steve. Brayden was too."}],
[["VMM_g",31], aj, {s: "Steve was scared by the flash. Brayden was too."}],   
[["VMM_h",31], aj, {s: "Steve was scared by the flash. The glow did too."}],
 
[["VMM_a",32], aj, {s: "Christopher concealed the jewel. Robert did too."}],
[["VMM_b",32], aj, {s: "Christopher concealed the jewel. The ring was too."}],
[["VMM_c",32], aj, {s: "The jewel was concealed by Christopher. The ring was too."}],
[["VMM_d",32], aj, {s: "The jewel was concealed by Christopher. Robert did too."}],    
[["VMM_e",32], aj, {s: "The jewel stunned Christopher. The ring did too."}],
[["VMM_f",32], aj, {s: "The jewel stunned Christopher. Robert was too."}],
[["VMM_g",32], aj, {s: "Christopher was stunned by the jewel. Robert was too."}],   
[["VMM_h",32], aj, {s: "Christopher was stunned by the jewel. The ring did too."}],


[["EP_a",33], aj, {s: "Daniel planned to send his mother a note."}],
[["EP_b",33], aj, {s: "Daniel planned to send a note to his mother."}],

[["EP_a",34], aj, {s: "The pastor wanted to serve the visitors some food."}],
[["EP_b",34], aj, {s: "The pastor wanted to serve some food to the visitors."}],

[["EP_a",35], aj, {s: "The clerk said she would charge the businessman full price."}],
[["EP_b",35], aj, {s: "The clerk said she would charge full price to the businessman."}],

[["EP_a",36], aj, {s: "The representative said the company would ship the customers a replacement."}],
[["EP_b",36], aj, {s: "The representative said the company would ship a replacement to the customers."}],

[["EP_a",37], aj, {s: "Deanna usually feeds her dog a treat on Wednesdays."}],
[["EP_b",37], aj, {s: "Deanna usually feeds a treat to her dog on Wednesdays."}],

[["EP_a",38], aj, {s: "Robin said he would lend the gambler some money."}],
[["EP_b",38], aj, {s: "Robin said he would lend some money to the gambler."}],

[["EP_a",39], aj, {s: "The board wanted to allocate us some funds."}],
[["EP_b",39], aj, {s: "The board wanted to allocate some funds to us."}],

[["EP_a",40], aj, {s: "Jason was told to repay the bank the money."}],
[["EP_b",40], aj, {s: "Jason was told to repay the money to the bank."}],

[["EP_a",41], aj, {s: "Reginald asked Georgette to wire him some money."}],
[["EP_b",41], aj, {s: "Reginald asked Georgette to wire some money to him."}],

[["EP_a",42], aj, {s: "The rescue worker needed to throw the stranded explorer the heavy rope."}],
[["EP_b",42], aj, {s: "The rescue worker needed to throw the heavy rope to the stranded explorer."}],

[["EP_a",43], aj, {s: "The casino owner wanted to deal the gamblers the fake card."}],
[["EP_b",43], aj, {s: "The casino owner wanted to deal the fake card to the gamblers."}],

[["EP_a",44], aj, {s: "The foundation planned to award the university a grant."}],
[["EP_b",44], aj, {s: "The foundation planned to award a grant to the university."}],

[["f",45], aj, {s: "This is the father that the son who betrayed him has always been very unfair."}],
[["f",46], aj, {s: "This is the boy that the newspaper reports that the cop who beat him up was leading the operation."}],
[["f",47], aj, {s: "This is the striker that I heard that the defender who punched in the face was kicked out of the game."}],
[["f",48], aj, {s: "This is the customer that the waiter who is famous for being unfriendly hit him."}],
[["f",49], aj, {s: "This is the gentleman that the girl who sells ripped carpets deceived her."}],
[["f",50], aj, {s: "This is the guy that the man who could be imprisoned for reckless driving ran him over."}],
[["f",51], aj, {s: "This is the clerk that the manager who downgraded him has always been really mean."}],
[["f",52], aj, {s: "This is the engineer that the manager who has always had trust in young people hired him."}],

      
    
];



