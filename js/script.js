let navs = [
  { name: 'facebook', link: 'https://www.facebook.com/people/Stage-West-Playhouse-Spring-Hill-FL/61556241225832' },
  { name: 'Home', link: 'https://stagewestplayhouse.org' },
  { name: "Specials", link: "/Specials.html" },
  { name: "Concert Series", link: "/concertSeries.html" },
  { name: "Auditions", link: "/auditions.html" },
  { name: "About", link: "/AboutUs.html" },
  { name: "Gallery", link: "/gallery.html" },
  { name: "Support Us", link: "/SupportUs.html" },
  { name: "Workshops", link: "/Workshops.html" },
  { name: "Scholarships", link: "/Scholarships.html" },
  { name: "Buy Tickets", link: "https://stagewest.ticketleap.com" }
];

let foot = [
  { header: "Box Office Hours:", lines: ['Tuesday: 10:00 AM - 2:00 PM', 'Wednesday: 10:00 AM - 2:00 PM', 'Thursday: 10:00 AM - 2:00 PM', 'Friday: 10:00 AM - 2:00 PM', 'Saturday: 10:00 AM - 2:00 PM', 'Sunday & Monday: Closed'] },
  { header: "Ticket Prices:", lines: ["Main Stage: $28", "Forum Stage: $22", "Prices may vary by performance:", "Student, Group, and other discounts available"] },
  { header: "Season Tickets:", lines: ["All 6 Shows: $116", "Main Stage Only (3 shows): $78", "Forum Stage Only: $60", "Contact the box office for details."] },
  { header: "Stage West Address", lines: ["8390 Forest Oaks Blvd", "Spring Hill, FL 34606"] },
  { header: "About Stage West", lines: ["Stage West is a registered 501(c)", "(3) nonprofit community", "organization dedicated to", "promoting the theater arts."] },
  { header: "Meetings", lines: ["General Meetings are held at 7:30 p.m. on the 2nd Wednesday of June, Aug., Oct., Dec., Feb., and Apr.", "Board of Directors meet the last Wednesday of each month at 7:00 p.m.", "Meetings are open to the public and offer an opportunity for public comment."] },
]
//console.log(foot[0].header)
let footTemp = `<div class="container">
<div class="row">
  <div class="col l3 s12">
      <h5 class="black-text">${foot[0].header}</h5>
      <UL>
          <li>${foot[0].lines[0]}</li>
          <li>${foot[0].lines[1]}</li>
          <li>${foot[0].lines[2]}</li>
          <li>${foot[0].lines[3]}</li>
          <li>${foot[0].lines[4]}</li>
          <li>${foot[0].lines[5]}</li>
      </UL>
  </div>
  <div class="col l3 s12">
      <h5 class="black-text">${foot[1].header}</h5>
      <UL>
        <li>${foot[1].lines[0]}</li>
        <li>${foot[1].lines[1]}</li>
        <li>${foot[1].lines[2]}</li>
        <li>${foot[1].lines[3]}</li>
      </UL>
      <h5 class="black-text">${foot[2].header}</h5>
      <UL>
        <li>${foot[2].lines[0]}</li>
        <li>${foot[2].lines[1]}</li>
        <li>${foot[2].lines[2]}</li>
        <li>${foot[2].lines[3]}</li>
      </UL>
  </div>
  <div class="col l3 s12">
      <h5 class="black-text">${foot[3].header}</h5>
      <UL>
        <li>${foot[3].lines[0]}</li>
        <li>${foot[3].lines[1]}</li>
      </UL>

  </div>
  <div class="col l3 s12">
      <h5 class="black-text">${foot[4].header}</h5>
      <UL>
        <li>${foot[4].lines[0]}</li>
        <li>${foot[4].lines[1]}</li>
        <li>${foot[4].lines[2]}</li>
        <li>${foot[4].lines[3]}</li>
      </UL>
      <h5 class="black-text">${foot[5].header}</h5>
      <UL>
        <li>${foot[5].lines[0]}</li>
        <li>${foot[5].lines[1]}</li>
        <li>${foot[5].lines[2]}</li>
      </UL>
  </div>
</div>
</div>
<div class="footer-copyright">
<div class="container">
Copyright © 2024
</div>
</div>`;

// console.log(navs.length)
for (let i = 0; i <= navs.length - 1; i++) {
  // console.log(navs[i].link)
  if (i === 0) {
    $('#nav-mobile').append("<li><a href='" + navs[i].link + "' target='_blank'><i class='material-icons'>" + navs[i].name + "</i></a></li>")
    $('#mobile-demo').append("<li><a href='" + navs[i].link + "' target='_blank'><i class='material-icons'>" + navs[i].name + "</i></a></li>")
  } else {
    $('#nav-mobile').append("<li><a href='" + navs[i].link + "'>" + navs[i].name + "</a></li>")
    $('#mobile-demo').append("<li><a href='" + navs[i].link + "'>" + navs[i].name + "</a></li>")
  }
}
$('#footArea').append(footTemp);

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  let options = '';
  var instances = M.Sidenav.init(elems, options);
});