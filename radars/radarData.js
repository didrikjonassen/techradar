//This is the title for your window tab, and your Radar
document.title = "Didrik's Technology Radar";


//This is the concentic circles that want on your radar
var radar_arcs = [
                   {'r':100,'name':'Adopt'}
                  ,{'r':200,'name':'Trial'}
                  ,{'r':300,'name':'Assess'}
                  ,{'r':400,'name':'Hold'}
                 // ,{'r':500,'name':'Possible Extra if you want it'}
                 ];

//This is your raw data
//
// Key
//
// movement:
//   t = moved
//   c = stayed put
//
// blipSize: 
//  intValue; This is optional, if you omit this property, then your blip will be size 70.
//            This give you the ability to be able to indicate information by blip size too
//
// url:
// StringValue : This is optional, If you add it then your blips will be clickable to some URL
//
// pc: polar coordinates
//   r = distance away from origin ("radial coordinate")
//     - Each level is 100 points away from origin
//     t = angle of the point from origin ("angular coordinate")
//     - 0 degrees is due east
//
// Coarse-grained quadrants
// - Techniques: elements of a software development process, such as experience design; and ways of structuring software, such micro-services.
// - Tools: components, such as databases, software development tools, such as versions control systems; or more generic categories of tools, such as the notion of polyglot persistance.
// - Platforms: things that we build software on top of: mobile technologies like Android, virtual platforms like the JVM, or generic kinds of platforms like hybrid clouds
// - Programming Languages and Frameworks
//
// Rings:
// - Adopt: blips you should be using now; proven and mature for use
// - Trial: blips ready for use, but not as completely proven as those in the adopt ring; use on a trial basis, to decide whether they should be part of your toolkit
// - Assess: things that you should look at closely, but not necessarily trial yet - unless you think they would be a particularly good fit for you
// - Hold: things that are getting attention in the industry, but not ready for use; sometimes they are not mature enough yet, sometimes they are irredeemably flawed
//      Note: there's no "avoid" ring, but throw things in the hold ring that people shouldn't use.

var h = 1160;
var w = 1200;

var radar_data = [
    { "quadrant": "Techniques",
        "left" : 45,
        "top" : 18,
        "color" : "#8FA227",
        "items" : [ 
            {"name":"CQRS", "pc":{"r":350,"t":135},"movement":"c"},
            {"name":"Responsive Design", "pc":{"r":180,"t":170},"movement":"c"},    
            {"name":"REST", "pc":{"r":90,"t":170},"movement":"c"},   
            {"name":"Domain Driven Development", "pc":{"r":80,"t":100},"movement":"c"},   
            {"name":"Test Driven Design", "pc":{"r":150,"t":140},"movement":"c"} 
        ]
    },
    { "quadrant": "Tools",
        "left": w-200+30,
        "top" : 18,
        "color" : "#587486",
        "items" : [ 
            {"name":"Docker", "pc":{"r":280,"t":20},"movement":"c"},   
            {"name":"Jenkins", "pc":{"r":180,"t":65},"movement":"c"},   
            {"name":"Vagrant", "pc":{"r":180,"t":50},"movement":"c"},   
            {"name":"Maven", "pc":{"r":160,"t":85},"movement":"c"},   
            {"name":"Emacs", "pc":{"r":130,"t":30},"movement":"c"},   
            {"name":"Stash", "pc":{"r":70,"t":55},"movement":"c"},   
            {"name":"Git", "pc":{"r":60,"t":20},"movement":"c"},   
            {"name":"Eclipse", "pc":{"r":80,"t":85},"movement":"c"},   
            {"name":"Intellij IDEA", "pc":{"r":80,"t":10},"movement":"c"},   
            {"name":"VirtualBox", "pc":{"r":30,"t":30},"movement":"c"}
        ]
    },
    { "quadrant": "Platforms",
        "left" :45,
         "top" : (h/2 + 18),
        "color" : "#DC6F1D",
        "items" : [
            {"name":"GPGPU", "pc":{"r":220,"t":185},"movement":"c"},   
            {"name":"NodeJs", "pc":{"r":250,"t":260},"movement":"c"},   
            {"name":"Postgres", "pc":{"r":180,"t":250},"movement":"c"},   
            {"name":"Jetty", "pc":{"r":180,"t":220},"movement":"c"},   
            {"name":"Linux for utvikling", "pc":{"r":30,"t":225},"movement":"c"}
        ]
    },
    { "quadrant": "Languages",
        "color" : "#B70062",
        "left"  : (w-200+30),
        "top" :   (h/2 + 18),
        "items" : [ 
            {"name":"Java", "pc":{"r":30,"t":330},"movement":"c"},   
            {"name":"Python", "pc":{"r":70,"t":330},"movement":"c"},
            {"name":"Lisp", "pc":{"r":290,"t":320},"movement":"c"},   
            {"name":"JavaScript", "pc":{"r":50,"t":310},"movement":"c"},   
            {"name":"Scala", "pc":{"r":250,"t":275},"movement":"c"},   
            {"name":"C", "pc":{"r":90,"t":310},"movement":"c"},   
            {"name":"C++", "pc":{"r":220,"t":290},"movement":"c"},   
            {"name":"Shell Scripting", "pc":{"r":150,"t":282},"movement":"c"},
            {"name":"HTML 5", "pc":{"r":140,"t":340},"movement":"c"},   
            {"name":"Dart", "pc":{"r":220,"t":330},"movement":"c"},   
            {"name":"CoffeScript", "pc":{"r":260,"t":350},"movement":"c"},   
            {"name":"BackboneJs", "pc":{"r":130,"t":310},"movement":"c"},
            {"name":"jQuery", "pc":{"r":160,"t":325},"movement":"c"},
            {"name":"CSS Frameworks", "pc":{"r":180,"t":290},"movement":"c"},
            {"name":"Bootstrap", "pc":{"r":60,"t":282},"movement":"c"},
            {"name":"Less", "pc":{"r":120,"t":295},"movement":"c"},
            {"name":"Spring", "pc":{"r":175,"t":305},"movement":"c"},
            {"name":"Play", "pc":{"r":230,"t":310},"movement":"c"},
            {"name":"DropWizard", "pc":{"r":275,"t":300},"movement":"c"},
            {"name":"Spring Boot", "pc":{"r":260,"t":330},"movement":"c"}
        ]
    }
];
