function plot_send()
{
    var msg = document.getElementById("plot").children[0].src;
    if(msg)
    {
        document.getElementById("plot").style.display = "none";
        localStorage.setItem('plot_to_transfer', msg);
        localStorage.removeItem('plot_to_transfer');
    }
}

function plot_receive(ev)
{
    if (ev.key!='plot_to_transfer') return; // ignore other keys
    var msg_data = ev.oldValue;
    if(msg_data)
    {
        var cur_img = document.getElementById("transferred_plot");
        if(cur_img)
        {
            cur_img.parentNode.removeChild(cur_img);
        }
        var img = document.createElement('img');
        img.id = "transferred_plot";
        img.setAttribute("src", msg_data);
        
        document.getElementById("plotWindow").appendChild(img);
    }
}




window.addEventListener("storage", function(ev) {plot_receive(ev);}); 

document.addEventListener("DOMNodeInserted", function(e) {
    if(e.target && e.target.parentNode.id == "plot") {
        plot_send();
	}
});

