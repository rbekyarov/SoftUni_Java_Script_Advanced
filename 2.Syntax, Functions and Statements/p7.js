function solve(num, command1, command2, command3, command4, command5) {

    let number = Number(num);
    let commands = [command1, command2, command3, command4, command5];

    for (command of commands) {
        switch (command) {
            case 'chop':
                number /= 2;
                break;

            case 'dice':
                number = Math.sqrt(number);
                break;


            case 'spice':
                number++;
                break;

            case 'bake':
                number *= 3;
                break;

            case 'fillet':
                number *= 0.8;
                number = number.toFixed(2);
                break;

        }
        console.log(number);
    }

}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');