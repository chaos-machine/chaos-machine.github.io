/// <reference path="/Users/tudorteisanu/Desktop/chaos2/WebIdea/WebIdea/node_modules/@types/jquery/index.d.ts" />

var padding_horizontal = [];
var padding_horizontal_values = [];
var counter_ph;

var padding_vertical = [];
var padding_vertical_values = [];
var counter_pv;

var letter_spacing = [];
var letter_spacing_values = [];
var counter_ls;

if ($('.custom-paddings') != null)
    var $button_prefab = $('.custom-paddings');

var color_picker = $('#picker');

var initial_color = "#0433FF";

var all_caps, title_caps, no_caps;
var capitalization = "capitalization";
var corner_radius, color;

/*this is where the button is placed in html*/
let container = document.querySelector('.col-md-9');



/*enabling pop overs eveywhere*/
$(document).ready(function () {
    $('[data-toggle="popover"]').popover();
});



color_picker.on('input', function () {
    initial_color = this.value;
    if (document.querySelector('.custom-paddings') != null) {
        let button = document.querySelectorAll('.custom-paddings');
        for (var i = 0; i < button.length; i++) {
            button[i].style.setProperty("background-color", this.value);
            button[i].style.setProperty("border-color", this.value);
        }
    }
});

    

all_caps = document.getElementById("all-caps").addEventListener('click', function () {
    capitalization = "uppercase";

    if (document.querySelector('.custom-paddings') != null) {
        let button = document.querySelectorAll('.custom-paddings');
        for (var i = 0; i < button.length; i++) {
            button[i].style.setProperty('--caps', capitalization);
        }

    }

});

title_caps = document.getElementById("title-caps").addEventListener('click', function () {
    capitalization = "capitalize";

    if (document.querySelector('.custom-paddings') != null) {
        let button = document.querySelectorAll('.custom-paddings');

        for (var i = 0; i < button.length; i++) {
            button[i].style.setProperty('--caps', capitalization);
        }

    }

});

no_caps = document.getElementById("no-caps").addEventListener('click', function () {
    capitalization = "lowercase";

    if (document.querySelector('.custom-paddings') != null) {
        let button = document.querySelectorAll('.custom-paddings');

        for (var i = 0; i < button.length; i++) {
            button[i].style.setProperty('--caps', capitalization);
        }

    }

});

padding_horizontal = document.getElementById('padding_horizontal').addEventListener('change', function () {
    padding_horizontal = this.value.split(',');
    /*clearing the array of ints for the next change*/
    padding_horizontal_values = [];

    counter_ph = parseInt(padding_horizontal[0] - 1);
    while (counter_ph < parseInt(padding_horizontal[1])) {
        counter_ph++;
        padding_horizontal_values.push(counter_ph);

    }


});

letter_spacing = document.getElementById('letter_spacing').addEventListener('change', function () {
    letter_spacing = this.value.split(',');
    /*clearing the array of ints for the next change*/
    letter_spacing_values = [];

    counter_ls = parseInt(letter_spacing[0] - 1);
    while (counter_ls < parseInt(letter_spacing[1])) {
        counter_ls++;
        letter_spacing_values.push(counter_ls);

    }

});

padding_vertical = document.getElementById('padding_vertical').addEventListener('change', function () {
    padding_vertical = this.value.split(',');
    /*clearing the array of ints for the next change*/
    padding_vertical_values = [];
    /*the counter starts at min - 1, to match the [0] element*/
    counter_pv = parseInt(padding_vertical[0] - 1);
    while (counter_pv < parseInt(padding_vertical[1])) {
        counter_pv++;
        padding_vertical_values.push(counter_pv);
    }

});





function generateDesigns() {
   /// console.log("horizontal:" + padding_horizontal_values + "\n" + "vertical: " + padding_vertical_values
      ///  + "\n" + "letter spacing: " + letter_spacing_values);

    for (var k = 0; k < letter_spacing_values.length; k++) {
        for (var i = 0; i < padding_horizontal_values.length; i++) {
            for (var j = 0; j < padding_vertical_values.length; j++) {
                new_button = document.createElement('button');
                new_button.classList.add("btn-primary", "btn", "space-default", "space-right", "custom-paddings");

                new_button.style.setProperty('--p_left', padding_horizontal_values[i] + "px");
                new_button.style.setProperty('--p_top', padding_vertical_values[j] + "px");
                new_button.style.setProperty('--letter-spacing', letter_spacing_values[k] + "px");
                new_button.style.setProperty('--caps', capitalization);
         
                
                new_button.style.setProperty("background-color", initial_color);
                new_button.style.setProperty("border-color", initial_color);

                new_button.id = "button";



                new_button_text = document.createTextNode('Button');
                new_button.appendChild(new_button_text);
                container.appendChild(new_button);
            }
        }
    }

}



$('*', document.body).on('click','.custom-paddings', function () {
    console.log(this.id);


        var s = '';
        var o = getComputedStyle(this);
        for (var i = 0; i < o.length; i++) {
            if (o[i] == 'padding-left' && (o.getPropertyValue(o[i]) != 0 || o.getPropertyValue(o[i]) != null) )
                s += o[i] + ':' + o.getPropertyValue(o[i]) + ';';
        }
     console.log(s);
    $('body').popover({
            
            selector: '.custom-paddings',
            content: s,
            title: "btn properties",
            placement: 'bottom',
            trigger: 'focus'
        });

    });



function resetOutput() {

    $('.custom-paddings').remove();
}


