const surveyJSON =
  { pages:
      [ { name:"page1",
          questions:
            [ { name: "languageChoice"
              , type: "radiogroup"
              , colCount: 4
              , choices:
                [ "C"
                , "C#"
                , "C++"
                , "Clojure"
                , "F#"
                , "Go"
                , "Haskell"
                , "Java"
                , "JavaScript"
                , "Lua"
                , "OCaml"
                , "Perl"
                , "PHP"
                , "Python"
                , "R"
                , "Ruby"
                , "Scala"
                , "Swift"
                , "TypeScript"
                ].sort()
              , isRequired: true
              , hasOther: true
              , otherText: "Other"
              , title: "Which programming did you choose for the assignment?"
              }
            ]
        }
      , { name: "page2"
        , questions:
          [ { name: "timeTaken"
            , type: "text"
            , inputType: "number"
            , value: 1
            , isRequired: true
            , title: "How many hours did you spend on the assignment?"
            }
          ]
        }
     ]
  };

// Set up survey:
const storageName = "surveyUniqueNameOrId"; // FIXME
const survey = new Survey.Model(surveyJSON);
const surveyPostEndpoint = "https://jsonapi.org/survey"

// Load from existing partial survey:
const savedData = window.localStorage.getItem(storageName) || null;
if (savedData) {
  survey.data = JSON.parse(savedData);
  if (survey.data.pageNo) survey.currentPageNo = survey.data.pageNo;
}

// Save survey on value change:
survey.onValueChanged.add((survey, options) => {
  let data = survey.data;
  data.pageNo = survey.currentPageNo;
  window.localStorage.setItem(storageName, JSON.stringify(data));
});

const postSurvey = (survey, options) => { return new Promise((resolve, reject) => {
  console.log("should send result here..");
  console.log(survey.data);
  options.showDataSaving();

  survey.type = "survey"; // set this for JSONAPI.org

  let xhr = new XMLHttpRequest();
  xhr.open("POST", surveyPostEndpoint);
  xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");


  xhr.onload = xhr.onerror = () => {
    if (xhr.status == 200 || xhr.status == 201) {
      options.showDataSavingSuccess();
      resolve();
    } else {
      options.showDataSavingError(`
        An error occurred and we could not save the results. Don't worry, your
        answers have been saved in your browser's local storage. Please try again!
      `);
      reject("error saving survey");
    }
  };
  console.log('sending...');
  xhr.send(JSON.stringify({ data: survey.data }));
})};

// Clear data on successful submission:
survey.onComplete.add((survey, options) => {
  postSurvey(survey, options).then(res => {
    console.log("survey complete, clearing saved data");
    window.localStorage.removeItem(storageName);
  }).catch(err => {
    console.log("got error");
    console.log(err);
  });
});

survey.onValidateQuestion.add((sender, options) => {
  console.log("validate being run");
  switch (options.name) {
    case "timeTaken": {
      if (options.value < 1) options.error = "Please enter a number greater than 0";
      break;
    }
    default:
  }
})

// Start vue container:
const surveyApp = new Vue(
  { el: '#surveyContainer'
  , data: { survey: survey }
  }
);
