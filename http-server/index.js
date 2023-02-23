
  
  const http = require("http");
  const fs = require("fs");
  
  let homeContent = "";
  let projectContent = "";
  let registrationContent="";
  
  fs.readFile("home.html", (err, home) => {
    if (err) {
      throw err;
    }
    homeContent = home;
  });
  
  fs.readFile("project.html", (err, project) => {
    if (err) {
      throw err;
    }
    projectContent = project;
  });

  fs.readFile("registration.html",(err,registration) => {
    if (err) {
      throw err;
    }
    registrationContent = registration;
  });

  http
  .createServer((request, response) => {
    let url = request.url;
    response.writeHeader(200, { "Content-Type": "text/html" });
    switch (url) {
      case "/project":
        response.write(projectContent);
        response.end();
        break;
      case "/registration":
        response.write(registrationContent);
        response.end();
      default:
        response.write(homeContent);
        response.end();
        break;
    }
  })
  .listen(5000);
  const getPort = () => {
    const index = process.argv.indexOf('--port');
    return index > -1 ? parseInt(process.argv[index + 1]) : 3000;
}

console.log("correct port: ", getPort());
console.log("wrong port: ", process.argv[3]); 


  
