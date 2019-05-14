class Game{
    constructor(){
        this.big=document.querySelector('.blocks')
        this.red=this.big.querySelector('.block--red')
        this.blue=this.big.querySelector('.block--blue')
        this.green=this.big.querySelector('.block--green')
        this.pink=this.big.querySelector('.block--pink')
        this.gray=this.big.querySelector('.block--gray')
        this.container=this.big.querySelectorAll('.block')
        this.moving=0
        this.interval=null
        this.mover=null

        this.big.addEventListener('click',(e)=>{
            let target=e.target
            if(target==this.big)
                this.big.prepend(this.mover)
            else
                this.big.prepend(target)
        })
        this.big.addEventListener('mousedown',e=>{
            let target=e.target
            this.interval=window.setInterval(this.move,this,100,target)
            this.mover=e.target
        })
        window.addEventListener('mouseup',e=>{
            clearInterval(this.interval)
            this.reset(this.mover)
        })
        this.container.forEach(ele=>{
            ele.style.display='relative'
            console.log(ele);
        })
    }
    log(){
        console.log(this)
    }
    move(target){
        if(target.style.left=='0rem;' || target.style.left==''){
            target.style.left='1rem'
            this.moving=1
            console.log(target.style.left);
        }else{
            this.moving++;
            target.style.left=`${this.moving}rem`
            console.log('moving');
        }
        
    }

    reset(target){
        console.log(target);
        target.style.left='0rem'
    }
}

const GD=new Game()


let __nativeSI__=window.setInterval

window.setInterval=function(cb, caller, timer){
    let intThis=caller,args=Array.prototype.slice.call(arguments,3)
    return __nativeSI__(cb instanceof Function ? function(){
        cb.apply(intThis,args)
    }:cb,timer)
}
