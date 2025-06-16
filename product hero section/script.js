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

setInterval(()=>{
    handleChangeSlide();
},2000)
