const scores: Record<string, number> = {
    Alice: 85,
    Bob : 92,
    Charlie : 78
}

function calculateAverageScore(scores :Record<string, number>):number {
    const total = Object.values(scores).reduce((sum,score) => sum +score, 0);
    return total/ Object.keys(scores).length;
}

console.log(calculateAverageScore(scores))