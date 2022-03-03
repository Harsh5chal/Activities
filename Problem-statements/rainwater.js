let height = [0,1,0,2,1,0,1,3,2,1,2,1];
let height2 = [4,2,0,3,2,5]

function waterTrap(height) {
    let result = 0;
    let length = height.length;
    let i = 0;
    let j = length - 1;
    let leftMax = 0;
    let rightMax = 0;
    
    while(i<j){
        if(height[i] < height[j]){
            if(height[i] > leftMax){
                leftMax = height[i];
            }
            else{
                result += leftMax - height[i];
            }
            i++;
        }
        else{
            if(height[j] > rightMax){
                rightMax = height[j];
            }
            else{
                result += rightMax - height[j];
            }
            j--;
        }
    }
    return result;
};

console.log(waterTrap(height));
console.log(waterTrap(height2));