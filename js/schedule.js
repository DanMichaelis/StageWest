// the schedule uses a format of title, imgPath,credit,sizzle
// {
//     title: ["","",""],
//     imgPath: "",
//     credit: ["","","",""],
//     sizzle: ["","","",""]
// },
// it will count the number of comma seperated items and display those as individual lines in the title, credit and sizzle lines. The image path should be where the image is at

let schedule = [
    {
        title: ["MAIN STAGE", "OCTOBER 2024", "4, 5, 6    11, 12, 13"],
        imgPath: "Beautiful_Horizontal_4C.jpg",
        credit: ["Book by DOUGLAS MC GRATH", "Words and Music by", "GERRY GOFFIN & CAROLE KING ", "BARRY MANN & CYNTHIA WEIL"],
        sizzle: ["Before she was hit-maker Carole King — she was Carole Klein, a spunky, young songwriter from Brooklyn with a unique voice. From the chart-topping hits she wrote for the biggest acts in music to her own life changing, trailblazing success with Tapestry, Beautiful: The Carole King Musical takes you back to where it all began — and takes you on the ride of a lifetime."]
    },
    {
        title: ["FORUM STAGE", "NOVEMBER 2024", "1, 2, 3  8, 9, 10"],
        imgPath: "odd_couple.png",
        credit: ["by NEIL SIMON"],
        sizzle: ["This classic comedy opens as a group of the guys assemble for cards in the apartment of divorced Oscar Madison. And if the mess is any indication, it's no wonder that his wife left him. Late to arrive is Felix Unger, who has just been separated from his wife. Fastidious, depressed, and none too tense, Felix seems suicidal, but as the action unfolds, Oscar becomes the one with murder on his mind when the clean freak and the slob ultimately decide to room together with hilarious results as The Odd Couple is born."]
    },
    {
        title: ["MAIN STAGE", "JANUARY 2025", "17, 18, 19   24, 25, 26"],
        imgPath: "",
        credit: ["Book by JOE MASTEROFF", "Based on the play by JOHN VAN DRUTEN and", "Stories by CHRISTOPHER ISHERWOOD", "Music by JOHN KANDER", "Lyrics by FRED EBB"],
        sizzle: ["In a Berlin nightclub, as the 1920's draw to a close, a garish Emcee welcomes the audience and assures them they will forget all their troubles at the Cabaret.  With his bawdy songs as wry commentary, Cabaret explores the dark, heady, and tumultuous life of Berlin's natives and expatriates as Germany slowly yields to the emerging Third Reich."]
    },
    {
        title: ["FORUM STAGE", "FEBRUARY 2025", "14, 15, 16   21, 22, 23"],
        imgPath: "almostmainkeyart.png",
        credit: [""],
        sizzle: ["Welcome to Almost, Maine, a town that’s so far north, it’s almost not in the United States—it’s almost in Canada. And it almost doesn’t exist. Because its residents never got around to getting organized. So it’s just…Almost.", "One cold, clear Friday night in the middle of winter, while the northern lights hover in the sky above, Almost’s residents find themselves falling in and out of love in the strangest ways. Knees are bruised. Hearts are broken. Love is lost, found, and confounded. And life for the people of Almost, Maine will never be the same. ", "ALMOST, MAINE: It’s love. But not quite."]
    },
    {
        title: ["MAIN STAGE", "MARCH 2025", "14, 15, 16    21, 22, 23"],
        imgPath: "images.png",
        credit: ["Based on the Paramount movie by MIKE WHITE", "Book by JULIAN FELLOWES", "Lyrics by GLENN SLATER", "New Music by ANDREW LLOYD WEBBER"],
        sizzle: ["Rock got no reason, rock got no rhyme… You better get me to school on time! Based on the hit movie, The show follows Dewey Finn, a failed, wannabe rock star who decides to earn an extra bit of cash by posing as a substitute teacher at a prestigious prep school. There he turns a class of straight–A pupils into a guitar-shredding, bass slapping, mind-blowing rock band. But can he get them to the Battle of the Bands without their parents and the school’s headmistress finding out? "]
    },
    {
        title: ["FORUM STAGE", "APRIL 2025", "4, 5, 6    11, 12, 13"],
        imgPath: "drinkinghabits2-lg.jpg",
        credit: [""],
        sizzle: ["The Sisters of Perpetual Sewing miss the excitement of the old days when they were saving convents and reuniting long-lost families. So when they learn that the orphanage where Paul and Kate grew up is in peril, they can't wait to come to the rescue. Everyone pitches in to mount a play to raise money, but it's no easy feat  when Kate's expecting any day, Sally's hiding from stage-fright-stricken Paul after another flight from the altar, Mother Superior's acting is unexpectedly narcoleptic, and the sisters' award-winning wine keeps getting switched with the grape juice. The merry mix-ups multiply in this warm and winsome sequel to Drinking Habits"]
    },
];

for (let u = 0; u <= schedule.length - 1; u++) {
    let newShow = schedule[u];
    for (let t = 0; t <= newShow.title.length - 1; t++) {
        let titleLine = newShow.title[t];
        $('#upcoming').append("<h6 class='center-align'><strong>" + titleLine + "</strong></h6>")
        // console.log(newShow.title[t] + ' ' + t)
    }
    let imgP = newShow.imgPath;
    if (imgP !== '') {

        $('#upcoming').append("<img style=\"width: 100%\" class=' responsive-img' src='img/soon/" + imgP + "'>")
    }
    for (let c = 0; c <= newShow.credit.length - 1; c++) {
        let creditLine = newShow.credit[c];
        $('#upcoming').append("<p class='center-align'>" + creditLine + "</p>")
    }
    for (let s = 0; s <= newShow.sizzle.length - 1; s++) {
        let sizzleLine = newShow.sizzle[s];
        $('#upcoming').append("<p class='center-align'>" + sizzleLine + "</p>")
    }

    if (u !== schedule.length - 1) {
        $('#upcoming').append("<hr>")
    }
    // <img class=" responsive-img" src="img/needs-you.png" alt="sw needs you">
    // console.log(newShow);
    // $('#upcoming').append("<p>"+schedule[u].title[1]+"</p>")
};

