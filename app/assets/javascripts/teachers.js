$(() => {
  $(".teacher-li").on("click", function(e) {
    const id = $(this).data("id");

    fetch(`/teachers/${id}`)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        $("#teacher-info").html(` 
            <h1>Name: ${data.name} - ${data.students.length} 
            students</h1>
            <h1>School: ${data.school.name}</h1>
            <h2>Subject: ${data.subject}</h2>
            <h4>Student Roster:</h4>
            ${data.students
              .map(function(student) {
                return `<p>Name: ${student.name}</p>`;
              })
              .join("")}
        `);
      });
  });
});
