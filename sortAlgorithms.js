//冒泡排序
function bubbleSort(arr){
    for(let i=0;i<arr.length;++i){
        for(let j=0;j<arr.length-1-i;++j){
            if(arr[j]>arr[j+1]){
                let tmp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=tmp;
            }
        }
    }
    return arr;
}
//插入排序
function insertSort(arr){
    for(let i=1;i<arr.length;++i){
        for(let j=i;j>=0;--j){
            if(arr[j]<arr[j-1]){
                let tmp=arr[j];
                arr[j]=arr[j-1];
                arr[j-1]=tmp;
            }
        }

    }
    return arr;
}
//选择排序
function selectSort(arr){
    for(let i=0;i<arr.length;++i){
        for(let j=i;j<arr.length;++j){
            if(arr[j]<arr[i]){
                let tmp=arr[j];
                arr[j]=arr[i];
                arr[i]=tmp;
            }
        }
    }
    return arr;
}
//希尔排序
function shellSort(step,arr){
    while(step>1){
        for(let i=0;i<=arr.length/step;++i){
            for(let j=i;j<arr.length-step;j+=step){
                if(arr[j+step]<arr[j]){
                    let tmp=arr[j];
                    arr[j]=arr[j+step];
                    arr[j+step]=tmp;
                }
            }
        }
        step=step/2;
    }
    insertSort(arr);
    return arr;
}

//快速排序
function partition(arr,l,r){
    var pivot=arr[l];
    while(l<r){
        while(arr[r]>pivot&&l<r){r--};
        if(l<r){
            arr[l]=arr[r];
        }
        while(arr[l]<pivot&&l<r){l++};
        if(l<r){
            arr[r]=arr[l];
        }
    }
    if(l==r){
        arr[l]=pivot;
    }
    return l;
}
function quickSort(arr,l,r){
    if(l<r){
        let mid=partition(arr,l,r);
        quickSort(arr,l,mid-1);
        quickSort(arr,mid+1,r);
    }
}
//堆排序
function maxHeap(arr,start,end){//设置end保证不会在循环中再次把已经下沉的最大值参与建堆
    var father=start;
    var son=father*2+1;
    while(son<=end){
        if(son+1<=end&&arr[son]<arr[son+1]){
            son=son+1;
        }
        if(arr[father]<arr[son]){//父节点小，交换并比较子节点和孙子节点
            [arr[father],arr[son]]=[arr[son],arr[father]];
            father=son;
            son=father*2+1;
        }else{
            return;
        }
    }
}
function heapSort(arr){
    for(let i=parseInt(arr.length/2)-1;i>=0;--i){//最后一个父节点
        maxHeap(arr,i,arr.length-1);
    }
    for(let i=0;i<arr.length;++i){
        console.log(arr[0]);//按照从大到小的顺序输出
        [arr[0],arr[arr.length-1-i]]=[arr[arr.length-1-i],arr[0]];
        maxHeap(arr,0,arr.length-2-i);
    }
}
function main(){
    // var arr=[34,21,95,10];
    var arr=[34,21,95,10,342,52,3524,42,1,54,33];
    // var res=bubbleSort(arr);
    // var res=insertSort(arr);
    // var res=selectSort(arr);
    // var res=shellSort(5,arr);
    // var res=quickSort(arr,0,arr.length-1);
    heapSort(arr);
    // for(let i in arr){
    //     console.log(arr[i]);
    // }
    // console.log(res);
}
main();