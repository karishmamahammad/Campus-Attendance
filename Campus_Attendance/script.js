let subjects = JSON.parse(localStorage.getItem('attendance')) || [];

function addSubject() {
  const subject = document.getElementById('subject').value;
  const total = parseInt(document.getElementById('total').value);
  const attended = parseInt(document.getElementById('attended').value);

  if (!subject || isNaN(total) || isNaN(attended)) {
    alert('Please fill all fields');
    return;
  }

  const percentage = ((attended / total) * 100).toFixed(2);
  const status = percentage >= 75 ? '✅ Safe' : '❌ Below 75%';

  subjects.push({ subject, total, attended, percentage, status });
  localStorage.setItem('attendance', JSON.stringify(subjects));
  
  document.getElementById('subject').value = '';
  document.getElementById('total').value = '';
  document.getElementById('attended').value = '';
  
  displaySubjects();
}

function displaySubjects() {
  const output = document.getElementById('output');
  output.innerHTML = '';
  
  subjects.forEach((s, i) => {
    output.innerHTML += `
      <div class="subject-card">
        <h3>${s.subject}</h3>
        <p>Total: ${s.total} | Attended: ${s.attended}</p>
        <p>Percentage: ${s.percentage}%</p>
        <p>${s.status}</p>
      </div>
    `;
  });
}

// Load data on page load
displaySubjects();