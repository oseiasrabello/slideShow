

const slideShow = () => {
    let accountant = 1; 
    setInterval(function () {
        document.getElementById('slide' + accountant).checked = true; 
        accountant++;
        if (accountant > 5) {
            accountant = 1;
            
        }
    }, 3000);
    
};
slideShow();