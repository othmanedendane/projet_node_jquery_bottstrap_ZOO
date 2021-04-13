$(function(){
    $(document).ready(function(){
        $("#album").hide();
    
       $("#album").show(1000);
    });

   
$("#phase1").hover(function(){
    $('#phase2').fadeOut();
    $('#phase1').css('border',"1px solid black").css('outline','5px dotted orange');
},
function(){
    $('#phase2').fadeIn(900);
    $('#phase1').css('border',"none").css('outline','none');
});

$("#phase1").hover(function(){
    $('#phase3').fadeOut();
},
function(){
    $('#phase3').fadeIn(700);
});

$("#phase2").hover(function(){
    $('#phase1').fadeOut();
    $('#phase2').css('border',"1px solid brown").css('outline',' 4px grey').css('outline-style','dotted');
},
function(){
    $('#phase1').fadeIn(700);
    $('#phase2').css('border',"none").css('outline','none');
});

$("#phase2").hover(function(){
    $('#phase3').fadeOut();
},
function(){
    $('#phase3').fadeIn(700);
});

$("#phase3").hover(function(){
    $('#phase1').fadeOut();
    $('#phase3').css('border',"1px solid blue").css('outline','2px dashed aqua');
},
function(){
    $('#phase1').fadeIn(700);
    $('#phase3').css('border',"none").css('outline','none');
});

$("#phase3").hover(function(){
    $('#phase2').fadeOut();
},
function(){
    $('#phase2').fadeIn(700);
});

$("#phase1").mouseenter(function(){
    $('#phase1').animate({
        width: '500px',
    height: '400px',
    });
});

$("#phase2").mouseenter(function(){
    $('#phase2').animate({
        
        width: '500px',
    height: '400px',
    });
});

$("#phase3").mouseenter(function(){
    $('#phase3').animate({
        right:'-750px',
        width: '500px',
    height: '400px',
    });
});

$("#phase1").mouseleave(function(){
    $('#phase1').animate({
        
        width: '200px',
    height: '400px',
    });
});

$("#phase2").mouseleave(function(){
    $('#phase2').animate({
        
        width: '200px',
    height: '400px',
    });
});

$("#phase3").mouseleave(function(){
    $('#phase3').animate({
        
        width: '200px',
    height: '400px',
    });
});
$("#stylo").on({
    mouseenter : function(){
        $('#stylo').css('background',"green").css('color','white');
 
    },
    mouseleave : function(){
        $('#stylo').css('background',"white").css('color','black');
    },
    click : function(){
        alert("The lion (Panthera leo) is a large mammal of the Felidae (cat) family. Some large males weigh over 250 kg (550 lb).[3] Today, wild lions live in sub-Saharan Africa and in Asia.[4] Lions are adapted for life in grasslands and mixed areas with trees and grass. The relatively small females are fast runners over short distances, and coordinate their hunting of herd animals, Lions have disappeared from North Africa and southwest Asia in historic times. Until the late Pleistocene, about 10,000 years ago, the lion was the most widespread large land mammal after humans. They were found in most of Africa, across Eurasia from western Europe to India, and in the Americas from the Yukon to Peru.[5] The lion is now a vulnerable species. There was a decline in its African range of 30–50% over two decades in the second half of the 20th century.[2] Habitat loss and conflicts with humans are the greatest causes of concern. ");
        
    }
});
$("#stylo1").on({
    mouseenter : function(){
        $('#stylo1').css('background',"green").css('color','white');
 
    },
    mouseleave : function(){
        $('#stylo1').css('background',"white").css('color','black');
    },
    click : function(){
        alert("Gorillas live in the rainforests in central Africa. They mostly live on the ground, but they can also climb. When on the ground, they walk on their feet and finger knuckles. Troops of gorillas wander slowly through the forests of Central Africa. For about half of their day they search for leaves, vines, and bamboo shoots to eat. Sometimes they also eat ants or termites. For the rest of the day, they lay in the sun and play with their children. If another gorilla threatens them, the troop's leader, the silverback, protects them by rearing up and beating his chest. Although mostly vegetarian, they have long canine teeth or fangs that the adult males sometimes use to fight each other for the troop leadership. ");
        
    }
});

$("#stylo2").on({
    mouseenter : function(){
        $('#stylo2').css('background',"green").css('color','white');
 
    },
    mouseleave : function(){
        $('#stylo2').css('background',"white").css('color','black');
    },
    click : function(){
        alert("At birth, an elephant calf may weigh as much as 100 kg (225 pounds). The baby elephant develops for 20 to 22 months inside its mother. No other land animal takes this long to develop before being born.In the wild, elephants have strong family relationship. Their ways of acting toward other elephants are hard for people to understand. They -talk- to each other with very low sounds. Most elephants sounds are so low, people cannot hear them. But elephants can hear these sounds far away.[2] Elephants have strong, leathery skin to protect themselves. ");
        
    }
});
$("#stylo3").on({
    mouseenter : function(){
        $('#stylo3').css('background',"green").css('color','white');
 
    },
    mouseleave : function(){
        $('#stylo3').css('background',"white").css('color','black');
    },
    click : function(){
        alert("Zebras are social animals that spend time in herds, they graze together and sometimes even groom each other.[4] They can have babies (foals) when they are about five years old and can have one every year. Zebras mainly eat grass, but they also eat fruit, leaves and some vegetables. They always live near water and are an endangered species.Zebras live in Africa, south of the Sahara desert. ");
        
    }
});
$("#stylo4").on({
    mouseenter : function(){
        $('#stylo4').css('background',"green").css('color','white');
 
    },
    mouseleave : function(){
        $('#stylo4').css('background',"white").css('color','black');
    },
    click : function(){
        alert("The earliest known fossils are from the Jurassic period. This was between 143 and 167 million years ago.Their long, slender body has some special features. They have overlapping scales which protect them, and help them move and climb trees. The scales have colours which may be camouflage or warning colours.Many species have skulls with more joints than the skulls of their lizard ancestors. This allows the snakes to swallow prey much larger than their heads. In their narrow bodies, snakes' paired organs (such as kidneys) appear one in front of the other instead of side by side. Most have only one working lung. Some species have kept a pelvic girdle with a pair of vestigial claws on either side of the cloaca. They have no eyelids or external ears. They can hiss, but otherwise make no vocal sounds. ");
        
    }
});
$("#stylo5").on({
    mouseenter : function(){
        $('#stylo5').css('background',"green").css('color','white');
 
    },
    mouseleave : function(){
        $('#stylo5').css('background',"white").css('color','black');
    },
    click : function(){
        alert("The camelids, as a family, include the -New World- camelids: the llama, the alpaca, the guanaco, and the vicuña.The earliest known camel, called Protylopus, lived in North America 40 to 50 million years ago, during the Eocene. It was about the size of a rabbit and lived in the open woodlands of what is now South Dakota.");
        
    }
});
$("#stylo6").on({
    mouseenter : function(){
        $('#stylo6').css('background',"green").css('color','white');
 
    },
    mouseleave : function(){
        $('#stylo6').css('background',"white").css('color','black');
    },
    click : function(){
        alert("Since rabbits are prey animals, they are careful in open spaces. If they sense danger, they freeze and watch. Rabbit vision has a very wide field, including overhead scanning. Their enemies are foxes, wolves, coyotes, lynx, cougars, eagles, domesticated dogs, bears, raccoons, skunks, badgers, owls, minks, weasels and snakes. People are also known to shoot rabbits. Their escape method is to run for their burrow, where they are better protected. Rabbits have a complex social structure and, like dogs, they have a hierarchy. Rabbit ears probably have several functions. The main function is to give warning of predators, but they may be used for signaling, and temperature regulation.… At birth, an elephant calf may weigh as much as 100 kg (225 pounds). The baby elephant develops for 20 to 22 months inside its mother. No other land animal takes this long to develop before being born.In the wild, elephants have strong family relationship. Their ways of acting toward other elephants are hard for people to understand. They -talk- to each other with very low sounds. Most elephants sounds are so low, people cannot hear them. But elephants can hear these sounds far away.[2] Elephants have strong, leathery skin to protect themselves. ");
        
    }
});
$("#stylo7").on({
    mouseenter : function(){
        $('#stylo7').css('background',"green").css('color','white');
 
    },
    mouseleave : function(){
        $('#stylo7').css('background',"white").css('color','black');
    },
    click : function(){
        alert("Sometimes, -eagle- can just mean any large hawk; as a group, eagles are not closely related to one another.The largest eagle that has ever lived is Haast's eagle. It is the only eagle in the world ever to have been top predator of its ecosystem. Though it is now extinct, it lived in New Zealand.Almost all eagles are carnivores. This means that they eat meat from other animals, including fish, rabbits, and squirrels. Birds that eat meat are also known as birds of prey. Eagles are birds of prey, and so are vultures and falcons. Eagles use their strong talons to catch and grab their food, and they use their sharp beaks to help them tear into their meat. Even though most eagles are carnivores, the African Vulturine Fish-Eagle mostly eats oil palm fruits. ");
        
    }
});
$('p').dblclick(function(){
    $('input').fadeToggle(500);
});

$('#album').mouseenter(function() {
    const audio = new Audio("../image/pic/sound.mp3");
    audio.play();
    
  });
 
  function toto(){
    $("#balle").animate({left:"600px"},1000);
   $("#balle").animate({bottom:"440px"},1000);
    $("#balle").animate({left:"-30px"},1000);
    $("#balle").animate({bottom:"0px"},1000);
    toto();
}


$(document).ready(function(){
    toto();

});

function bienvenu(){
    $("#welcome").animate({left:"600px"},2000);
   $("#welcome").animate({bottom:"500px"},2000);
    $("#welcome").animate({left:"-80px"},2000);
    $("#welcome").animate({bottom:"50px"},2000);
    bienvenu();
}


$(document).ready(function(){
    bienvenu();

});
    
$('.carousel').carousel({
    interval: 2000
  })

  $('#phase1').mouseenter(function(){
    $('#phase1').css(' border',"1px solid red").css('outline','5px dotted green');
    
  });
  


});
