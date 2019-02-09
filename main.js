$(document).ready(function(){
    addColumn();
    masonry();
    $(window).resize(function(){
        addColumn();
        masonry();
    });

    function addColumn(){
        $(".gallary").html("");
        var widthWin = $(window).width();
        var column = $('<div class="column"></div>');
        if (widthWin<800) {
            $(".gallary").append(column.clone());
            $(".gallary").append(column.clone());
        }
        else if(widthWin<1050){
            $(".gallary").append(column.clone());
            $(".gallary").append(column.clone());
            $(".gallary").append(column.clone());
        }
        else {
            $(".gallary").append(column.clone());
            $(".gallary").append(column.clone());
            $(".gallary").append(column.clone());
            $(".gallary").append(column.clone());
        }
    }

    function masonry() {
        var columns = $(".column");
        // var maxh = 500;
        // var minh = 100;
        var imgPath = "images/sissi/"
        
        for (let pic = 1; pic < 27; pic++) {
            var current = 0;
            var min_height =  columns.eq(0).height();
            for (let i = 0; i < columns.length; i++) { 
                if (min_height > columns.eq(i).height()) {
                    min_height = columns.eq(i).height();
                    current = i;
                }
            }
            newPin = $('<div class="pinWrapper">\
                            <div class = "image">\
                                <div class="save-btn">Save</div>\
                                <img src="'+imgPath+"sissi-"+pic+'.jpg">\
                            </div>\
                            <div class="bottom">\
                                <div class="illustration">illustration illustration illustration illustration</div>\
                                <div class="info-btn">...</div>\
                            </div>\
                        </div>')
            newPin.attr("id",pic);
            columns.eq(current).append(newPin);
    }

    
    }
});
    