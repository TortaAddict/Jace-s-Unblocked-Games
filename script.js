function toggleStealthMode() {  
    stealthMode = !stealthMode;  
    document.body.classList.toggle("stealth-mode", stealthMode);  
      
    // Change Title and Browser Tab  
    const newTitle = stealthMode ? "Google Docs - Untitled Document" : "Jace's Unblocked Games";  
    document.getElementById("site-title").innerText = stealthMode ? "Untitled Document" : "Jace's Unblocked Games";  
    document.title = newTitle;   
      
    // Change Icon to a doc icon  
    const link = document.querySelector("link[rel~='icon']");  
    link.href = stealthMode ? "https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico" : "assets/icons/controller.ico";  
}  
