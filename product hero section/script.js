// Define an array of objects representing the slide transitions
let listClass = [
    {
        current : 'img-1',
        next : 'img-3',
        bg : '#fbd2cd',
    }
    ,
    {
        current : 'img-2',
        next : 'img-1',
        bg : '#b5b4af',
    }
    , 
    {
        current : 'img-3',
        next : 'img-2',
        bg : '#36747a',
    }
]

// add my function then loop in selectorall img-slide and replace current style with next style class
const handleChangeSlide = ()=> {
    let images = document.querySelectorAll('.img-slide')
    for(let img of images){
        for(let j in listClass){
            if(img.classList.contains(listClass[j].current)){
                img.classList.replace(listClass[j].current,listClass[j].next);
                document.getElementById('circle-bg').style.backgroundColor = listClass[j].bg;
                document.getElementById('circle-bg').style.transition = '1.5s';
                break
            }
        }
    }
}

// Set an interval to automatically change slides every 2000 milliseconds (2 seconds)
setInterval(()=>{
    handleChangeSlide(); // call my function
},2000)
