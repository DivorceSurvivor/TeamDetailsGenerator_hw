function generateHTML(data) {
  let cards = "";
  data.forEach((emp) => {
    cards += generateCard(emp);
  });
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
        rel="stylesheet"
      />
      <title>Team details</title>
    </head>
  
    <body>
      <header class="jumbotron title_container">
        <h1 class="display-5">Team Details</h1>
      </header>
      <div style="max-width: 60%; margin: 0 auto">
        <div class="row">
        ${cards}
        </div>
      </div>
      <style>
        .title_container {
          text-align: center;
          color: white;
          background-color: #f5425d;
          border-radius: 0;
        }
        .container {
          justify-content: center;
          align-items: center;
        }
        .card_outer_container {
          margin: 20px auto;
        }
        .row {
          margin: 0px;
        }
        .card_container {
          background-color: #ededed;
          min-width: 350px;
          box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
          margin: 0px 10px;
          border-radius: 5px;
        }
        .card_header {
          color: white;
          background-color: #1f6cbf;
          padding: 20px;
          border-top-right-radius: 5px;
        }
        .card_body {
          padding: 30px;
        }
        .card_item {
          background-color: white;
          padding: 10px 10px 4px 10px;
          margin-bottom: 2px;
        }
      </style>
    </body>
  </html>  
    `;
}

function generateCard(employee) {
  let bhtml = `<div class="card_outer_container">
  <div class="card_container">
<div class="card_header">
    <h3>${employee.getName()}</h3>
    <h3>${employee.getRole()}</h3>
</div>
<div class="card_body">
        <div class="card_item">
        <p>ID: ${employee.getId()}</p>
        </div>
        <div class="card_item">
        <p>Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></p>
        </div>
        <div class="card_item">
        ${
          employee.getRole() === "Manager"
            ? "<p>Office Number: " + employee.getOfficeNumber() + "</p>"
            : employee.getRole() === "Engineer"
            ? "<p>Github: <a href='https://github.com/" +
              employee.getGithub() +
              "'>" +
              employee.getGithub() +
              "</a></p>"
            : "<p>School: " + employee.getSchool() + "</p>"
        }
        </div>
    </div>
</div>
</div>
`;
  return bhtml;
}

module.exports = generateHTML;
