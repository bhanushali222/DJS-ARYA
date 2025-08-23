nums=[1,2,3,4,5];
sum=0;
for(i=0;i<nums.length;i++)
{
    sum+=nums[i];
}
avg=sum/nums.length;
console.log(`Sum:${sum}\nAvg:${avg}`);