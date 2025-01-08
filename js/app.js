const $ = document
const btnNextcomment = $.querySelector('.comment-next')
const btnBackcomment = $.querySelector('.comment-back')
const userNameComment = $.querySelector('.name-comment-masage')
const userNameMassage = $.querySelector('.masage')
const userNameImage = $.querySelector('.comment-img-1 img')
const userIcon = $.querySelector('.comment-img-1 i')
const userInfoComment = [
    { id: 1, name: 'Yaser khalilpour', massage: 'I love gym becuse make a body and my mine...I love jobe becuse give me reclx' , srcImage : './image/image-comment/602018c71a018d78702cd0b61812ace1.jpg' },
    { id: 2, name: 'Yasin khalilpour', massage: 'I love gym and football' , srcImage : './image/image-comment/855db461f8da6bf007ab7b0059e51d84.jpg' },
    { id: 3, name: 'Ali norri', massage: 'I love jobe becuse give me reclx' , srcImage : './image/image-comment/c8052940bb7983e7caefb57013f80477.jpg' },
    { id: 4, name: 'Sohil khalilpour', massage: 'I love gym becuse make a body and my mine' , srcImage : './image/image-comment/74c48bfaa26c8fdcddda56148e92d5d8.jpg' },
    { id: 5, name: 'Hossian khalilpour', massage: 'I want this tato...'  , srcImage : './image/image-comment/5701db8d4318f0d93edd1f4b64493b37.png'},
]

btnNextcomment.addEventListener('click', nextComment)
btnBackcomment.addEventListener('click', backComment)

function nextComment() {

    let user = userInfoComment.findIndex(function (params) {
        return params.name === userNameComment.innerHTML
    })

    if (user === -1) {

        user = 0

        userNameComment.innerHTML = userInfoComment[user].name
        userNameMassage.innerHTML = userInfoComment[user].massage
        userNameImage.setAttribute('src' , userInfoComment[user].srcImage)
        userIcon.style.display = 'none' 

    } else {

        let countUser = user + 1
        if (countUser === 5) {
            countUser = 0
        }

        userNameComment.innerHTML = userInfoComment[countUser].name
        userNameMassage.innerHTML = userInfoComment[countUser].massage
        userNameImage.setAttribute('src' , userInfoComment[countUser].srcImage)
        userIcon.style.display = 'none'  

    }
}

function backComment() {

    let user = userInfoComment.findIndex(function (params) {
        return params.name === userNameComment.innerHTML
    })

    if (user === -1) {

        user = userInfoComment.length - 1

        userNameComment.innerHTML = userInfoComment[user].name
        userNameMassage.innerHTML = userInfoComment[user].massage
        userNameImage.setAttribute('src' , userInfoComment[user].srcImage)
        userIcon.style.display = 'none'  


    } else {

        countUser = user - 1

        if (countUser === -1) {
            countUser = userInfoComment.length - 1
        }

        userNameComment.innerHTML = userInfoComment[countUser].name
        userNameMassage.innerHTML = userInfoComment[countUser].massage
        userNameImage.setAttribute('src' , userInfoComment[countUser].srcImage)
        userIcon.style.display = 'none'  
    }
}