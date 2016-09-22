Framework7.prototype.plugins.math = function (app, params) {
    if (!params) return;
    var $$ = Dom7;

    var stat = function(){
        'use strict';
        return {
            mean:function(nums){
                var y = 0;
                $.each(nums,function(a,b){
                    y = y + b;
                });
                return y/nums.length;
            },
            median: function(nums) {
                var median = 0,
                numsLen = nums.length;
                if (numsLen % 2 ===0) {
                    median = (nums[numsLen / 2 - 1] + nums[numsLen / 2]) / 2;
                }
                else {
                    median = nums[(numsLen - 1) / 2];
                }
                return median;
            },
            mode: function(nums) {
                var modes = [],
                count = [],
                i,
                number,
                maxLength = 0;
                for (i = 0; i < nums.length; i += 1) {
                    number = nums[i];
                    count[number] = (count[number] || 0) + 1;
                    if (count[number] > maxLength) {
                        maxLength = count[number];
                    }
                }
                for (i in count) if (count.hasOwnProperty(i)) {
                    if (count[i] === maxLength) {
                    modes.push(Number(i));
                    }
                }
                return modes;
                }
            }
    }();           
    return {
        hooks: {
            appInit: function () {
                $$("#btnClick").on('click', function(){
                    var input = $$("#inputHere").val().split(',');
                    $.each(input, function(a,b){
                        input[a] = parseInt(input[a]);
                    });
                    input.sort(function(a,b){return a-b});

                    console.log("Sorting: "+ input);
                    console.log("Mean: "+ stat.mean(input));
                    console.log("Median: "+ stat.median(input));
                    console.log("Mode: "+ stat.mode(input));
                });
            },
        }
    };
};

var app = new Framework7({
    material:true,
    math:true
});

var $$ = Dom7;