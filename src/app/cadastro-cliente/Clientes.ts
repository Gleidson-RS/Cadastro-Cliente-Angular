export class Cliente{

    nome? : string
    email? : string
    cpf? : number
    data?: Date | null = null
    uf?: string = ''
    municipio?: string = ''

    statusSelecionado : boolean = false

}