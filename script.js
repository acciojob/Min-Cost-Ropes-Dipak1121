function mincost(arr)
{ 
//write your code here
// return the min cost
  let cost = 0;
	while(arr.length > 1){
		arr.sort((a,b)=>{
			return a - b;
		});
		let a = arr.shift();
		let b = arr.shift();
		cost = cost + a + b;
		arr.push(a+b);
	}
	return cost;
}

module.exports=mincost;
