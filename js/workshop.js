// Hyphens need to be replaced with &#45;
// apostrophe needs to be replaced with &#39;

let beginners = ['Beginner&#39;s Camp Offerings','(one week in length)','June 10th &#45; June 14th','and','June 24th &#45; June 28th'];
let advanced = ['Advanced Camp Offering','(two weeks in length)','July 15th &#45; July 26th'];

for (let a = 0; a<= advanced.length - 1;a++){
    $('#advGrp').append("<li><p>"+advanced[a]+"</p></li>")
};

for (let b = 0; b<= beginners.length - 1;b++){
    $('#begGrp').append("<li><p>"+beginners[b]+"</p></li>")
};