document.addEventListener("DOMContentLoaded", function() {
    var btn = document.getElementById("btn");

    btn.addEventListener("click", function(e){
        e.preventDefault();
        console.log("hi");
        var email = document.getElementById("nom").value;

        var subject = document.getElementById("sujet").value;
    
        var contenu = document.getElementById("contenu").value;
    
        var content = "Bonjour "+email+" \n "+contenu;

        alert("bonjour "+subject+" content "+content);

        window.open('mailto:carlosdjoyou@gmail.com?subject='+ subject+'&body='+content+' ;');

       

        // Email.send({
        //     SecureToken : "6dbc8b80-2256-476b-8409-7bf1faacfce6",
        //     To : 'leroyparistone@gmail.com',
        //     From : "carlosdjoyou@gmail.com",
        //     Subject : "This is the subject +++++",
        //     Body : "And this is the body +++++++"
        // }).then(
        //   message => alert(message)
        // );

    });
});



