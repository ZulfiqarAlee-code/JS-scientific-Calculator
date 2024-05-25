

const screen = document.getElementById('screen');
let expression = '';
const scientificButtons = document.querySelectorAll('.scientific');

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;

        if (value === 'C') {
            expression = '';
            screen.textContent = '0';
        } else if (value === '=') {
            try {
                const result = eval(expression
                    .replace(/sin\(/g, 'Math.sin(')
                    .replace(/cos\(/g, 'Math.cos(')
                    .replace(/tan\(/g, 'Math.tan(')
                    .replace(/sqrt\(/g, 'Math.sqrt(')
                    .replace(/log10\(/g, 'Math.log10(')
                    .replace(/log\(/g, 'Math.log(')
                    .replace(/PI/g, 'Math.PI')
                    .replace(/([0-9]+)%/g, '($1/100)')
                    .replace(/(\d+\.?\d*)%/g, '($1/100)'));
                screen.textContent = result;
                expression = result.toString();
            } catch (e) {
                screen.textContent = 'Error';
                expression = '';
            }
        } else if (button.id === 'toggle-scientific') {
            scientificButtons.forEach(btn => {
                btn.style.display = btn.style.display === 'flex' ? 'none' : 'flex';
            });
        } else {
            if (expression === '0' && value !== '.') {
                expression = value;
            } else {
                expression += value;
            }
            screen.textContent = expression;
        }
    });
});
