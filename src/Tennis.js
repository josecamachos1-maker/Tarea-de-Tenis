class Tennis
{
    score(j1,j2)
    {
        let Resultado

        if(j1 == 0 && j2 == 0)
        {
            Resultado = "Love-Love"
        }
        else if(j1 == 15 && j2 == 0)
        {
            Resultado = "15-Love"
        }
        else if(j1 == 30 && j2 == 0)
        {
            Resultado = "30-Love"
        }
        

        return Resultado
    }
}

export {Tennis};
