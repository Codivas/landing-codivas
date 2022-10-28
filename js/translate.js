// function em jquery pra fazer as alteração de linguagem: 

//br
$(function() {
    $(".br").click(function() {
    
        $(".nav-1").text("Sobre");
        $(".nav-2").text("Serviços");
        $(".nav-3").text("Porfólio");
        $(".nav-4").text("Parceiros");
        $(".nav-5").text("Contato");
        $(".nav-6").text("Cadastre-se");
        $(".nav-7").text("desenvolvimento feito por mulheres da tecnologia");
        $(".nav-8").text("desenvolvimento, SEO, IoT e web design");
    
 

       
        $(".language").removeClass("change-en");
        $(".language").removeClass("change-es");
        $(".language").addClass("change-br");
   
   
    });
});

//English
$(function() {
    $(".en").click(function() {
   
        $(".nav-1").text("About");
        $(".nav-2").text("Services");
        $(".nav-3").text("Portfolio");
        $(".nav-4").text("Partner");
        $(".nav-5").text("Contact");
        $(".nav-6").text("Register");
        $(".nav-7").text("development made by women of technology");
        $(".nav-8").text("development, SEO, IoT and web design");



        // $(".language").text("en-US");
        $(".language").removeClass("change-es");
        $(".language").removeClass("change-br");
        $(".language").addClass("change-en");
     
  
    
    });
});
