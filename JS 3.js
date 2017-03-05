function download(num) 
{ 			  
	  if (/msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent))
	  {
			 if (num == "" || num == null)
			 {
			    mywindow = window.open('http://www.etoro.com/setup.aspx','downWindow','left=0,top=0,width=100,height=100,z-lock=yes,dependent=yes');	
			    num=0;
			 }
			 else
			 {
			    mywindow = window.open('http://www.etoro.com/setup.aspx?dl=' + num + '','downWindow','left=0,top=0,width=100,height=100,z-lock=yes,dependent=yes');
			 }
		}

		location.href = "/download.aspx?dl=" + num;		
}
