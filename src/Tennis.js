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
        else if(j1 == 0 && j2 == 15)
        {
            Resultado = "Love-15"
        }
        else if(j1 == 0 && j2 == 30)
        {
            Resultado = "Love-30"
        }
        else if(j1 == 0 && j2 == 40)
        {
            Resultado = "Love-40"
        }
        else if(j1 == 15 && j2 == 30)
        {
            Resultado = "15-30"
        }
        else if(j1 == 15 && j2 == 40)
        {
            Resultado = "15-40"
        }
         else if(j1 == 30 && j2 == 40)
        {
            Resultado = "30-40"
        }
        else if(j1 == 40 && j2 == 0)
        {
            Resultado = "40-Love"
        }
        else if(j1 == 40 && j2 == 15)
        {
            Resultado = "40-15"
        }
        else if(j1 >= 50 && j2 < 40)
        {
            Resultado = "Game for Player 1"
        }
        else if(j2 >= 50 && j1 < 40)
        {
            Resultado = "Game for Player 2"
        
        }
        else if(j1 >= 40 && j2 >= 40)
        {
            if(j1 == j2)
            {
                Resultado = "Deuce"
            }
            else if(j1 == j2 + 10)
            {
                Resultado = "Advantage Player 1"
            }
            else if(j2 == j1 + 10)
            {
                Resultado = "Advantage Player 2"
            }
            else if(j1 >= j2 + 20)
            {
                Resultado = "Game for Player 1"
            }
            else if(j2 >= j1 + 20)
            {
                Resultado = "Game for Player 2"
            }
        }
        
                        
        
        
        return Resultado
    }
}

export {Tennis};
