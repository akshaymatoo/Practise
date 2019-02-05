var toLowerCase = function(str) {
    let finalStr = "";
    for(st of str){
     if(isUpperCase(st))
     {
       finalStr += String.fromCharCode(st.charCodeAt()+32)
     }
     else
      finalStr += st;
    }

    return finalStr;
};

function isUpperCase(chr){
    if(chr.charCodeAt()>=65 && chr.charCodeAt()<=90)
        return true;
    return false;
}