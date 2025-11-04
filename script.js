function show_conversions(temperature) {
    if (isNaN(temperature)) {
        alert("Please enter a valid temperature.");
        document.getElementById('thermometer-input').value = "";
        return;
    }

    const celsius = parseFloat(temperature);
    const fahrenheit = (celsius * 1.8 + 32).toFixed(2);
    const kelvin = (celsius + 273.15).toFixed(2);
    document.getElementById('celsius').innerHTML = celsius;
    document.getElementById('fahrenheit').innerHTML = fahrenheit;
    document.getElementById('kelvin').innerHTML = kelvin;

    const mercury_level = 440 - (celsius + 20)*2.89285714286;
    const mercury = document.getElementById('mercury');
    if (mercury_level < 29.214285713879974) {
        mercury.setAttribute(
            'd', `M69 460 L80.99999999999999 460 L81 29.214285713879974 L69 29.214285713879974 L69 460 Z`
        );
    } else if (mercury_level > 454.4642857143) {
        mercury.setAttribute(
            'd', `M69 460 L80.99999999999999 460 L81 454.4642857143 L69 454.4642857143 L69 460 Z`
        );
    } else {
        mercury.setAttribute(
            'd', `M69 460 L80.99999999999999 460 L81 ${mercury_level} L69 ${mercury_level} L69 460 Z`
        );
    }

    if (celsius <= -273) {
        show_fun_fact('Scientists can get very, very close to absolute zero (-273.15˚C), but they can never actually reach it.');
    } else if (celsius < -250) {
        show_fun_fact('If you are exposed to this temperature even if it is just for a thousandth of a second, your whole body would freeze.');
    } else if (celsius < -230) {
        show_fun_fact('Average Temperature on the surface of Pluto, the farthest planet orbiting our Sun.');
    } else if (celsius < -210) {
        show_fun_fact('At this temperature oxygen freezes and it will be impossible to breathe.');
    } else if (celsius < -170) {
        show_fun_fact('You could survive for a few seconds at this temperatures before freezing.');
    } else if (celsius < -140) {
        show_fun_fact('Your nerves will not be able to carry so much sensation of cold, transmitting heat.');
    } else if (celsius < -110) {
        show_fun_fact('It would take very little time for your lungs to rupture from breathing such cold air.');
    } else if (celsius < -75) {
        show_fun_fact('The lowest recorded surface temperature on Earth is -88˚C in Vostok, Antarctica.');
    } else if (celsius < -50) {
        show_fun_fact('It is still possible to survive at these temperatures, provided that you wear very thick clothing.');
    } else if (celsius < -40) {
        show_fun_fact('In the population of Oymyakon, Russia, the average temperature is around -45˚C in January.');
    } else if (celsius < -30) {
        show_fun_fact('If you went outside naked at this temperature you would freeze to death in about 30 minutes.');
    } else if (celsius < -23) {
        show_fun_fact('Due to the extreme cold, fewer tears are produced, making the eyes dry which causes blurry vision.');
    } else if (celsius < -15) {
        show_fun_fact('If you do not wear gloves at this temperature, you will stop feeling your hands.');
    } else if (celsius < 0) {
        show_fun_fact('The temperature of the water when Titanic sank was estimated to be around -2˚C.');
    } else if (celsius === 0) {
        show_fun_fact('This is the freezing point of water and the melting point of ice.');
    } else if (celsius < 10) {
        show_fun_fact('The lowest temperature recorded in the Philippines was 6.3˚C at Baguio City.');
    } else if (celsius < 18) {
        show_fun_fact('The average surface temperature on Earth is 15˚C.');
    } else if (celsius < 22) {
        show_fun_fact('This is considered as the most comfortable temperature for humans.');
    } else if (celsius < 28) {
        show_fun_fact('25˚C - 28˚C is the average temperature in the Philippines.');
    } else if (celsius < 35) {
        show_fun_fact('If this is your body temperature, you are currently experiencing Hypothermia.');
    } else if (celsius < 37) {
        show_fun_fact('The average temperature of the Human Body is 37˚C or 98.6˚F.');
    } else if (celsius < 40) {
        show_fun_fact('At this temperature, Nasal passage will get dry causing, shortness of breath.');
    } else if (celsius < 45) {
        show_fun_fact('Heatstrokes typically occur at this temperature which can cause death or permanent disability.');
    } else if (celsius < 47) {
        show_fun_fact('This is the temperature at Mali, West Africa, during summer months.');
    } else if (celsius < 49) {
        show_fun_fact('Prolonged exposure to this temperature may lead to hallucinations.');
    } else if (celsius < 52) {
        show_fun_fact('The tears from your eyes will start to evaporate at this temperature.');
    } else if (celsius < 56) {
        show_fun_fact('At this temperature your blood pressure will be so low which would cause you to pass out.');
    } else if (celsius < 59) {
        show_fun_fact('It will be so hot that your body will start to feel pain.');
    } else if (celsius < 75) {
        show_fun_fact('Just a few minutes exposed to this heat will give you burns.');
    } else if (celsius < 100) {
        show_fun_fact('Breathing air at this temperature can make your lungs feel like they are burning.');
    } else if (celsius < 120) {
        show_fun_fact('100˚C is the boiling point of water, which becomes steam when it goes beyond that.');
    } else if (celsius < 200) {
        show_fun_fact('The average temperature on Mercury, the closest planet to the Sun, is 167˚C.');
    } else if (celsius < 600) {
        show_fun_fact('The average temperature on Venus, the hottest planet on the Solar System, is 464˚C.');
    } else if (celsius < 1000) {
        show_fun_fact('If your body is exposed at this temperature, it will begin to burn slowly.');
    } else if (celsius < 4000) {
        show_fun_fact("The temperature of Earth's Mantle is 1,000˚C - 3,700˚C. ");
    } else if (celsius < 6000) {
        show_fun_fact("This is the estimated temperature of Earth's Core.");
    } else if (celsius < 300000) {
        show_fun_fact('The surface temperature of the hottest star (WR 102) discovered is 200,000˚C.');
    } else if (celsius < 16000000) {
        show_fun_fact("The temperature of our Sun's core is estimated to be around 15,000,000˚C.");
    } else {
        show_fun_fact('The temperature of the universe 1 second after the Big Bang is around 10 raise to 32 Kelvin.');
    }

    // function show_description(adjective, img_path) {
    //     const description = document.createElement('h1');
    //     description.setAttribute('id', 'description');
    //     description.innerHTML = `Description: ${adjective}`;
    //     document.getElementById('description-container').append(description);
    //     const image = document.createElement('img');
    //     image.setAttribute('id', 'image');
    //     image.setAttribute('src', `${img_path}`);
    //     image.setAttribute('width', 200);
    //     image.setAttribute('height', 200);
    //     image.setAttribute('alt', `${adjective}`)
    //     document.getElementById('description-container').append(image);        
    // }

    if (celsius < -273.15) {
        show_description('Below Absolute Zero', 'descriptive_images/below_absolute_zero.jpg');
    } else if (celsius === -273.15) {
        show_description('Absolute Zero', 'descriptive_images/absolute_zero.jpg');
    } else if (celsius < -89) {
        show_description('Outerworldly Cold', 'descriptive_images/outerworldly_cold.jpg');
    } else if (celsius < -40) {
        show_description('Arctic', 'descriptive_images/arctic.jpg');
    } else if (celsius < -20) {
        show_description('Frigid', 'descriptive_images/frigid.jpg');
    } else if (celsius < -10) {
        show_description('Freezing', 'descriptive_images/freezing.jpg');
    } else if (celsius < 0) {
        show_description('Cold', 'descriptive_images/cold.jpg');
    } else if (celsius < 5) {
        show_description('Chilly', 'descriptive_images/chilly.jpg');
    } else if (celsius < 9) {
        show_description('Brisk', 'descriptive_images/brisk.jpg');
    } else if (celsius < 15) {
        show_description('Cool', 'descriptive_images/cool.jpg');
    } else if (celsius < 20) {
        show_description('Mild', 'descriptive_images/mild.jpg');
    } else if (celsius < 25) {
        show_description('Perfect', 'descriptive_images/perfect.jpg');
    } else if (celsius < 30) {
        show_description('Warm', 'descriptive_images/warm.jpg');
    } else if (celsius < 35) {
        show_description('Hot', 'descriptive_images/hot.jpg');
    } else if (celsius < 45) {
        show_description('Sweltering', 'descriptive_images/sweltering.jpg');
    } else if (celsius < 59) {
        show_description('Scorching', 'descriptive_images/scorching.jpg');
    } else if (celsius < 700) {
        show_description('Blazing', 'descriptive_images/blazing.jpg');
    } else if (celsius < 6000) {
        show_description('Molten', 'descriptive_images/molten.jpg');
    } else if (celsius < 16000000) {
        show_description('Cosmically Hot', 'descriptive_images/cosmically_hot.jpg');
    } else {
        show_description('Big Bang', 'descriptive_images/big_bang.jpg');
    }

    const circle = document.getElementById('circle');

    if (celsius < -1000) {
        mercury.style.fill = circle.style.fill = '#00047e';
    } else if (celsius < -273.15) {
        mercury.style.fill = circle.style.fill = '#0038b9';
    } else if (celsius < -200) {
        mercury.style.fill = circle.style.fill = '#256fff';
    } else if (celsius < -150) {
        mercury.style.fill = circle.style.fill = '#257fff';
    } else if (celsius < -100) {
        mercury.style.fill = circle.style.fill = '#258fff';
    } else if (celsius < -15) {
        mercury.style.fill = circle.style.fill = '#259fff';
    } else if (celsius < 4) {
        mercury.style.fill = circle.style.fill = '#25afff';
    } else if (celsius < 10) {
        mercury.style.fill = circle.style.fill = '#f2b3b9';
    } else if (celsius < 15) {
        mercury.style.fill = circle.style.fill = '#ed99a2';
    } else if (celsius < 23) {
        mercury.style.fill = circle.style.fill = '#e9808b';
    } else if (celsius < 35) {
        mercury.style.fill = circle.style.fill = '#e46774';
    } else if (celsius < 50) {
        mercury.style.fill = circle.style.fill = '#e04d5d';
    } else if (celsius < 80) {
        mercury.style.fill = circle.style.fill = '#db3445';
    } else if (celsius < 120) {
        mercury.style.fill = circle.style.fill = '#d71a2e';
    } else if (celsius < 1000) {
        mercury.style.fill = circle.style.fill = '#a41726';
    } else if (celsius < 5000) {
        mercury.style.fill = circle.style.fill = '#900a22';
    } else if (celsius < 16000000){
        mercury.style.fill = circle.style.fill = '#810020';
    } else {
        mercury.style.fill = circle.style.fill = '#000000';
    }    
    
}

function show_fun_fact(fact) {
    const fun_fact = document.getElementById('fun_fact');
    fun_fact.innerHTML = `Fun Fact: ${fact}`;
}

function show_description(adjective, img_path) {
    const description = document.getElementById('description');
    description.innerHTML = `Description: ${adjective}`;

    const image = document.getElementById('image');
    image.setAttribute('id', 'image');
    image.setAttribute('src', `${img_path}`);
    image.setAttribute('alt', `${adjective}`)
    document.getElementById('description-container').append(image);        
}

document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('thermometer-input');
    show_conversions(0);
    input.value = "";
    document.getElementById('thermometer-slider').oninput = function() {
        show_conversions(this.value);
    };

    input.addEventListener('keypress', event => {
        if (event.key === 'Enter') {
            show_conversions(input.value)

        }
    });
})