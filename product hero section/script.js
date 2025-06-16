let listclass =  [
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

const handleChangeslide = ()=> {
    let images = document.querySelectorAll('img-slide')
    for(let img of images){
        for(let j in listclass){
            if(img.classList.contains(listclass[j])){
                img.classList.replace(listclass[j].current,listclass[j].next);
                document.getElementById('circle-bg').style.backgroundColor = listclass[j].bg;
                document.getElementById('circle-bg').style.transition = '1.5s';
            }
        }
    }
}