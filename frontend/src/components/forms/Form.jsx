// import React from 'react'

// const Form = () => {
//   const formData = {
//     Details: [ 'Name', 'Email', 'Phone', 'Address' ],
//     Education: [ 'School', 'Degree', 'Field of Study', 'From', 'To' ],
//     Experience: [ 'Company', 'Title', 'Location', 'From', 'To' ],
//     Skills: [ 'Skill' ],
//     Projects: [ 'Project' ],
//     Certifications: [ 'Certification' ],
//     Languages: [ 'Language' ],
//     Interests: [ 'Interest' ],
//     References: [ 'Reference' ]
//   };

//   return (
//     <div>
//       {
//         Object.keys(formData).map((key, index) => {
//           return (
//             <div key={index}>
//               <h3>{key}</h3>
//               <div>
//                 {
//                   formData[key].map((value, index) => {
//                     return (
//                       <div key={index}>
//                         <label>{value}</label>
//                         <input type="text" />
//                       </div>
//                     )
//                   })
//                 }
//               </div>
//             </div>
//           )
//         })
//       }
//     </div>
//   )
// }

// export default Form;


import React, { useState } from 'react';
import { FormDisplay } from '..';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const addField = (fieldName) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: [],
    }));
  };

  const addQuestion = (field) => {
    setFormData((prevData) => {
      const updatedData = { ...prevData };
      updatedData[field] = [...(prevData[field] || []), ''];
      return updatedData;
    });
  };

  const removeQuestion = (field, questionIndex) => {
    setFormData((prevData) => {
      const updatedData = { ...prevData };
      updatedData[field].splice(questionIndex, 1);
      return updatedData;
    });
  };

  const handleSubmit = () => {
    navigate('/form-display', { state: { submittedData: formData } });
  };

  return (
    <div>
      {Object.keys(formData).map((field, fieldIndex) => (
        <div key={fieldIndex}>
          <h3>{field}</h3>
          <div>
            {formData[field].map((question, questionIndex) => (
              <div key={questionIndex}>
                <label>
                  <input
                    type="text"
                    value={question}
                    onChange={(e) => {
                      const updatedQuestion = e.target.value;
                      setFormData((prevData) => {
                        const updatedData = { ...prevData };
                        updatedData[field][questionIndex] = updatedQuestion;
                        return updatedData;
                      });
                    }}
                  />
                </label>
                <button onClick={() => removeQuestion(field, questionIndex)}>
                  Remove Question
                </button>
              </div>
            ))}
            <button onClick={() => addQuestion(field)}>Add Question</button>
          </div>
        </div>
      ))}
      <div>
        <input
          type="text"
          placeholder="Field Name"
          id="fieldNameInput"
        />
        <button onClick={() => {
          const fieldName = document.getElementById("fieldNameInput").value;
          if (fieldName) {
            addField(fieldName);
            document.getElementById("fieldNameInput").value = "";
          }
        }}>
          Add Field
        </button>
      </div>
      <button onClick={handleSubmit}>Submit</button>
      {/* <div>
        {submittedData && <FormDisplay submittedData={submittedData} />}
      </div> */}
    </div>
  );
};

export default Form;
