const days = document.querySelectorAll('.head h1');
const body = document.querySelector('.body');

const schedules = {
  day1: `
    <ul>
      <li><strong>09.00 - 10.00</strong> Karşılama</li>
      <li><strong>10.00 - 10.40</strong> A Grubu Açılış Konuşması | B Grubu Fotoğraf ve Kaynaşma</li>
      <li><strong>10.40 - 11.20</strong> B Grubu Açılış Konuşması | A Grubu Fotoğraf ve Kaynaşma</li>
      <li><strong>11.20 - 12.50</strong> 1. Oturum</li>
      <li><strong>12.50 - 13.10</strong> Kahve Arası</li>
      <li><strong>13.10 - 14.10</strong> A Grubu 2. Oturum | B Grubu Öğle Arası</li>
      <li><strong>14.10 - 15.10</strong> B Grubu 2. Oturum | A Grubu Öğle Arası</li>
      <li><strong>15.10 - 15.20</strong> Kahve Arası</li>
      <li><strong>15.20 - 16.50</strong> 3. Oturum</li>
      <li><strong>16.50 - 17.00</strong> Kahve Arası</li>
      <li><strong>17.00 - 18.30</strong> Sosyalleşme Zamanı | Kahve Arası</li>
    </ul>
  `,
  day2: `
    <ul>
      <li><strong>09.00 - 09.30</strong> Komitelere Geçiş</li>
      <li><strong>09.30 - 11.00</strong> 4. Oturum</li>
      <li><strong>11.00 - 11.10</strong> Kahve Arası</li>
      <li><strong>11.10 - 12.40</strong> 5. Oturum</li>
      <li><strong>12.40 - 13.40</strong> A Grubu 6. Oturum | B Grubu Öğle Arası</li>
      <li><strong>13.40 - 14.40</strong> B Grubu 6. Oturum | A Grubu Öğle Arası</li>
      <li><strong>14.40 - 15.00</strong> Kahve Arası</li>
      <li><strong>15.00 - 16.30</strong> 7. Oturum</li>
    </ul>
  `,
  day3: `
    <ul>
    <ul>
      <li><strong>09.00 - 09.30</strong> Komitelere Geçiş</li>
      <li><strong>09.30 - 11.00</strong> 8. Oturum</li>
      <li><strong>11.00 - 11.10</strong> Kahve Arası</li>
      <li><strong>11.10 - 12.40</strong> 9. Oturum</li>
      <li><strong>12.40 - 13.40</strong> A Grubu 10. Oturum | B Grubu Öğle Arası</li>
      <li><strong>13.40 - 14.40</strong> B Grubu 10. Oturum | A Grubu Öğle Arası</li>
      <li><strong>14.40 - 15.00</strong> Kahve Arası</li>
      <li><strong>15.00 - 16.30</strong> 11. Oturum</li>
      <li><strong>16.50 - 17.50</strong> Kapanış</li>
    </ul>
  `
};

for (let day of days) {
  day.addEventListener('click', () => {
    days.forEach(d => d.style.color = '');
    day.style.color = '#03e7fc';

    const dayId = day.id;
    body.innerHTML = schedules[dayId] || '<p>No schedule available for this day.</p>';
  });
}
