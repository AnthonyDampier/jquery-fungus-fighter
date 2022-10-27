$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
let fungusHP = 100;
let playerHP = 100;
let playerAP = 100;


function onReady() {
    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember
    // - Handle events that ->
    $('.attack-btn.arcane-sceptre').on('click', arcaneSpecter);
    $('.attack-btn.entangle').on('click', entangle);
    $('.attack-btn.dragon-blade').on('click', dragonBlade);
    $('.attack-btn.star-fire').on('click', starFire);

    setInterval(fungusHeals, 1000);
    setInterval(recoverAP, 2000);

    // - Updates state which is ->
    // - Rendered to the DOM
}

function arcaneSpecter(){
    console.group('arcane sceptre');
    // AP Cost: 12
    let costAP = 12;
    let damageHP = 14;
    // if player has enough AP render attack; else fail attack.
    if (checkAP(costAP)){ 
        console.log('Attack');
        playerAPCost(costAP);
        fungusDamaged(damageHP);
    }else {
        //attack failed due to lack of playerAp
        console.log('ATTACK FAILED!!!');
    }
    render();
    console.groupEnd();
}

function entangle(){
    //AP Cost: 23
    //HP Damage: 9
    console.group('entangle');
    // AP Cost: 12
    let costAP = 23;
    let damageHP = 9;
    // if player has enough AP render attack; else fail attack.
    if (checkAP(costAP)){ 
        console.log('Attack');
        playerAPCost(costAP);
        fungusDamaged(damageHP);
    }else {
        //attack failed due to lack of playerAp
        console.log('ATTACK FAILED!!!');
    }
    render();
    console.groupEnd();
}

function dragonBlade(){
    //AP Cost: 38
    //HP Damage: 47
    console.group('dragonBlade');
    // AP Cost: 12
    let costAP = 38;
    let damageHP = 47;
    // if player has enough AP render attack; else fail attack.
    if (checkAP(costAP)){ 
        console.log('Attack');
        playerAPCost(costAP);
        fungusDamaged(damageHP);
    }else {
        //attack failed due to lack of playerAp
        console.log('ATTACK FAILED!!!');
    }
    render();
    console.groupEnd();
}

function starFire(){
    //AP cost: 33
    //HP damage: 25
    console.group('starFire');
    // AP Cost: 12
    let costAP = 33;
    let damageHP = 23;
    // if player has enough AP render attack; else fail attack.
    if (checkAP(costAP)){ 
        console.log('Attack');
        playerAPCost(costAP);
        fungusDamaged(damageHP);
        
    }else {
        //attack failed due to lack of playerAp
        console.log('ATTACK FAILED!!!');
    }
    render();
    console.groupEnd();
}

function fungusDamaged(damageHP){
    //fungusHP = fungusHP - HPdamage
    console.log('Fungus damage for: ', damageHP);
    if((fungusHP-damageHP) > 0){
        fungusHP -= damageHP;
    } else {
        fungusHP =0;
        $('.enemy').remove('walk');
    }
    console.log('Fungus hp is reduced to: ', fungusHP);
}
function playerAPCost(reduceAP){
    //playerAP = PlayerAP - costAP
    console.log('Reduce AP by: ',reduceAP);
    playerAP -= reduceAP;
    console.log('Players new AP: ', playerAP);
}

function fungusHeals(){
    if(fungusHP == 0){
        console.log('Fungus is dead... cannot heal');
    }else if ( fungusHP < 50){
        fungusHP += 2;
    }
    render();
}

function playerAttacked(){
    // playerHP = playerHP - HPdamage
}

function checkAP(attackAPCost){
    if (attackAPCost > playerAP){
        console.log('Attack failed: Attack cost (', attackAPCost, ') > Player AP(', playerAP,')');
        return false;
    } else {
        console.log('Attack successful: ', attackAPCost, ' < ', playerAP)
        return true;
    }
}

function recoverAP(){
    if(playerAP < 50){
        playerAP += 3;
    }
}

function render(){
    console.group('Rendering:');
    console.log($('#ap-meter').val());
    $('#ap-meter').val(playerAP);
    $('.ap-text').text(playerAP);
    
    console.log($('#hp-meter').val());
    $('#hp-meter').val(fungusHP);
    $('.hp-text').text(fungusHP);
    console.groupEnd();
}