


  //view
  //

  $(function() {

   
    $(".js-crystalImage1").click (function () {
      gameEngine.crystal1();
    });

    $(".js-crystalImage2").click (function () {
      gameEngine.crystal2();
    });

    $(".js-crystalImage3").click (function () {
      gameEngine.crystal3();
    });

    $(".js-crystalImage4").click (function () {
      gameEngine.crystal4();
    });
    
  });

  // $(documnent).ready (function() {

  // });


  var DOM = {
    render() {
      // gameSetup.newrandomNumber();
  $("#js-randomNumber").text(gameSetup.randomNumber);
  $("#js-totalScore").text(gameSetup.totalScore);
  $("#js-wins").text(gameSetup.winCount);
  $("#js-losses").text(gameSetup.lossCount);

    }
  };

  //


  //controller

  var gameEngine = {

    
      crystal1() {
        gameSetup.totalScore += crystal1.pointValue;
        DOM.render();
        this.winOrLose();
      },

       crystal2() {
        gameSetup.totalScore += crystal2.pointValue;
        DOM.render();
        this.winOrLose();
       },
      

       crystal3() {
      gameSetup.totalScore += crystal3.pointValue;
      DOM.render();
      this.winOrLose();
       },
      
      crystal4() {
      gameSetup.totalScore += crystal4.pointValue; 
      DOM.render();    
      this.winOrLose();
      },
      

     winOrLose() {
      //test if user won
      if(gameSetup.didUserWin() ) {
        gameSetup.increasewinCount();
        DOM.render();
        alert("You won!!!");
        this.startNewRound();
        } else { /*do nothing */}

       //test if user lost
      if(gameSetup.didUserLose() ) {
        gameSetup.increaselossCount();
        DOM.render();
        alert("You lost!!!");
        this.startNewRound();
      } else { /*do nothing */}

    },


    

    //reset game
    startNewRound() {
      gameSetup.nextRound();
      crystal1.newPointValue();
      crystal2.newPointValue();
      crystal3.newPointValue();
      crystal4.newPointValue();
      DOM.render();
    }
      
  }


   
  //parent code
  //points
  //method to randomly change points


  class Crystal {
    constructor() {
      this.pointValue;
      this.newPointValue();
        }

        newPointValue() {

          this.pointValue = Math.floor((Math.random()*12)+1);
        }
  }

  //new crystal named crystal1-4
  //new object inherit the class

  var crystal1 = new Crystal();
  var crystal2 = new Crystal();
  var crystal3 = new Crystal();
  var crystal4 = new Crystal();

  var gameSetup = {    
    winCount: 0,
    lossCount: 0,
    randomNumber: 0,
    totalScore: 0,

    // action
    increasewinCount() {
      this.winCount++;
    },

    increaselossCount() {
    this.lossCount++;
  },
  
    newrandomNumber() {
      this.randomNumber = (Math.floor(Math.random() * 102) + 19);
  },

  addPoints(points) {
    this.totalScore += points;
  },


  nextRound() {
    this.totalScore = 0;
    this.newrandomNumber();
  },

  didUserWin() {
    if(this.totalScore === this.randomNumber) {
      return true;
    } else {
      return false;
    }
  },

  didUserLose() { 
    if(this.totalScore > this.randomNumber) {
    return true;
  } else {0
    return false;
      }
    }
  };

gameSetup.nextRound();

  

  


  


  
  // var countPoints = 0;
  // var numberOptions = [""];

  // for (var i = 0; i < numberOptions.length; i++) {
  //     var imageCrystal = $("img");
  //     imageCrystal.addClass (".crystalImage");
  //     imageCrystal.attr ("src", "./assets/images/crystal1.jpg");
  //     imageCrystal.attr ("data-crystalvalue, numberOptions [i]");
  //     $("#crystals").append (imageCrystal);
  //     $(".crystalImage").on("click", function() {
  //         // convert it to an integer before adding to the counter
        
  //     var crystalValue = ($(this).attr("data-crystalvalue"));
  //      crystalValue = parseInt(crystalValue);
  // // click will add to the global counter
  //     counter += crystalValue;
      

  //     });

  