class Tennis
{
    score(j1,j2)
    {
        if(j1 == 0 && j2 == 0)
        {
            j1 = "Love"
            j2 = "Love"
        }
        else if(j1 == 15 && j2 == 0)
        {
            j1 = 15
            j2 = "Love"
        }
        else if(j1 == 30 && j2 == 0)
        {
            j1 = 30
            j2 = "Love"
        }
        
        return j1 + "-" + j2
    }
}

export {Tennis};
