str1="rishi";
revstr1=str1.split('').reverse().join('');
console.log(revstr1);

str2="NamaN";
revstr2=str2.split('').reverse().join('');
if(revstr2==str2)
{
    console.log("palindrome");
}
else
{
    console.log("not palindrome");
}

str3="Djs arya rishi bhanushali software";//11
vc1=0;
vow="aeiouAEIOU";
for(i=0;i<str3.length;i++)
{
    if(vow.includes(str3[i]))
    {
        vc1++;
    }
}
console.log(vc1);

str4="Djs arya rishi bhanushali software department";//14
vc2=0;
for(i=0;i<str4.length;i++)
{
    if(str4[i]=='a'||str4[i]=='e'||str4[i]=='i'||str4[i]=='o'||str4[i]=='u'||str4[i]=='A'||str4[i]=='E'||str4[i]=='I'||str4[i]=='O'||str4[i]=='U')
    {
        vc2++;
    }
}
console.log(vc2);