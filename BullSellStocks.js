var maxProfit = function(prices) {
     
   let minprice = Number.MAX_SAFE_INTEGER;
    let maxprofit = 0;
    for (let i = 0; i < prices.length ; i++) {
      if(prices[i]<minprice)
        minprice = prices[i]
      else if( (prices[i]-minprice)>maxprofit)
        maxprofit =  prices[i]-minprice
    }
    return maxprofit;
};



function maxProfit (prices) {
    if(prices.length == 0 || prices.length ==1)
      return 0;
     let maxprofit =0;
    for(let i=0;i<prices.length;i++){
      for(let j=i+1;j<prices.length;j++)
      {
        let profit = prices[j]-prices[i];
        if(profit > maxprofit)
          maxprofit = profit;
      }
    }
    return maxprofit;
};

maxProfit([2,1,2,1,0,1,2])