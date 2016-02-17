//This is the title for your window tab, and your Radar
document.title = "NEPSD's Technology Radar (December 2016)";


//This is the concentic circles that want on your radar
var radar_arcs = [{
    'r': 100,
    'name': 'Adopt'
  }, {
    'r': 200,
    'name': 'Trial'
  }, {
    'r': 300,
    'name': 'Assess'
  }, {
    'r': 400,
    'name': 'Hold'
  }
  // ,{'r':500,'name':'Possible Extra if you want it'}
];


var h = 800;
var w = 1200;

var radar_data = [
    { "quadrant": "Techniques",
        "left" : 45,
        "top" : 18,
        "color" : "#8FA227",
        "items" : [ 
            {"name":"Events for messages - CQRS", "pc":{"r":225,"t":120},"movement":"c"},
            {"name":"Continuous Delivery", "pc":{"r":230,"t":110},"movement":"c"},
            {"name":"Pair Programming", "pc":{"r":130,"t":170},"movement":"c"}, 
            {"name":"Build Pipelines", "pc":{"r":180,"t":100},"movement":"c"},   
            {"name":"Isolated dev envs", "pc":{"r":180,"t":125},"movement":"c"},  
            {"name":"Clean Code", "pc":{"r":130,"t":120},"movement":"c"},
            {"name":"Evolutionary architecture", "pc":{"r":120,"t":95},"movement":"c"},
            {"name":"Code Reviews", "pc":{"r":110,"t":110},"movement":"c"},
            {"name":"Valuable, cheap tests", "pc":{"r":130,"t":150},"movement":"c"},
            {"name":"Dependency Injection", "pc":{"r":80,"t":130},"movement":"c"},   
        ]
    },
    { "quadrant": "Tools",
        "left": w-200+30,
        "top" : 18,
        "color" : "#587486",
        "items" : [ 

  { name: 'Responsive Design',    pc: { r: 150, t: 14 },    movement: 'c' },
   { name: 'Swagger',    pc: { r: 180, t: 80 },    movement: 'c' },
   { name: 'Mockito',    pc: { r: 200, t: 84 },    movement: 'c',    domain: 'back-end' },
   { name: 'Junit',    pc: { r: 200, t: 20 },    movement: 'c',    domain: 'back-end' },
   { name: 'Hamcrest',    pc: { r: 200, t: 4 },    movement: 'c',    domain: 'back-end' },

  { name: 'Ansible',    pc: { r: 280, t: 74 },    movement: 'c' },  
  { name: 'Webpack',    pc: { r: 200, t: 74 },    movement: 'c' }, 
  { name: 'Jenkins',    pc: { r: 80, t: 46 },    movement: 'c' },

  { name: 'Hibernate ^',    pc: { r: 380, t: 56 },    movement: 'c' },
  { name: 'MongoDB',    pc: { r: 300, t: 5 },    movement: 'c' }, 
  { name: 'Subversion',    pc: { r: 290, t: 18 },    movement: 'c' }
  ]
    },
    { "quadrant": "Platforms",
        "left" :45,
         "top" : (h/2 + 18),
        "color" : "#DC6F1D",
        "items" : [

            {"name":"VirutalBox", "pc":{"r":130,"t":260},"movement":"t"},   
            {"name":"Node.js", "pc":{"r":100,"t":260},"movement":"t"},   
            {"name":"Cygwin", "pc":{"r":90,"t":250},"movement":"t"},   
            {"name":"Ubuntu 12.04", "pc":{"r":170,"t":215},"movement":"c"},      
            {"name":"Tomcat 7", "pc":{"r":250,"t":260},"movement":"c"},
            {"name":"JVM as platform", "pc":{"r":90,"t":265},"movement":"c"},   
            {"name":"Spring", "pc":{"r":290,"t":215},"movement":"c"},

        ]
    },
    { "quadrant": "Languages & Frameworks",
        "color" : "#B70062",
        "left"  : (w-200+30),
        "top" :   (h/2 + 18),
        "items" : [ 
            { name: 'Guava', pc: { r: 60, t: 278 },  movement: 'c' },

            {"name":"Java 7", "pc":{"r":130,"t":355},"movement":"c"},   
            {"name":"Groovy ^", "pc":{"r":320,"t":280},"movement":"c"},

            {"name":"Javascript", "pc":{"r":220,"t":275},"movement":"c"},   
            {"name":"Backbone.js", "pc":{"r":220,"t":280},"movement":"c"},   
            {"name":"Joint.js", "pc":{"r":220,"t":290},"movement":"c"},   
            {"name":"jQuery.js", "pc":{"r":200,"t":280},"movement":"c"},               
            {"name":"Lodash", "pc":{"r":80,"t":290},"movement":"c"},   

            {"name":"Functional Programming", "pc":{"r":285,"t":330},"movement":"c"},   
            { name: 'Web Components', pc: { r: 260, t: 330 },  movement: 'c' },

            { name: 'Spring Data', pc: { r: 280, t: 300 },  movement: 'c' },
        ]
    }
];