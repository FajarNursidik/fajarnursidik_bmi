window.onload = () => {
    const button = document.querySelector('#btn');
    button.addEventListener('click', calculateBmi)
}

function calculateBmi() {
    const height = document.querySelector('#height').value;
    const weight = document.querySelector('#weight').value;
    const result = document.querySelector('#result');

    if (!height || isNaN(height) || height < 0) {
        result.innerText = "ISI DULU TINGGI & BERATNYA WOY!!";
        return;
    } else if (!weight || isNaN(weight) || weight < 0) {
        result.innerText = "ISI DULU TINGGI & BERATNYA WOY!!";
        return;
    }
    if (weight != 0 && height != 0) {
        
        var bmi = weight / (height * height);

        
        document.getElementById('result').innerText = 'Your BMI is: ' + bmi.toFixed(2);
    } else {
        
        document.getElementById('result').innerText = 'ISI DULU TINGGI & BERATNYA WOY!!';
    }
}

    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi < 18.5) {
        result.innerText = `Berat anda kurang: ${bmi}`; 
    } else if (bmi >= 18.5 && bmi < 24.9) {
        result.innerText = `Normal: ${bmi}`;
    } else if (bmi >= 25 && bmi < 29.9) {
        result.innerText = `Keberatann,kurusin !: ${bmi}`;
    } else if (bmi >= 30 && bmi < 34.9) {
        result.innerText = `Obesitas: ${bmi}`;
    } else if (bmi >= 35.5 && bmi < 39.9) {
        result.innerText = `Obesitas parah : ${bmi}`;
    } else {
        result.innerText = `obesitas tingkat kacau: ${bmi}`;
    }
