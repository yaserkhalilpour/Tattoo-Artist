
const quoation1 = document.querySelector('.quoation-1')
const quoation2 = document.querySelector('.quoation-2')
const quoation3 = document.querySelector('.quoation-3')
const quoation4 = document.querySelector('.quoation-4')

const anser1 = document.querySelector('.anser-1')
const anser2 = document.querySelector('.anser-2')
const anser3 = document.querySelector('.anser-3')
const anser4 = document.querySelector('.anser-4')

const show1 = document.querySelector('.show-1')
const show2 = document.querySelector('.show-2')
const show3 = document.querySelector('.show-3')
const show4 = document.querySelector('.show-4')

const hr1 = document.querySelector('.hr-1')
const hr2 = document.querySelector('.hr-2')
const hr3 = document.querySelector('.hr-3')
const hr4 = document.querySelector('.hr-4')



show1.addEventListener('click', () => {


    anser1.classList.toggle('hiden')
    anser2.classList.remove('hiden')
    anser3.classList.remove('hiden')
    anser4.classList.remove('hiden')

    show2.innerHTML = '+'
    show3.innerHTML = '+'
    show4.innerHTML = '+'



    quoation2.classList.toggle('change-qu-2-anser-1')
    quoation3.classList.toggle('change-qu-3-anser-1')
    quoation4.classList.toggle('change-qu-4-anser-1')

    hr1.classList.toggle('change-hr-1-anser-1')
    hr2.classList.toggle('change-hr-2-anser-1')
    hr3.classList.toggle('change-hr-3-anser-1')
    hr4.classList.toggle('change-hr-4-anser-1')

    show2.classList.toggle('change-qu-2-anser-1')
    show3.classList.toggle('change-qu-3-anser-1')
    show4.classList.toggle('change-qu-4-anser-1')


    removeClass4()
    removeClass2()
    removeClass3()

    if (show1.innerHTML === '+') {
        show1.innerHTML = '-'
    } else {
        show1.innerHTML = '+'
    }
})


show2.addEventListener('click', () => {

    anser2.classList.toggle('hiden')
    anser1.classList.remove('hiden')
    anser3.classList.remove('hiden')
    anser4.classList.remove('hiden')

    show1.innerHTML = '+'
    show3.innerHTML = '+'
    show4.innerHTML = '+'


    quoation2.classList.toggle('change-qu-2-anser-2')
    quoation3.classList.toggle('change-qu-3-anser-2')
    quoation4.classList.toggle('change-qu-4-anser-2')

    show2.classList.toggle('change-qu-2-anser-2')
    show3.classList.toggle('change-qu-3-anser-2')
    show4.classList.toggle('change-qu-4-anser-2')

    hr2.classList.toggle('change-hr-2-anser-2')
    hr3.classList.toggle('change-hr-3-anser-2')
    hr4.classList.toggle('change-hr-4-anser-2')

    removeClass1()
    removeClass4()
    removeClass3()

    if (show2.innerHTML === '+') {
        show2.innerHTML = '-'
    } else {
        show2.innerHTML = '+'
    }
})


show3.addEventListener('click', () => {

    anser3.classList.toggle('hiden')
    anser1.classList.remove('hiden')
    anser2.classList.remove('hiden')
    anser4.classList.remove('hiden')

    show1.innerHTML = '+'
    show2.innerHTML = '+'
    show4.innerHTML = '+'


    quoation3.classList.toggle('change-qu-3-anser-3')
    quoation4.classList.toggle('change-qu-4-anser-3')

    show3.classList.toggle('change-qu-3-anser-3')
    show4.classList.toggle('change-qu-4-anser-3')

    hr3.classList.toggle('change-hr-3-anser-3')
    hr4.classList.toggle('change-hr-4-anser-3')

    removeClass1()
    removeClass2()
    removeClass4()


    if (show3.innerHTML === '+') {
        show3.innerHTML = '-'
    } else {
        show3.innerHTML = '+'
    }

})


show4.addEventListener('click', () => {

    anser4.classList.toggle('hiden')
    anser1.classList.remove('hiden')
    anser2.classList.remove('hiden')
    anser3.classList.remove('hiden')

    show1.innerHTML = '+'
    show2.innerHTML = '+'
    show3.innerHTML = '+'

    hr4.classList.toggle('change-hr-4-anser-4')

    removeClass1()
    removeClass2()
    removeClass3()

    if (show4.innerHTML === '+') {
        show4.innerHTML = '-'
    } else {
        show4.innerHTML = '+'
    }

})



function removeClass1(){

    quoation2.classList.remove('change-qu-2-anser-1')
    quoation3.classList.remove('change-qu-3-anser-1')
    quoation4.classList.remove('change-qu-4-anser-1')

    hr1.classList.remove('change-hr-1-anser-1')
    hr2.classList.remove('change-hr-2-anser-1')
    hr3.classList.remove('change-hr-3-anser-1')
    hr4.classList.remove('change-hr-4-anser-1')

    show2.classList.remove('change-qu-2-anser-1')
    show3.classList.remove('change-qu-3-anser-1')
    show4.classList.remove('change-qu-4-anser-1')

   

}

function removeClass2 (){

    quoation2.classList.remove('change-qu-2-anser-2')
    quoation3.classList.remove('change-qu-3-anser-2')
    quoation4.classList.remove('change-qu-4-anser-2')

    show2.classList.remove('change-qu-2-anser-2')
    show3.classList.remove('change-qu-3-anser-2')
    show4.classList.remove('change-qu-4-anser-2')

    hr2.classList.remove('change-hr-2-anser-2')
    hr3.classList.remove('change-hr-3-anser-2')
    hr4.classList.remove('change-hr-4-anser-2')

}

function removeClass3 (){

    quoation3.classList.remove('change-qu-3-anser-3')
    quoation4.classList.remove('change-qu-4-anser-3')

    show3.classList.remove('change-qu-3-anser-3')
    show4.classList.remove('change-qu-4-anser-3')

    hr3.classList.remove('change-hr-3-anser-3')
    hr4.classList.remove('change-hr-4-anser-3')

}

function removeClass4 () {
    hr4.classList.remove('change-hr-4-anser-4')
}