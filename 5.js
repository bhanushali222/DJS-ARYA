tdl=[];

function addele(ele)
{
    console.log(`Adding : ${ele}`)
    tdl.push(ele);
}

function delele(posn)
{
    if(posn>0&&posn<=tdl.length)
    {
        ind=posn-1;
        val=tdl[ind];
        console.log(`Deleting : ${val}`)
        for(i=ind;i<tdl.length-1;i++)
        {
            tdl[i]=tdl[i+1];
        }
        tdl.length=tdl.length-1;
    }
    else
    {
        console.log("Invlaid");
    }
}

function disp()
{
    console.log("TO DO LIST");
    if(tdl.length==0)
    {
        console.log("Empty list");
    }
    else
    {
        for(i=0;i<tdl.length;i++)
        {
            console.log(`${i+1} : ${tdl[i]}`);
        }
    }
}

prompt=require('prompt-sync')();//searched this part as did not know how to run without html when promprs are asked
on=true;
while(on)
{
    console.log("\n1.Add");
    console.log("2.Remove");
    console.log("3.Display");
    console.log("4.Quit");
    ch=prompt("Enter choice");
    if(ch=="1")
    {
        obj=prompt("Enter element to add");
        addele(obj);
    }
    else if(ch=="2")
    {
        obj=prompt("Enter position to delete");
        delele(parseInt(obj));
    }
    else if(ch=="3")
    {
        disp();
    }
    else if(ch=="4")
    {
        on=false;
    }
    else
    {
        console.log("Wrong choice");
    }
}
