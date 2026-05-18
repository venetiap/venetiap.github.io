// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather.html";
            },},{id: "books-test",
          title: 'Test',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/test.html";
            },},{id: "news-sharp-was-presented-at-vldb-2025-in-london",
          title: 'ShaRP was presented at VLDB 2025 in London!',
          description: "",
          section: "News",},{id: "news-explainability-cards-and-a-new-explanation-lifecycle-in-the-position-we-need-to-explain-our-explanations-we-take-a-deep-look-into-how-shapley-value-explanations-are-currently-produced-discuss-the-pitfalls-of-the-current-approaches-and-introduce-several-new-concepts-to-address-the-issue-of-having-multiple-concurrent-valid-explanations-for-the-same-model-and-instance-we-discuss-explanation-multiplicity-1-and-show-how-it-can-be-expresed-as-a-parmetrization-problem-we-how-it-poses-both-a-threat-and-an-opportunity-for-explainability-we-issue-a-call-to-action-and-introduce-a-new-explanation-lifecycle-a-novel-unified-shapley-value-definition-and-shapley-value-explainability-cards-1",
          title: 'Explainability cards and a new explanation lifecycle. In the position “We need to...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%76%65%6E%65%74%69%61@%6E%79%75.%65%64%75", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=psDBoCwAAAAJ", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/venetia-pliatsika-046a8879", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
