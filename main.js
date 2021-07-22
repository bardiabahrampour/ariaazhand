function ChangeTheme(){
    if(document.documentElement.className  == "themeBright"){
        document.documentElement.className  = "themeDark";
        console.log("light");
    }
    else{
        document.documentElement.className  = "themeBright";
        console.log("dark");
    }
}