var scopackager = require('simple-scorm-packager');
var path = require('path');

const config = {
  version: '1.2',
  organization: 'My Amazing Company',
  title: 'Test Course',
  language: 'en-US',
  masteryScore: 80,
  startingPage: 'index.html',
  source: path.join(__dirname, 'build'),
  package: {
    version: process.env.npm_package_version,
    zip: true,
    author: 'Firstname Lastname',
    outputFolder: path.join(__dirname, 'scorm_packages'),
    description: 'A test of the course packaging module',
    keywords: ['scorm', 'test', 'course'],
    typicalDuration: 'PT0H5M0S',
    rights: `©${new Date().getFullYear()} My Amazing Company. All right reserved.`,
  }
};

scopackager(config, function(msg){
  console.log(msg);
  process.exit(0);
});