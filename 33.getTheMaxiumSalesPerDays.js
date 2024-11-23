/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Example 1:
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying o
Example 1:
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.

Constraints:
1 <= prices.length <= 105
0 <= prices[i] <= 104
*/


class Solution {

    static getTheMaxiumOutput(prices) {
        var reversedPrices = prices.reverse();
        var profit = 0;
        var a;
        var b;

        for (var i = 0; i < prices.length; i++) {
            for (var z = 0; z < reversedPrices.length; z++) {
                if (reversedPrices[z] > prices[i]) {
                    if (profit < (reversedPrices[z] - prices[i])) {
                        var index2 = prices.indexOf(reversedPrices[z]);
                        if (index2 < i) {
                            profit = reversedPrices[z] - prices[i];
                            a = prices[i];
                            b = reversedPrices[z];
                        }

                    }
                }
            }

        }

        if (a != undefined && b != undefined) {
            console.log('Day1 :', a);
            console.log('Day2: ', b);
            console.log('Profit: ', profit);
        } else {
            console.log("Impossible Situation !!!!!!!!! ");
        }


    }


}

var prices1 = [7, 1, 5, 9, 6, 4];
var prices2 = [7, 6, 4, 3, 1];
Solution.getTheMaxiumOutput(prices1);

