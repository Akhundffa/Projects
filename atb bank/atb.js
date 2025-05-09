const hamburger = document.getElementById("hamburger")
const main = document.querySelector("main")
const footer = document.querySelector("footer")
const marks = document.getElementById("marks")
const bars = document.getElementById("bars")

function hamopen() {
    hamburger.style.display = 'block'
    bars.style.display = 'none'
    marks.style.display = 'block'
    main.style.display = 'none'
    footer.style.display = 'none'

}
function hamclose() {
    hamburger.style.display = 'none'
    bars.style.display = 'block'
    marks.style.display = 'none'
    main.style.display = 'block'
    footer.style.display = 'block'
}
var swiper = new Swiper(".mySwiper", {
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const section2first = document.getElementById("section2first")
const section2second = document.getElementById("section2second")
const nagd = document.getElementById("nagd")
const emanet = document.getElementById("emanet")
const nagdh3 = document.getElementById("nagdh3")
const emaneth3 = document.getElementById("emaneth3")
const pth1 = document.getElementById("pathfirst1")
const pth2 = document.getElementById("pathfirst2")
const pth3 = document.getElementById("pathfirst3")
const psh1 = document.getElementById("pathsecond1")
const psh2 = document.getElementById("pathsecond2")
const psh3 = document.getElementById("pathsecond3")
const psh4 = document.getElementById("pathsecond4")
const psh5 = document.getElementById("pathsecond5")
const psh6 = document.getElementById("pathsecond6")
const psh7 = document.getElementById("pathsecond7")
const psh8 = document.getElementById("pathsecond8")
const psh9 = document.getElementById("pathsecond9")
const psh10 = document.getElementById("pathsecond10")
const psh11 = document.getElementById("pathsecond11")
const psh12 = document.getElementById("pathsecond12")
const psh13 = document.getElementById("pathsecond13")
const psh14 = document.getElementById("pathsecond14")
function acsec() {
    pth1.style.stroke = '#fff'
    pth2.style.stroke = '#fff'
    pth3.style.stroke = '#fff'
    psh1.style.stroke = 'black'
    psh2.style.stroke = 'black'
    psh3.style.stroke = 'black'
    psh4.style.stroke = 'black'
    psh5.style.stroke = 'black'
    psh6.style.stroke = 'black'
    psh7.style.stroke = 'black'
    psh8.style.stroke = 'black'
    psh9.style.stroke = 'black'
    psh10.style.stroke = 'black'
    psh11.style.stroke = 'black'
    psh12.style.stroke = 'black'
    psh13.style.stroke = 'black'
    psh14.style.stroke = 'black'
    section2first.style.display = 'block'
    section2second.style.display = 'none'
    nagd.style.backgroundColor = '#6f0bbb'
    emanet.style.backgroundColor = '#F3F3F3'
    nagd.style.color = '#fff'
    emanet.style.color = 'black'
    emaneth3.style.display = 'none'
    nagdh3.style.display = 'block'
    pathfirst.style.color = '#FFF'
}
function baglasec() {
    pth1.style.stroke = 'black'
    pth2.style.stroke = 'black'
    pth3.style.stroke = 'black'
    psh1.style.stroke = '#fff'
    psh2.style.stroke = '#fff'
    psh3.style.stroke = '#fff'
    psh4.style.stroke = '#fff'
    psh5.style.stroke = '#fff'
    psh6.style.stroke = '#fff'
    psh7.style.stroke = '#fff'
    psh8.style.stroke = '#fff'
    psh9.style.stroke = '#fff'
    psh10.style.stroke = '#fff'
    psh11.style.stroke = '#fff'
    psh12.style.stroke = '#fff'
    psh13.style.stroke = '#fff'
    psh14.style.stroke = '#fff'
    section2first.style.display = 'none'
    section2second.style.display = 'block'
    nagd.style.backgroundColor = '#F3F3F3'
    emanet.style.backgroundColor = '#6f0bbb'
    nagd.style.color = 'black'
    emanet.style.color = '#fff'
    emaneth3.style.display = 'block'
    nagdh3.style.display = 'none'
}
const azn = document.getElementById("azn")
const il = document.getElementById("il")
const deyer = document.getElementById("deyer")
const qiymet = document.getElementById("qiymet")
const rng2 = document.getElementById("rng2")
const rng1 = document.getElementById("rng1")
const deyerm = document.getElementById("deyerm")
const qiymetm = document.getElementById("qiymetm")
const ild = document.getElementById("ild")
const aznd = document.getElementById("aznd")
let q = ''
let j = ''
let k = ''
let m = 11
let e = ''
function yenile2() {
    ild.value = rng2.value + ' ay'
     z = parseInt(ild.value)
   
    if (z > 12 && z <= 24) {
        m = 13
    }
    else if (z > 24 && z <= 36) {
        m = 14
    }
    else if (z > 36 && z <= 48) {
        m = 15
    }
    
    deyerm.innerHTML = m + ' %'
    aznd.value = rng1.value + ' AZN'
    //aylarin faiz qiymeti
    m = parseInt(deyerm.innerHTML)
    e = parseInt(aznd.value)
     q = (e * m) / 100 
     j = q + e
     k = j / z
    qiymetm.innerHTML = k.toFixed(0)
    
}
yenile2()

function yenile1() {
    z = parseInt(ild.value)
    aznd.value = rng1.value + ' AZN'
    //aylarin faiz qiymeti
    m = parseInt(deyerm.innerHTML)
    e = parseInt(aznd.value)
     q = (e * m) / 100 
     j = q + e
     k = j / z
    qiymetm.innerHTML = k.toFixed(0)
}
yenile1()
let x = 5000
let d = 11
update()
let y = 12
let n = 462.50
cvb()

function plusazn() {
    x += 100
    if (x >= 40000) {
        x = 40000
    }
    update()
    cvb()
}
function minusazn() {
    x -= 100
    if (x <= 0) {
        x = 0
    }
    update()
    cvb()
}
function update() {
    azn.value = x + ' AZN'
}
function mebleg() {
    x = parseInt(azn.value)
    plusazn()
    minusazn()
}
// AYLARIN ARTMASI
updateil()
function plusil() {
    y++
    if (y >= 48) {
        y = 48
    }
    if (y > 12 && y <= 24) {
        d = 13
    }
    else if (y > 24 && y <= 36) {
        d = 14
    }
    else if (y > 36 && y <= 48) {
        d = 15
    }
    updateil()
    cvb()
}
function minusil() {
    y -= 1
    if (y <= 0) {
        y = 0
    }
    if (y < 12) {
        d = 11
    }
    else if (y > 12 && y <= 24) {
        d = 13
    }
    else if (y > 24 && y <= 36) {
        d = 14
    }
    else if (y > 36 && y <= 48) {
        d = 15
    }
    updateil()
    cvb()
}
function updateil() {
    il.value = y + ' ay'
    deyer.innerHTML = d + '%'
}
function vaxt() {
    y = parseInt(il.value)
    plusil()
    minusil()
}
function cvb() {
    let p = (x * d) / 100
    let f = p + x
    let n = f / y
    qiymet.innerHTML = n.toFixed(2) + " ₼"
}
const valinc = document.getElementById("valinc")
const valexc = document.getElementById("valexc")
const exc = document.getElementById("valyutaexc")
const inc = document.getElementById("valyutainc")
exc.onchange = exchange
inc.onchange = exchange
valinc.oninput = exchange
valexc.innerHTML = 100
function exchange() {
    valexc.innerHTML = ((valinc.value * inc.value) / exc.value).toFixed(2)
}
const date = document.getElementById("date")
const val = document.getElementById("val")
const ode = document.getElementById("odenilme")
const val1 = document.getElementById("val1")
const val2 = document.getElementById("val2")
const mds = document.getElementById("mds")
const adn = document.getElementById("adn")
const muddet = document.getElementById("ayliq")
const faiz = document.getElementById("fayiz")
const pul = document.getElementById("pul")
const vlp = document.getElementById("valyutapul")
const dxlet = document.getElementById("daxilet")
const date1 = document.getElementById("date1")
const date2 = document.getElementById("date2")
const date3 = document.getElementById("date3")
const deyis1 = document.getElementById("deyis1")
const deyis2 = document.getElementById("deyis2")
const deyis3 = document.getElementById("deyis3")

function deyisfirst() {
    kod = ''
    if (val.value === val1.value) { vlp.innerHTML = 'AZN' } else if (val.value === val2.value) { vlp.innerHTML = 'USD' } else { vlp.innerHTML = ' ' }
    kod += (val.value === val1.value) ? faiz.innerHTML = date.value :
        (val.value === val2.value) ? faiz.innerHTML = '0.1' : ''
}
function deyisthird() {
    if (ode.value === mds.value) { muddet.innerHTML = 'müddətin sonunda' } else { muddet.innerHTML = 'aylıq' }
}
let r = 0

function pulyaz() {
    let w = date1
    let ws = date2
    let we = date3
    w = 12
    ws = 24
    we = 36
    if (date.value === deyis1.value) { r += (((dxlet.value / w) * deyis1.value) / 100) * 0.9 }
    else if (date.value === deyis2.value) { r += (((dxlet.value / ws) * deyis2.value) / 100) * 1.8 }
    else if (date.value === deyis3.value) { r += (((dxlet.value / we) * deyis3.value) / 100) * 2.7 }
    else { r = 0 }

    pul.innerHTML = r.toFixed(2)
}
pulyaz()
