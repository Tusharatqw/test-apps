import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import "./index.css";
import { json } from "./json";

function SurveyComponent() {
    const survey = new Model(json);
    survey.onComplete.add((result) => {
        fetch("http://54.163.6.71:3001/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(result.data),
        })
          .then((response) => response.text())
          .then((message) => alert(message))
          .catch((err) => console.error("Error:", err));
      });
    survey.onUploadFiles.add((_, options) => {
        const formData = new FormData();
        options.files.forEach((file) => {
            formData.append(file.name, file);
        });
        fetch("https://api.surveyjs.io/private/Surveys/uploadTempFiles", {
            method: "POST",
            body: formData
        })
            .then((response) => response.json())
            .then((data) => {
                options.callback(
                    options.files.map((file) => {
                        return {
                            file: file,
                            content: "https://api.surveyjs.io/private/Surveys/getTempFile?name=" + data[file.name]
                        };
                    })
                );
            })
            .catch((error) => {
                console.error("Error: ", error);
                options.callback([], ['An error occurred during file upload.']);
            });
    });
    return (<Survey model={survey} />);
}

export default SurveyComponent;
