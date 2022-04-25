$(function(){
    setTimeout(function(){

        let GalleryWidth; 
        $('.Main__Slider').width($('.Main__CarouselBox')[0].clientWidth);
        $('.Main__Slider').height($('.Main__CarouselBox')[0].clientWidth);
        $('.GalleryPic').width($('.Main__CarouselBox')[0].clientWidth);

        // 2/2 Sync: if margin changed, modifify PicMarginRight below    
        let PicMarginRight = 10;
        $('.GalleryPic').css('margin-right',PicMarginRight);


        GalleryWidth = ($('.Main__CarouselBox')[0].clientWidth + PicMarginRight )* $('.Main__Gallery li').length;
        $('.Main__Gallery').width(GalleryWidth);

        let GalleryClone = $('.Main__Gallery').clone().appendTo('.Main__Slider');
        GalleryClone.addClass('GalleryClone');
        $('.Main__Gallery:first-child').addClass('GalleryOrigin');
        $(GalleryClone).css("left", GalleryWidth);

    }, 1500);
    // 1000ms is enough, but set higher to make sure 
    // !If width changes
    var OriginWindowWidth = window.innerWidth;

    $(window).resize(function(){
        let newWidth = window.innerWidth;
       if ( newWidth != OriginWindowWidth){
            $('.Main__Slider').width($('.Main__CarouselBox')[0].clientWidth);
            $('.Main__Slider').height($('.Main__CarouselBox')[0].clientWidth);
            $('.GalleryPic').width($('.Main__CarouselBox')[0].clientWidth);

            // GalleryWidth = CarouselBox * No. of Pics * GalleryPicSpace
            let GalleryWidth = ($('.Main__CarouselBox')[0].clientWidth + PicMarginRight )* $('.Main__Gallery li').length;

            $('.Main__Gallery').width(GalleryWidth/2);
            $('.GalleryClone').css("left", GalleryWidth/2);
       }
       
    });

    // 2/2 Sync: if margin changed, modifify PicMarginRight below
    let PicMarginRight = 10;
    let GalleryWidth = ($('.Main__CarouselBox')[0].clientWidth + PicMarginRight )* $('.Main__Gallery li').length;
    let Speed = 1;
    let GalleryFirst = 0;
    let GalleryClone = GalleryWidth;

    // Re-calculate animation parameter after resize 
    // !If width changes
    addEventListener('resize', function(){
        let newWidth = window.innerWidth;
       if ( newWidth != OriginWindowWidth){
           GalleryWidth = ($('.Main__CarouselBox')[0].clientWidth + PicMarginRight )* $('.GalleryOrigin li').length;
           GalleryFirst = 0;
           GalleryClone = GalleryWidth;
           $('.GalleryOrigin').css("left", GalleryFirst);
           $('.GalleryClone').css("left", GalleryClone);
       }
    });

    function Carousel(){
        $('.GalleryOrigin').css("left", GalleryFirst);
        $('.GalleryClone').css("left", GalleryClone);


        GalleryFirst -= Speed;
        GalleryClone -= Speed;

        if (GalleryFirst <= GalleryWidth*-1){
                GalleryFirst = 0;
                GalleryClone = GalleryWidth;
                $('.GalleryOrigin').css("left", GalleryFirst);
                $('.GalleryClone').css("left", GalleryClone);
            }
    }

    let InfiniteCarousel;
    // RWD speed control
    let CarouselFreq = 15;
    if (OriginWindowWidth>1200){
        CarouselFreq = 10;
    }else if(OriginWindowWidth>996 && OriginWindowWidth<1200){
        CarouselFreq = 20;
    }else{
        CarouselFreq = 30;
    }
    setTimeout(function(){  //clear previous timer 
        InfiniteCarousel = setInterval(Carousel, CarouselFreq);
        }, 2000);

});