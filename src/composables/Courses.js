import { reactive, watchEffect } from 'vue';

export default function () {
  const state = reactive({
    CardsData: {
      '1': {
        id: '1',
        dataType: 'ONLINE TRAINING',
        title: "Quantum Programming Courses",
        content: "The courses have been designed for IT people that wanted to be up-to-date and have general state-of-the-art technologies.",
        target: ["PhD students", "Professionals", "Technicians"],
        countriesText: "COUNTRIES",
        coverage: "Worldwide",
        provideText: "PROVIDED BY",
        providedBy: "Alhambra-Eidos",
        area: "Spain",
      },
      '2': {
        id: '2',
        dataType: 'COURSE',
        title: "ID Quantique winter school on quantum communications",
        content: "Annual one-week research school, taking place in Les Diablerets, Switzerland, every year for one calendar week around January 20-25th. Covers QKD, quantum communications, random number generators, very basic intro into quantum computing, industrial applications. Lectures are given by most prominent persons in the research field and industry. Includes 4 hands-on labs.",
        target: ["BSc students", "MSc students", "PhD students", "Professionals"],
        countriesText: "COUNTRIES",
        coverage: "Switzerland",
        provideText: "PROVIDED BY",
        providedBy: "ID Quantique (IDQ)",
        area: "Switzerland",
      },
      '3': {
        id: '3',
        dataType: 'PROGRAM',
        title: "Quantum Technology at RWTH Aachen University",
        content: "The program includes an area of specialization in the physics MSc program (in the future it will be offered in the electrical engineering MSc program).",
        target: ["Secondary school students", "Secondary school teachers", "Professionals"],
        countriesText: "COUNTRIES",
        coverage: "Germany",
        languagesText: "LANGUAGES",
        languages: "English",
        provideText: "PROVIDED BY",
        providedBy: "RWTH Aachen University",
        area: "Germany",
      },
      '4': {
        id: '4',
        dataType: 'ONLINE TRAINING',
        title: "Quantum Industry Placement Fellowship",
        content: "Accelerate your career in quantum technologies! Our Quantum Industry Placement Fellowship Programme brings together talented and curious quantum enthusiasts in a cohort-based environment to accelerate quantum learning and placements in startups and innovative companies for work experience.",
        target: ["MSc students", "PhD Students", "Entrepreneurs", "Managers", "Investors", "Professionals", "Technicians"],
        countriesText: "COUNTRIES",
        coverage: "United Kingdom",
        languagesText: "LANGUAGES",
        languages: "English",
        provideText: "PROVIDED BY",
        providedBy: "QURECA",
        area: "United Kingdom",
      },
      '5': {
        id: '5',
        dataType: 'TRAINING',
        title: "QWorld",
        content: "QWorld (Association) is a non-profit global organization that brings quantum computing researchers &amp; enthusiasts together. Our main goal is to popularize quantum technologies and software. Also, through education and skill development opportunities, QWorld is training the next generation of quantum scientists.",
        target: ["Primary school students", "Secondary school students", "BSc students", "MSc students", "Entrepreneurs", "Managers", "Investors", "Professionals", "Technicians"],
        countriesText: "COUNTRIES",
        coverage: "United Kingdom, Latvia, Czech Republic, Greece, Hungary, India, Mexico, Morocco, Pakistan, Poland, Romania, Russia, Slovakia, Tunisia, Turkey ",
        provideText: "PROVIDED BY",
        providedBy: "QWorld",
        area: "Latvia",
      },
      '6': {
        id: '6',
        dataType: 'Course',
        title: "Quantum-enhanced Sensing via Quantum Control (QuSCo)",
        content: "QuSCo strives to develop a best practice for PhD training in emerging quantum technologies using the example of quantum-enhanced sensing via quantum control, by providing cross-sectional and interdisciplinary training to its fellows.",
        target: ["PhD students"],
        countriesText: "COUNTRIES",
        coverage: "Austria, Denmark, France, Germany, Italy",
        languagesText: "LANGUAGES",
        languages: "English",
        provideText: "PROVIDED BY",
        providedBy: "Freie Universität Berlin",
        area: "Germany",
      },
    },
    count: 0
  });
  watchEffect(() => {
    state.count = Object.keys(state.CardsData).length;
  });
  return {
    ...state
  }
}