const btnDisplay = document.getElementById('result');

btnDisplay.addEventListener('click',()=>{
    let age = document.getElementById('age').value;
    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;

    let BMI = Math.floor((weight/(height*height))*100000)/10;

    let category = ''
    if (age >= 18) {
        switch (true) {
            case(BMI < 16):
                category = 'Severely Thin';
                break;
            case(BMI >= 16 && BMI < 17):
                category = 'Moderately Thin';
                break;
            case(BMI >= 17 && BMI < 18.5):
                category = 'Mildly Thin';
                break;
            case(BMI >= 18.5 && BMI < 25):
                category = 'Normal';
                break;
            case(BMI >= 25 && BMI < 30):
                category = 'Overweight';
                break;
            case(BMI >= 30 && BMI < 35):
                category = 'Obese Class I';
                break;
            case(BMI >= 35 && BMI < 40):
                category = 'Obese Class II';
                break;
            case(BMI >= 40):
                category = 'Obese Class III';
                break;
        }
    }
    document.getElementById('output').innerHTML = `BMI= ${BMI} kg/m²<br>Your BMI class is ${category}`;
})

