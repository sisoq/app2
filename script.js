function showSection(sectionNumber) {
    var sections = document.getElementsByClassName("section");
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
    }
    var sectionId = "section" + sectionNumber;
    document.getElementById(sectionId).style.display = "block";
}

    function calculateAge() {
        var birthdate = document.getElementById("birthdate").value;
        if (!birthdate) {
            alert("Please enter your date of birth.");
            return;
        }

        var today = new Date();
        var dob = new Date(birthdate);
        var age = today.getFullYear() - dob.getFullYear();
        var monthDiff = today.getMonth() - dob.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
            age--;
        }

        document.getElementById("result").innerHTML = "Your age is: " + age;
    }

    function resetFields() {
        document.getElementById("birthdate").value = "";
        document.getElementById("result").innerHTML = "";
    }
    // احصل على النموذج وأضف استماع لحدث التقديم (submit)
    function calculateBMI() {
            var weight = parseFloat(document.getElementById('weight').value);
            var height = parseFloat(document.getElementById('height').value) / 100; // تحويل الطول من سم إلى متر
            var bmi = weight / (height * height);
            var classification;

            if (bmi < 18.5) {
                classification = "نحيف جداً";
            } else if (bmi >= 18.5 && bmi <= 24.9) {
                classification = "وزن طبيعي";
            } else if (bmi >= 25 && bmi <= 29.9) {
                classification = "زيادة في الوزن، ولكنها ليست بشكل كبير";
            } else if (bmi >= 30 && bmi <= 34.9) {
                classification = "السمنة (الدرجة الأولى)";
            } else if (bmi >= 35 && bmi <= 39.9) {
                classification = "السمنة المتوسطة (الدرجة الثانية)";
            } else {
                classification = "يرجى إدخال معطيات";
            }

            document.getElementById('result-bmiForm').innerHTML = "نتيجة مؤشر كتلة الجسم (BMI): " + bmi.toFixed(2) + "<br>التصنيف: " + classification;
        }


function appendToDisplay(value) {
    document.getElementById('display111').value += value;
}

function clearDisplay() {
    document.getElementById('display111').value = '';
}

function clearEntry() {
    var displayValue = document.getElementById('display111').value;
    document.getElementById('display111').value = displayValue.slice(0, -1);
}

function calculate() {
    var expression = document.getElementById('display111').value;
    var result = eval(expression);
    document.getElementById('display111').value = result;
}


function convertDistance() {
    const inputDistance = parseFloat(document.getElementById('inputDistance').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
    let outputDistance;

    // التحويل إلى متر
    let distanceInMeter;
    switch (fromUnit) {
        case 'km':
            distanceInMeter = inputDistance * 1000;
            break;
        case 'cm':
            distanceInMeter = inputDistance / 100;
            break;
        case 'mi':
            distanceInMeter = inputDistance * 1609.34;
            break;
        case 'yd':
            distanceInMeter = inputDistance * 0.9144;
            break;
        case 'ft':
            distanceInMeter = inputDistance * 0.3048;
            break;
        case 'in':
            distanceInMeter = inputDistance * 0.0254;
            break;
        default: // Meter
            distanceInMeter = inputDistance;
    }

    // التحويل من متر إلى وحدة الوجهة
    switch (toUnit) {
        case 'km':
            outputDistance = distanceInMeter / 1000;
            break;
        case 'cm':
            outputDistance = distanceInMeter * 100;
            break;
        case 'mi':
            outputDistance = distanceInMeter / 1609.34;
            break;
        case 'yd':
            outputDistance = distanceInMeter / 0.9144;
            break;
        case 'ft':
            outputDistance = distanceInMeter / 0.3048;
            break;
        case 'in':
            outputDistance = distanceInMeter / 0.0254;
            break;
        default: // Meter
            outputDistance = distanceInMeter;
    }

    document.getElementById('outputDistance').textContent = outputDistance;
}
