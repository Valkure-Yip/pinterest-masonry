$(document).ready(function(){
    var columns = $(".column");
    var maxh = 500;
    var minh = 100;
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
})
    