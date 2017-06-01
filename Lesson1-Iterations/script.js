function solution(N) {
	var arr = N.toString(2).split("");
	var ones = [];
	for(var x = 0; x < arr.length; x++) {
		if (arr[x] == 1) {
			ones.push(x);
		}
	}
	var max = 0;
	for(var i = 0; i < ones.length; i++) {
		if(ones[i+1] - ones[i] > max && ones[i+1] - ones[i] > 1) {
			max = ones[i+1] - ones[i] - 1;
		}
	}
	return(max);
}
console.log(solution(1041));