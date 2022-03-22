let x = maxIndex(3,3)

function maxIndex(stepMax, badElement){
    var i = 0, j = 1, max = 0, index = 0
    var end = true

    while(end) {
        if ( i + j == badElement){ 
            i++
            j++ 
            index++
            max = i
            continue
        }

        i += j
        j++
        index++
        max = i
        if (index >= stepMax){
            end = false
            break;
        }
    }

    console.log(max)
}