let mes = Number(prompt('Digite 1 - Janeiro, 2 - Fevereiro, 3 - Março ....'))
switch (mes) {
    case 1:
        document.write("Janeiro")
        break;
    case 2:
        document.write("Fevereiro")
        break;
    case 3:
        document.write("Março")
        break;
        case 4:
        document.write("Abril")
        case 5:
        document.write("Maio")
        case 6:
        document.write("Junho")
        case 7:
        document.write("Julho")
        case 8:
        document.write("Agosto")
        case 9:
        document.write("Setembro")
        case 10:
        document.write("Outubro")
        case 11:
        document.write("Novembro")
        case 12:
        document.write("Dezembro")
    // Adicione os demais casos até Dezembro
    default:
       document.write("Número fora do intervalo para meses do ano")
}
