import React from 'react'

export default function Alert({ alert }: { alert: any }) {
  // const capitalize = (word: string) => {
  //   const lower = word.toLowerCase();
  //   return lower.charAt(0).toUpperCase() + lower.slice(1)
  // };

  return (
    <React.Fragment>
      <div className="container my-10">
        <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
          <strong>{alert.message}</strong>
        {alert && <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>}
        </div>
      </div>
    </React.Fragment>

  )
}
