function flw(sent)
{
    w=sent.split(" ");
    lw="";
    for(i=0;i<w.length;i++)
    {
        if(lw.length<w[i].length)
        {
        lw=w[i];
        }
    }
    return lw;
}
egsent="My name is rishi bhanushali i am a 19yearoldboy";
final=flw(egsent)
console.log(final)