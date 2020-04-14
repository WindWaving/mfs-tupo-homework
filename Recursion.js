function fib(n){
    if(n==1||n==2){
        return 1;
    }
    while(n>2){
        return fib(n-1)+fib(n-2);
    }
}
var cnt=0;
function permutation(arr,l,r){
    if(l==r){
        var str="";
        for(let i in arr){
            str+=arr[i]+""+" ";
        }
        console.log(str,++cnt);
        return;
    }
    for(let i=l;i<r;++i){
        let tmp=arr[l];
        arr[l]=arr[i];
        arr[i]=tmp;
        permutation(arr,l+1,r);
        tmp=arr[l];
        arr[l]=arr[i];
        arr[i]=tmp;
    }
}

function midSearch(arr,l,r,target){
    var len=arr.length;
    var mid=parseInt((r+l)/2);
    if(l==r&&arr[mid]!=target){
        console.log("no target");
        return null;
    }
    if(arr[mid]==target){
        console.log("that's it",mid,arr[mid])
        return arr[parseInt(len/2)];
    }else if(arr[mid]>target){
        midSearch(arr,l,mid-1,target);
    }else{
        midSearch(arr,mid+1,r,target);
    }
}

//移动一个盘子
function move(one,another){
    console.log(one," -> ",another);
}
function hanoi(diskcnt,from,mid,to){
    if(diskcnt==1){
        move(from,to);
    }else{
        // hanoi(diskcnt-1,a,b,c);
        hanoi(diskcnt-1,from,to,mid);
        move(from,to);
        hanoi(diskcnt-1,mid,from,to);
    }
}
function main(){
    hanoi(3,'a','b','c');
    // var arr=[1,3,12,23,43,50,64,65,67,81,98,100];
    // midSearch(arr,0,arr.length-1,10);
    // var arr=[1,2,3,4,5];
    // permutation(arr,0,5);
    // for(let i=0;i<10;++i){
    //     console.log(fib(i));
    // }
}