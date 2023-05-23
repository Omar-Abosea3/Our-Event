let x =$('#sideBar').outerWidth();
console.log(x);
$('.closeIcon').click(function(){
    $('#sideBar').animate({left:-x},1000);
    $('.homeContent').animate({left:"0"},1000);
})

$('.mytoggeler').click(function(){
    let r = $('.homeContent').css('left');
    console.log(r);
    if(r=="0px"){
        $('.homeContent').animate({left:x},1000)
        $('#sideBar').animate({left:0},1000);
    }else if(r==x+'px'){
        $('#sideBar').animate({left:-x},1000);
        $('.homeContent').animate({left:'0'},1000)
    }
})

let titles = $('.title');
let pargraphs =$('.parag');
console.log(pargraphs.length);
$('.parag').eq(0).slideDown(0);
for (let i = 0; i < titles.length; i++) {
    titles[i].addEventListener('click',function(){
        $('.parag').eq(i).slideToggle(500);
        $('.parag').not(pargraphs[i]).slideUp(500)
    })
    
}

function countDown(){
    let now = new Date();
    let myEvent = new Date('22-june-2023');
    let counter=myEvent.getTime()-now.getTime();
    let s = Math.floor(counter/1000);
    let m = Math.floor(s/60);
    let h = Math.floor(m/60);
    let d = Math.floor(h/24);
    // console.log( s );
    // console.log( m );
    // console.log( h );
    // console.log( d );
    s%=60;
    m%=60;
    h%=24;
    $('#date').html(`<div class="col-12 col-sm-12 col-md-6 col-lg-3 mb-2 px-3">
    <div class="dates d-flex justify-content-center align-items-center">
        <h2 class="text-white">${d} D</h2>
    </div>
    </div>
    <div class="col-12 col-sm-12 col-md-6 col-lg-3 mb-2 px-3">
        <div class="dates d-flex justify-content-center align-items-center">
            <h2 class="text-white">${h} h</h2>
        </div>
    </div>
    <div class="col-12 col-sm-12 col-md-6 col-lg-3 mb-2 px-3">
        <div class="dates d-flex justify-content-center align-items-center">
            <h2 class="text-white">${m} m</h2>
        </div>
    </div>
    <div class="col-12 col-sm-12 col-md-6 col-lg-3 mb-2 px-3">
        <div class="dates d-flex justify-content-center align-items-center">
            <h2 class="text-white">${s} s</h2>
        </div>
    </div>`)
    if(d<=0&&h<=0&&m<=0&&s<=0){
        $('#date').html(`<div class="col-12 col-sm-12 col-md-6 col-lg-3 mb-2 px-3">
        <div class="dates d-flex justify-content-center align-items-center">
            <h2 class="text-white">0 D</h2>
        </div>
        </div>
        <div class="col-12 col-sm-12 col-md-6 col-lg-3 mb-2 px-3">
            <div class="dates d-flex justify-content-center align-items-center">
                <h2 class="text-white">0 h</h2>
            </div>
        </div>
        <div class="col-12 col-sm-12 col-md-6 col-lg-3 mb-2 px-3">
            <div class="dates d-flex justify-content-center align-items-center">
                <h2 class="text-white">0 m</h2>
            </div>
        </div>
        <div class="col-12 col-sm-12 col-md-6 col-lg-3 mb-2 px-3">
            <div class="dates d-flex justify-content-center align-items-center">
                <h2 class="text-white">0 s</h2>
            </div>
        </div>`)
    }else{
        setTimeout(countDown,1000);
    }
}

countDown();


(function(){
    let limit = 100;
    // $('#text').html(limit);
    $('textarea').keyup(function(){
        let length = $(this).val().length;
        let text = limit - length;
        if(text<=0){
            $('#text').html('your available character finished');
        }else{
            $('#text').html(text);
        }
    })
})();


$('aside ul li a').click(function(){
    let id = $(this).attr('href')
    let sectionOffset= $(id).offset().top;
    $('html,body').animate({scrollTop:sectionOffset},1500);
})
