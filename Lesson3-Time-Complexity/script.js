// FrogJmp
function solution(X, Y, D) {
	var distance = Y - X;
	var jumps = distance / D;
	return Math.ceil(jumps);
}
console.log(solution(10, 85, 30));

// PermMisssingElem
function solution(A) {
	if(A.length == 0) return 1;
	if(A.length == 1) {
		return (A[0] == 1) ? 2 : 1;
	}
	A.sort(function(a,b){return a - b});
	if(A.length == 2) {
		if (A[0] == 2) return 1;
		if (A[1] == 3) return 2;
		return 3;
	}
	for(var n = 0; n < A.length; n++) {
		if(A[n + 1] - A[n] > 1) {
			return(A[n] + 1);
		}
	}
	return (A[0] == 1) ? (A[A.length - 1] + 1) : 1;
}
console.log(solution([1,2,3,4,5]));