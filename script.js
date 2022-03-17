const recipe1Btn = document.getElementById("recipe1")
const recipe2Btn = document.getElementById("recipe2")
const recipe3Btn = document.getElementById("recipe3")
const formArea = document.getElementById("form-container")
const outputArea = document.getElementById("outputArea")

const form = document.getElementById("formElement")
const farina = document.getElementById("farina")

let acqua 
let lievito 
let sale
let olio

const firstWaterRatio = 1.42857142857
const firstYeastRatio = 166.666666667
const firstSaltRatio = 33.3333333333
const oilRatio = 20

const secondWaterRatio = 1.53846153846
const secondYeastRatio = 400
const secondSaltRatio = 38.4615384615

const thirdWaterRatio = 1.61812297735
const thirdYeastRatio = 129.87012987
const thirdSaltRatio = 43.4782608696

recipe1Btn.addEventListener("click", generateFirst)
recipe2Btn.addEventListener("click", generateSecond)
recipe3Btn.addEventListener("click", generateThird)

function renderFirst() {
    const form = document.getElementById("formElement")
    let farina = form.farina.value
    acqua = getAcqua(farina, firstWaterRatio)
    lievito = getLievito(farina, firstYeastRatio)
    sale = getSale(farina, firstSaltRatio)
    olio = getOlio(farina, oilRatio)
    if (farina > 0) {
        outputArea.innerHTML = `
            <p>Farina: ${farina}gr</p>
            <p>Acqua: ${acqua}gr</p>
            <p>Lievito: ${lievito}gr</p>
            <p>Sale: ${sale}gr</p>
            <p>Olio: ${olio}gr</p>
        `
    }
}

function renderSecond() {
    const form = document.getElementById("formElement")
    let farina = form.farina.value
    acqua = getAcqua(farina, secondWaterRatio)
    lievito = getLievito(farina, secondYeastRatio)
    sale = getSale(farina, secondSaltRatio)
    if (farina > 0) {
        outputArea.innerHTML = `
            <p>Farina: ${farina}gr</p>
            <p>Acqua: ${acqua}gr</p>
            <p>Lievito: ${lievito}gr</p>
            <p>Sale: ${sale}gr</p>
            `
        }            
}

function renderThird() {
    const form = document.getElementById("formElement")
    let farina = form.farina.value
    acqua = getAcqua(farina, thirdWaterRatio)
    lievito = getLievito(farina, thirdYeastRatio)
    sale = getSale(farina, thirdSaltRatio)
    if (farina > 0) {
        outputArea.innerHTML = `
            <p>Farina: ${farina}gr</p>
            <p>Acqua: ${acqua}gr</p>
            <p>Lievito: ${lievito}gr</p>
            <p>Sale: ${sale}gr</p>
            `
        }            
}

function generateFirst() {
    formArea.innerHTML = `
        <h2>Idratazione 70%</h2>
        <form id="formElement" onsubmit="return false">
        <input type="number" id="farina" placeholder="Farina">
        <button id="submit" type="submit">Genera</button>
        </form>
    `
    let submitBtn = document.getElementById("submit")
        submitBtn.addEventListener("click", renderFirst)
    
}

function generateSecond() {
    formArea.innerHTML = `
        <h2>Idratazione 65%</h2>
        <form id="formElement" onsubmit="return false">
        <input type="number" id="farina" placeholder="Farina">
        <button id="submit" type="submit">Genera</button>
        </form>
    `
    let submitBtn = document.getElementById("submit")
    submitBtn.addEventListener("click", renderSecond)
}

function generateThird() {
    formArea.innerHTML = `
        <h2>Pizza Devota</h2>
        <form id="formElement" onsubmit="return false">
        <input type="number" id="farina" placeholder="Farina">
        <button id="submit" type="submit">Genera</button>
        </form>
    `
    let submitBtn = document.getElementById("submit")
    submitBtn.addEventListener("click", renderThird)    
}

function getAcqua(farina, ratio) {
    acqua = (farina / ratio).toFixed(2)
    return acqua
}

function getLievito(farina, ratio) {
    lievito = (farina / ratio).toFixed(2)
    return lievito
}

function getSale(farina, ratio) {
    sale = (farina / ratio).toFixed(2)
    return sale
}

function getOlio(farina, ratio) {
    olio = (farina / ratio).toFixed(2)
    return olio
}





