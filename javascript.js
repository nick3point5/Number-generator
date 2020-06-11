function gen_num() {
    var min = document.getElementById("mini").value
    var max = document.getElementById("maxi").value
    var sig = document.getElementById("sig").value
    var loops = document.getElementById("loops").value
    var columns = document.getElementById("columns").value
    var num
    var i = 1


    var tbl = document.getElementById("table");
    var tblBody = document.getElementById("tbody");

    min = parseFloat(min)-1
    max = parseFloat(max)
    loops = parseFloat(loops)
    loops=Math.round(loops)

    
    num_row=Math.floor(loops/columns)
    Rem=loops%columns


    if (num_row >= 1){


    




        for (j=1; j<= num_row; j++){

            var row = document.createElement("tr");


            for (i=1; i <= columns; i++) {

                num = Math.random()* (max - min) + min

                sig=Math.round(sig)

                num = num * (10 ** (sig))
                num = Math.ceil(num)
                num = num / (10 ** (sig))

                

                var cell = document.createElement("td");
                var cellText = document.createTextNode(num);
                cell.appendChild(cellText)
                row.appendChild(cell)
                tblBody.appendChild(row)

                    //outtxt = num.toString() + ", " + outtxt 


        
            }

        }

        var row = document.createElement("tr");

        for (i=1; i <= Rem; i++) {

            num = Math.random()* (max - min) + min

            sig=Math.round(sig)

            num = num * (10 ** (sig))
            num = Math.ceil(num)
            num = num / (10 ** (sig))

            

            var cell = document.createElement("td");
            var cellText = document.createTextNode(num);
            cell.appendChild(cellText)
            row.appendChild(cell)
            tblBody.appendChild(row)


    
        }

    }

    else{

        var row = document.createElement("tr");


        for (i=1; i <= Rem; i++) {

            num = Math.random()* (max - min) + min

            sig=Math.round(sig)

            num = num * (10 ** (sig))
            num = Math.ceil(num)
            num = num / (10 ** (sig))

            

            var cell = document.createElement("td");
            var cellText = document.createTextNode(num);
            cell.appendChild(cellText)
            row.appendChild(cell)
            tblBody.appendChild(row)

        }

    }





    tbl.appendChild(tblBody);

    tbl.setAttribute("border", "2");




}

function tableClear() {

    var otable=document.getElementById('tbody');
    while (otable.firstChild)
    {
    otable.removeChild(otable.firstChild);
    }

}


function DownloadNum() {
    var htmltable= document.getElementById('table');
    var html = htmltable.outerHTML;
    Uri=encodeURIComponent(html)
    window.open('data:application/vnd.ms-excel,' + Uri);

  }