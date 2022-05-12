const nota = -1;
let result = "";
if (nota >= 80 && nota <= 100) {
    result = 'aprovada';
} else if (nota >= 60 && nota < 80) {
    result = 'lista';
}else if (nota >= 0 && nota < 60){
    result = 'reprovada';
} 
switch (result) {
    case 'aprovada':
        console.log('aprovada');
        break;
    case 'lista':
        console.log('lista');
        break;
    case 'reprovada':
        console.log('reprovada');
        break;
    default:
        console.log('Nota inválida / Corrigir')
}