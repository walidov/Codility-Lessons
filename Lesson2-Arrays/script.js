function solution(A, K) {
    if(K == 0) return A;
    if(A.length > 0) {
        for(var i = 0; i < K; i++) {
            var last = A.pop();
            A.unshift(last);
        }
        return A;
    }
    return A;
}
console.log(solution([3, 8, 9, 7, 6], 3));