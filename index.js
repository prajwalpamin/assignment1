$(document).ready(function(){

    var url ='http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D'


    
    function infoContent(value){
        
        var infocont=$("#info-content");
        infocont.html(value.firstName+" "+value.lastName);
        var user=$("<b>").html("User selected: ")
        var secDiv=$("<div>")
        secDiv.append($("<b>").html("Description: "));
        secDiv.append($("<textarea>").html(value.description).prop("cols","50").prop("rows","5").prop("readOnly","true")); 
        var thrdDiv=$("<div>").html(value.address.streetAddress);
        thrdDiv.prepend($("<b>").html("Address: "));
        var forthDiv=$("<div>").html(value.address.city);
        forthDiv.prepend($("<b>").html("City: "));
        var fifthDiv=$("<div>").html(value.address.state);
        fifthDiv.prepend($("<b>").html("State: "));
        var sixthDiv=$("<div>").html(value.address.zip);
        sixthDiv.prepend($("<b>").html("Zip: "));
        infocont.prepend(user);
        infocont.append(secDiv);
        infocont.append(thrdDiv);
        infocont.append(forthDiv);
        infocont.append(fifthDiv);
        infocont.append(sixthDiv);
        infocont.css("display","block")
      
    
    }

    function renderCard(data){
        
        var col1=$("<td>").addClass("column1").html(data.id);
        var col2=$("<td>").addClass("column2").html(data.firstName);
        var col3=$("<td>").addClass("column3").html(data.lastName);
        var col4=$("<td>").addClass("column4").html(data.email);
        var col5=$("<td>").addClass("column5").html(data.phone);
        var wrap=$("<tr>").addClass("data-row").append(col1,col2,col3,col4,col5);
        $(wrap).click(function(){
            $(".data-row").removeClass("active");
            console.log("card clicked",data.id);
            wrap.addClass("active");
            infoContent(data);
       })
     
    //    search(data);
        return wrap;
       
       

    }



      

      $.get("https://60f7fd6f9cdca00017455142.mockapi.io/searchapp/blogs" ,function(response){
     
       var base=$("tbody");
     for(var i=0;i<response.length;i++){ 
        if(response[i].id==575||response[i].id==74||response[i].id==174||response[i].id==988||response[i].id==395){  
          var card=renderCard(response[i]);     
          
          base.append(card) 
        }
     
       }
       var input=$("#search-box");
       input.keyup(function(e){
           e.preventDefault();
           var filter=$(this).val().toUpperCase();
           console.log($(this).val());
           var dataSearch=$("#wrap tr");
           console.log(dataSearch.length);
           
             for (i = 0; i <dataSearch.length; i++) {
               a = dataSearch[i].getElementsByTagName("td")[1];
                 txtValue =  a.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    dataSearch[i].style.display = "";
                } else {
                    dataSearch[i].style.display = "none";
                }
                
             }
          
       })
      })
})



