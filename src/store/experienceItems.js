class ExperienceItem {
  constructor(name, position, bullets, timeline) {
    this.name = name
    this.position = position
    this.bullets = bullets
    this.timeline = timeline
  }
}

export default [
  new ExperienceItem(
    'Apple',
    'Software Engineer - Backend',
    [
      'Worked cross functionally with client, business and content teams to develop features for the Apple Store App',
      'Developed Apple’s automated retail and customer service platform for messaging apps like iMessage and WeChat',
      'Gained enterprise experience in microservice architectures, software development cycles, effective logging techniques etc',
      'Worked with technologies such as Spring.io, Kafka, Kubernetes, Docker, CassandraSQL and many more'
    ],
    '10/2018 - 02/2020'
  ),
  new ExperienceItem(
    'MIT Sustainable Design Lab',
    'Undergraduate Research',
    [
      'Automated workflows aggregating campus weather and energy data for use in downstream building models',
      'Created workflow for simulating energy use of all MIT buildings with continuously calibrated building models',
      'Created interactive dashboard of MIT campus charting simulated vs. measured energy usage per building',
      'Presented work and research paper at the 2018 Symposium on Simulation for Architecture and Urban Design (SimAUD) in Delft, Netherlands'
    ],
    '08/2017-06/2018'
  ),
  new ExperienceItem(
    'Apple',
    'Software Engineer - Intern',
    [
      'Worked in IS&T’s Mobile Apps Team developing features for the Apple Store App backend environment',
      'Created a conversational chat-bot that takes users step by step through configuring and purchasing a product',
      'Project built using Java with Spring.io MVC framework, CassandraSQL database, and served with Apache Tomcat'
    ],
    '05/2017-08/2017'
  ),
  new ExperienceItem(
    'Adobe',
    'Linux Sytem Engineer - Intern',
    [
      'Contributed 20,000+ lines of code to the open-sourced project HubbleStack Nova',
      "Wrote Hubble's CVE scan module that reports packages on a local machine that are vulnerable to known CVE's",
      'Assisted in integration testing prior to deployment of HubbleStack Nova across 43K Adobe internal servers',
      'Developed a web app that creates interactive timelines of unresolved alerts within TechOps services'
    ],
    '05/2016 - 08/2016'
  ),
  new ExperienceItem(
    'Leerink LLC',
    'Converitble Securities - Intern',
    [
      'Made excel model analyzing the life cycle (i.e. converted to stock, paid at maturity, etc.) of convertible bonds',
      'Made excel model showing change of company’s stock price after issuing convertible bonds vs. follow on stock',
      'Used both Bloomberg and python data mining scripts to compile the data needed for these excel models'
    ],
    '06/2015 - 08/2015'
  ),
  new ExperienceItem(
    'Flatiron Construction',
    'Summer Intern',
    [
      'Competed for internship and $5,000 scholarship with three top high school seniors',
      'Awarded internship and scholarship after eight week course on drafting and scheduling, followed by final project',
      'At internship, compiled field data and created excel models that tracked fuel consumption of company equipment'
    ],
    '06/2014 - 08/2014'
  )
]
