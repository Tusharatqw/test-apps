export const json = {
  "title": "Multi-Section Survey",
  "pages": [
    {
      "name": "personal_info",
      "title": "Personal Information",
      "elements": [
        {
          "type": "text",
          "name": "firstName",
          "title": "First Name",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "lastName",
          "title": "Last Name",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "email",
          "title": "Email",
          "isRequired": true,
          "inputType": "email"
        },
        {
          "type": "text",
          "name": "phone",
          "title": "Phone Number",
          "inputType": "tel"
        }
      ]
    },
    {
      "name": "preferences",
      "title": "Preferences",
      "elements": [
        {
          "type": "radiogroup",
          "name": "ownCar",
          "title": "Do you own a car?",
          "choices": [
            "Yes",
            "No"
          ]
        },
        {
          "type": "text",
          "name": "carBrand",
          "visibleIf": "{ownCar}='Yes'",
          "title": "If Yes, what car brand?"
        },
        {
          "type": "text",
          "name": "kilometersDriven",
          "visibleIf": "{ownCar}='Yes'",
          "title": "Kilometers driven per month?"
        },
        {
          "type": "radiogroup",
          "name": "travelWork",
          "title": "Do you travel frequently for work?",
          "choices": [
            "Yes",
            "No"
          ]
        },
        {
          "type": "checkbox",
          "name": "preferredTransport",
          "visibleIf": "{travelWork}='Yes'",
          "title": "Preferred mode of transport",
          "choices": [
            "Flight",
            "Train",
            "Car",
            "Bus"
          ]
        }
      ]
    },
    {
      "name": "feedback",
      "title": "Feedback",
      "elements": [
        {
          "type": "rating",
          "name": "easySurvey",
          "title": "Survey was easy to understand"
        },
        {
          "type": "rating",
          "name": "intuitiveForm",
          "title": "Form interface was intuitive"
        },
        {
          "type": "rating",
          "name": "relevantQuestions",
          "title": "Questions were relevant"
        },
        {
          "type": "file",
          "name": "question1",
          "title": "Upload a document (optional)"
        },
        {
          "type": "comment",
          "name": "additionalFeedback",
          "title": "Any additional feedback?"
        }
      ]
    }
  ]
}