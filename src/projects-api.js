const ProjectAPI = {
  projectItem: [
    {
      id: 1,
      img: '',
      name: 'BeanDust Espresso',
      website: 'WIP',
      github: 'https://github.com/JoshuaRudio/TeamLatte',
      description:
        'Create a fully functioning informational website for a local coffee shop on a short timeline of 3 days. Built using Node and Express. Responsible for back-end architecture and some front-end design.',
      technologies: 'JavaScript, Node, Express, CSS, Trello'
    },
    {
      id: 2,
      img: '',
      name: 'Bootcampr',
      website: 'https://www.bootcampr.herokuapp.com',
      github: 'https://github.com/JoshuaRudio/Bootcampr',
      description:
        'An online community of web development bootcamp graduates., Users can host events, post projects to find collaborators, and display their profile. Created in a timeline of 10 days and deployed to Heroku. Full stack developer, working primarily on front-end design as well as back-end architecture.',
      technologies:
        'Ruby on Rails, PostgreSQL, ActiveRecord, AWS S3, TwitterAPI, Devise, TravisCI'
    }
  ],
  all: function() {
    return this.projectItem;
  },
  get: function(id) {
    const isProject = project => project.id === id;
    return this.projectItem.find(isProject);
  }
};

export default ProjectAPI;
