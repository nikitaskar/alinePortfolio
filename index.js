let url = ['sand.jpg', 'road.jpg']
class Preloader {
    constructor(url) {
        this.count = 0
       return new Promise(function(resolve, reject) {
            let count = 0;
           url.forEach(u => {
                let image = document.createElement("img")
                image.src = u
                image.onload = function() {
                 
                   count ++
                   if(count == url.length) {
                        console.log(count)
                        resolve(url)
                    }
                }
                
           })
           
        })
    }
}

new Preloader(url).then(_=>{
    console.log('ok')
    let images = document.querySelectorAll('img')
    images.forEach(image => {
        image.classList.remove('notvisible')
        image.classList.add('visible')
        
    });
    
})