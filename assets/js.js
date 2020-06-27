var typewrite = document.getElementById('typewrite');

var typewriter = new Typewriter(typewrite, {
    //loop: true,
    autoStart: true
});

const greet = 'Hey! <br/> I am <span class="bgPrimary px-2">Ankur Sharma</span>';
const intro = 'I am a Software Engineer & <br/> My code is messed up😂';
const about = 'I am not an ordinary Software Engineer, <br/> I am a school dropout'

typewriter.typeString(greet).pauseFor(2500).deleteAll().typeString(intro).pauseFor(2500).deleteAll().typeString(about).start();
