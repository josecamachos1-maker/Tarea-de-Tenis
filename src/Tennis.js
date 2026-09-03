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
        else if(j1 == 15 && j2 == 15)
        {
            Resultado = "15-15"
        }
        else if(j1 == 30 && j2 == 15)
        {
            Resultado = "30-15"
        }
        else if(j1 == 30 && j2 == 30)
        {
            Resultado = "30-30"
        }
        else if(j1 == 40 && j2 == 30)
        {
            Resultado = "40-30"
        }


        return Resultado
    }
}

export {Tennis};
