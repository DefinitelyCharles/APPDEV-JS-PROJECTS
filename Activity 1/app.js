const btn1 = document.getElementById("btn1")
btn1.addEventListener("click", () => {
    let Name = document.getElementById("Name").value
    let Address = document.getElementById("Address").value
    let Telephone = document.getElementById("Telephone").value
    let Major = document.getElementById("Major").value

    let x = `
    Hello! ${Name}, I see that you are from ${Address} 
    and let your pursuing ${Major} and you can be contacted using ${Telephone}.
    `

    document.getElementById("output1").innerHTML = x
})

const btn2 = document.getElementById("btn2")
btn2.addEventListener("click", () => {
    let Num = document.getElementById("Num").value
    let Product = Num * 0.23

    let x = `
    The total sales are ${Product} percent of annual profit.
    `

    document.getElementById("output2").innerHTML = x
})

const btn3 = document.getElementById("btn3")
btn3.addEventListener("click", () => {
    let Speed1 = document.getElementById("Speed1").value
    let Speed2 = document.getElementById("Speed2").value
    let Speed3 = document.getElementById("Speed3").value

    let Distance1 = Speed1 * 5
    let Distance2 = Speed2 * 8
    let Distance3 = Speed3 * 12

    let x = `
    The distance the car will travel in 5 hours is ${Distance1}mph.<br>
    The distance the car will travel in 5 hours is ${Distance2}mph.<br>
    The distance the car will travel in 5 hours is ${Distance3}mph.<br>
    `

    document.getElementById("output3").innerHTML = x
})

const btn4 = document.getElementById("btn4")
btn4.addEventListener("click", () => {
    let Miles = document.getElementById("Miles").value
    let Gallons = document.getElementById("Gallons").value

    let MilesPerGallon = Miles / Gallons

    let x = `
    The total Miles Per Gallons is ${MilesPerGallon}MPG.<br>
    `

    document.getElementById("output4").innerHTML = x
})

const btn5 = document.getElementById("btn5")
btn5.addEventListener("click", () => {
    let Celcius = document.getElementById("Celcius").value

    let Fahrenheit = (9/5*Celcius)+32

    let x = `
    The temperature in ${Celcius} Celcius.<br>
    The temperature in ${Fahrenheit} Fahrenheit.<br>
    `

    document.getElementById("output5").innerHTML = x
})

const btn6 = document.getElementById("btn6")
btn6.addEventListener("click", () => {
    let CookiesEaten = document.getElementById("Cookies").value

    let CookiesPerBag = 40
    let ServingsPerBag = 10
    let CaloriesPerSeving = 300
    let TotalCalories = (CookiesEaten/CookiesPerBag)*(ServingsPerBag*CaloriesPerSeving)

    let x = `
    The total calories is ${TotalCalories}.<br>
    `

    document.getElementById("output6").innerHTML = x
})

const btn7 = document.getElementById("btn7")
btn7.addEventListener("click", () => {
    let Male = document.getElementById("Male").value
    let Female = document.getElementById("Female").value
    let TotalStudents = (Male + Female);
    let MalePercent = (Male/TotalStudents)* 100;
    let FemalePercent = (Female/TotalStudents)* 100;

    let x = `
    There are ${Male} male students and ${Female} female students.<br>
    There are ${TotalStudents}, the class consists ${MalePercent} percent males students and ${FemalePercent} percent females students
    `

    document.getElementById("output7").innerHTML = x
})


