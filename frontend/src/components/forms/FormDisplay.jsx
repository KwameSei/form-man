import React from 'react'

const FormDisplay = ({ submittedData }) => {
  return (
    <div>Submitted Data
      {
        submittedData &&
        Object.keys(submittedData).map((key, index) => {
          return (
            <div key={index}>
              <h3>{key}</h3>
              <div>
                {
                  submittedData[key].map((value, index) => {
                    return (
                      <div key={index}>
                        <label>{value}</label>
                        <input type="text" />
                      </div>
                    )
                  })
                }
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default FormDisplay;