function CookieStatus ()
    {
    var allcookies;
    allcookies = document.cookie;
    var OldCookieStatusValue = 0;
    if (allcookies == "")
	OldCookieStatusValue = 0;
    else
	{
	var prefix = "CookieStatus=";
	var start = allcookies.indexOf (prefix);
	if (start == -1)
	    OldCookieStatusValue = 0;
	else
	    {
	    start += prefix.length;
	    var just_past_end = allcookies.indexOf (';', start);
	    if (just_past_end == -1)
		just_past_end = allcookies.length;
	    OldCookieStatusValue = allcookies.substring (start, just_past_end) - 1 + 1;
	    }
	}
    return (OldCookieStatusValue);
    }

function cookiesAreEnabled()
    {
    var OldValue;
    var SetValue;
    var NewValue;

    OldValue = CookieStatus ();
    SetValue = OldValue + 1;
    document.cookie = "CookieStatus=" + SetValue;
    NewValue = CookieStatus ();

    return (NewValue != OldValue);
    }

	function tienejava()
  {
  var java='';
  if(navigator.javaEnabled()==true){
  java="Sí";
  }
else
  {
  java="No";
  }
  return java;
}
