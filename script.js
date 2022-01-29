// 10kg di farina, 6,5 litri d'acqua, 260g di sale e 25g di lievito. 
//L'altra è 10kg di farina, 7 litri d'acqua, 6g di lievito per per litro, 300g di sale e 500g di olio.

const recipe1Btn = document.getElementById("recipe1")
const recipe2Btn = document.getElementById("recipe2")
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
const secondSaltsecond = 38.4615384615

recipe1Btn.addEventListener("click", generateFirst)
recipe2Btn.addEventListener("click", generateSecond)

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
    sale = getSale(farina, secondSaltsecond)
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
        <form id="formElement" onsubmit="return false">
        <input type="number" id="farina" placeholder="Farina">
        <button id="submit" type="submit">Genera</button>
        </form>
    `
    let submitBtn = document.getElementById("submit")
    submitBtn.addEventListener("click", renderSecond)
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




