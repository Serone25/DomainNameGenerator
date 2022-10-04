function creaDominios() {
    var pronoun = ["the", "our"];
    var adj = ["great", "big"];
    var noun = ["jogger", "racoon"];
    
    var prueba;
    var prueba2;
    var prueba3;
    for(let x = 0;x<= pronoun.length-1;x++){
        prueba = pronoun[x];
        for(let y = 0; y <= adj.length-1;y++){
            prueba2 = adj[y];
            for(let z = 0; z <= noun.length-1;z++){
                prueba3 = noun[z];
                document.write(prueba+prueba2+prueba3+".com");
                document.write('<br>');
                document.write(prueba+prueba2+prueba3+".es");
                document.write('<br>');
                document.write(prueba+prueba2+prueba3+".net");
                document.write('<br>');
            }
        }
    }
  }