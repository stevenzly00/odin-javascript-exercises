const removeFromArray = function(arr,...fuckoffs) {
    
    let keep1=[],keep2=arr;
    for(let fuckoff of fuckoffs){
        [keep1,keep2]=[keep2,keep1];
        keep2=[];
        for(let i=0;i<keep1.length;i++)
            if(keep1[i]!==fuckoff){
                keep2.push(keep1[i]);
            }
    }
    return keep2;
};

// Do not edit below this line
module.exports = removeFromArray;