function solve(worker) {
    if (worker.dizziness) {
        worker.levelOfHydrated += worker.weight * worker.experience / 10;
        worker.dizziness = false;
    }
    return worker;
};

solve({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
});