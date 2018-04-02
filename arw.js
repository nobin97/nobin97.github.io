function check()
{
  var x = document.getElementById("uname");
  var y = document.getElementById("pwd");
  if(x.value == "" && y.value == "")
  {
    alert("Please enter Username and Password... !!");
    x.focus();
    return false;
  }
   else if (x.value == "")
  {
    alert("Please enter a Username... !!");
    x.focus();
    return false;

  }
  else if (y.value== "")
  {
    alert("Oops... You Forgot to enter Password !!");
    y.focus();
    return false;
  }
  else if (y.value.length < 5) {
    alert("Please enter a password of atleast 5 characters...");
    y.focus();
    return false;
  }
  else {
    return true;
  }
}

function checkcmnt()
{
  var c = document.getElementById("cmnt");
    if(c.value == "")
      {
        alert("Please Enter a Comment before Posting!!");
        c.focus();
        return false;
      }
    else
      {
        document.getElementById("comm").innerHTML = "🤵 You : "+ c.value + '      <button type ="submit" onclick="return cmntdel()"> ✂  </button>';
        return true;
      }
}

function cmntdel()
{
  var cnf= confirm("Do you really wanna delete your comment?");
  if (cnf==true)
  {
    document.getElementById("comm").innerHTML = "";
  }
}

function cmntclr()
{
  document.getElementById("cmnt").value="";
}

function foc()
{
  document.getElementById("uname").focus();
}
