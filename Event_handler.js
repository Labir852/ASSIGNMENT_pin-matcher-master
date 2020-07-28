
                                                    /* PIN GENERATION AREA*/

const generate_btn = document.getElementById("generate-btn");
const generation_form = document.getElementById("generation-form").innerText;
generate_btn.addEventListener('click',function(){

    const RandomInt = getRandomInt(1000,9999);
        document.getElementById("generation-form").value = RandomInt;
    console.log(RandomInt);
})


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


                                                    /* PIN GENERATION AREA*/


/* NUMBER EVENT HANDLER AREA*/