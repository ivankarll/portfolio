/**
 * Education data
 *
 * Fields:
 *  id          - unique identifier
 *  degree      - degree title
 *  institution - school / university name
 *  location    - city, country
 *  startYear   - e.g. '2022'
 *  endYear     - e.g. '2026'  (use 'Present' if ongoing)
 *  awards      - array of { name, year, detail? } objects
 */

export const education = [
  {
    id: 1,
    degree: 'Bachelor of Science in Computer Engineering',
    institution: 'Technological University of the Philippines Visayas',
    location: 'Talisay City, Negros Occidental, Philippines',
    startYear: '2022',
    endYear: '2026',
    awards: [
      { name: '6th Place - National CpE Challenge', year: '2026', detail: 'Quiz Bowl Category' },
      { name: 'Champion - Regional CpE Challenge', year: '2026', detail: 'Quiz Bowl Category' },
      { name: '3rd Place - TUPV CpE Challenge', year: '2024', detail: 'Quiz Bowl Category' },
      { name: 'Champion - TUPV Programming Competition', year: '2023', detail: 'Python Category' },
    ],
  },
  {
    id: 2,
    degree: 'Science, Technology, Engineering, and Mathematics - Engineering/ICT (STEM-EICT Strand)',
    institution: 'Colegio San Agustin - Bacolod',
    location: 'Bacolod City, Negros Occidental, Philippines',
    startYear: '2020',
    endYear: '2022',
    awards: [
      { name: 'Gold Eagle Awardee (Rank 1)', year: 'A.Y. 2021-2022', detail: '2nd Quarter' },
      { name: 'Blue Eagle Awardee (Rank 2;  Academic Scholar)', year: 'A.Y. 2021-2022', detail: '1st Semester' },
      { name: 'Blue Eagle Awardee', year: '2020-2022', detail: 'Rank 11' },
      { name: 'Finalist - Research Fair Poster Defense', year: 'June 2022', detail: null },
      { name: '4th Place - Interschool Math and Science Quiz Bowl', year: 'April 2022', detail: null },
    ],
  },
  {
    id: 3,
    degree: 'Science, Technology, and Engineering (STE) Curriculum',
    institution: 'Hinigaran National High School',
    location: 'Hinigaran, Negros Occidental, Philippines',
    startYear: '2016',
    endYear: '2020',
    awards: [
      { name: 'With High Honors', year: '2020', detail: null },
      { name: 'Finalist - Division Scilympics', year: '2019', detail: 'Physical Science Category' },
    ],
  },
];
