const buyBtns=document.querySelectorAll('.js-buy-ticket')
const modal=document.querySelector('.modal')
const modalClose=document.querySelector('.js-modal-close')
const modalContainer=document.querySelector('.modal-container')
function showBuyTicket() {
    modal.classList.add('open')
}
function hidderBuyTicket(){
    modal.classList.remove('open')
}
for(const buyBtn of buyBtns) {
    buyBtn.addEventListener('click',showBuyTicket)
}
modalClose.addEventListener('click',hidderBuyTicket)
modal.addEventListener('click',hidderBuyTicket)
modalContainer.addEventListener('click',function(event){
    event.stopPropagation()
})
/******/

var header = document.getElementById('header')
var mobileMenu = document.getElementById('mobile-menu')
var autoHight = header.clientHeight
mobileMenu.onclick=function() {
    var isClose = header.clientHeight === autoHight
    if(isClose) {
        header.style.height = 'auto'
    }
    else {
        header.style.height = null
    }
}

var menuItems = document.querySelectorAll('#nav li a[href*="#"]')
for (var i=0;i <menuItems.length; i++) {
    var menuItem =menuItems[i]
    menuItem.onclick = function(event) {
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav')
        if(!isParentMenu)
        {
            header.style.height = null
        } else {
            // sử lý sự kiện bỏ qua preventDefault
            event.preventDefault()
        }     
    }
}