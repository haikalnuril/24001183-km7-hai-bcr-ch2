function sortCarByYearAscendingly(cars) {
    // Sangat dianjurkan untuk console.log semua hal hehe
    console.log(cars);

    // Clone array untuk menghindari side-effect
    // Apa itu side effect?
    const result = [...cars];

    // Tulis code-mu disini

    for (let i = 0; i < cars.length - 1; i++) {
        for (let j = 0; j < cars.length - i - 1; j++) {
            if (result[j].year > result[j + 1].year) {
                [result[j], result[j + 1]] = [result[j + 1], result[j]];
            }
        }
    }
    // Rubah code ini dengan array hasil sorting secara ascending
    return result;
}