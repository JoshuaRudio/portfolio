const ProjectAPI = {
  projectItem: [
    {
      id: 1,
      title: 'Bootcampr',
      description:
        'An online community of web development bootcamp graduates. Users can host events, post projects and look for collaborators, and display their profile. Created in a timeline of 10 days and deployed to Heroku.',
      website: 'https://bootcamper.herokuapp.com',
      github: 'https://github.com/Bootcampr/bootcampr',
      role:
        'I worked as a  Full stack developer, working primarily on front-end design as well as back-end architecture.',
      technology: 'Ruby on Rails, SASS, GitHub API, Twitter API, Devise Gem, PostgreSQL'
    },
    {
      id: 2,
      title: 'Beandust Esspresso',
      description: '',
      website: '',
      github: '',
      role: '',
      technology: ''
    },
    {
      id: 3,
      title: 'jamHub',
      description: '',
      website: '',
      github: '',
      role: '',
      technology: ''
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
