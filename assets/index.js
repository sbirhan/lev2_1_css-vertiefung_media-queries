
var device_width = 0;
var device_height = 0;
var device_name = "Personal Computers and Laptops (1440 x 900)";


function resize_viewport(evt, device) {
    if (window.name==="myWindow") {
        window.close();
        alert("Please use main window to select a new device!");
    }
    else
    {
        if (device==="pc") {
            device_width=1440
            device_height=900
            device_name="Personal Computers and Laptops (1440 x 900)"
        };
        if (device==="tablet-potrait") {
            device_width=800
            device_height=1280
            device_name="Samsung Galaxy Tab 10 - Potrait - (800x1280)"
        };
        if (device==="tablet-landscape") {
            device_width=1280
            device_height=800
            device_name="Samsung Galaxy Tab 10 - Landscape - (1280x800)"
        };
        if (device==="iphone6-potrait") {
            device_width=375
            device_height=667
            device_name="iPhone 6/6S - Potrait - (375x667)"
        };
        if (device==="iphone6-landscape") {
            device_width=667
            device_height=375
            device_name="iPhone 6/6S - Landscape - (667x375)"
        };
        
        var myWindow = window.open("index.html", "myWindow", "width= "+device_width+" , "+"height= "+device_height);
        myWindow.document.title=device_name;

        myWindow.onload=function(){this.document.title = device_name;};
    }
};


