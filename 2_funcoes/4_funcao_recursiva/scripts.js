    function recursiva (max){
        if (max > 10) return;
            else {
             console.log(max)
             max++;
             recursiva(max)
        }
    }

    recursiva(0)