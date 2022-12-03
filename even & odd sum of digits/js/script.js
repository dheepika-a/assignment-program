a=1234;
s=0
s1=0
while (a>0)
{
	var rem=a%10;
	if(rem%2==0)
	{
	sum=rem+sum;
	
	}
	else
	{
	s1=s1+rem
	}
	a=(a-rem)/10;
}
console.log(s,s1)