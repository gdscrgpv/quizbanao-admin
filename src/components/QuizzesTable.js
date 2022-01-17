import React from 'react'

export default function QuizzesTable(props) {
  console.log(props.quizzes);
    return (
        <>
          <div className="row">
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-body">
                    {/* title */}
                    <div className="d-md-flex align-items-center">
                      <div>
                        <h3 className="card-title">Quizzes</h3>
                      </div>
                      <div className="ml-auto">
                        <div className="dl">
                          <select className="custom-select">
                            <option value={0} selected>
                              Monthly
                            </option>
                            <option value={1}>Daily</option>
                            <option value={2}>Weekly</option>
                            <option value={3}>Yearly</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    {/* title */}
                  </div>
                  <div className="table-responsive">
                    <table className="table v-middle">
                      <thead>
                        <tr className="bg-light">
                          <th className="border-top-0">Sno.</th>
                          <th className="border-top-0">ID</th>
                          <th className="border-top-0">Active</th>
                          <th className="border-top-0">Actions</th>
                        </tr>
                      </thead>
                      <tbody>

                       

                      {
                        props.quizzes.map((quiz,index)=>{
                          return (
                            <>
                             <tr>
                          <td>
                            
                            {index+1}
                          </td>
                          <td>{quiz.id}</td>
                          <td>{quiz.active ? "Active" : "InActive"}</td>
                          <td>
                            <a href="#" className="btn btn-outline-primary">
                              <i className="mdi mdi-eye" />
                            </a>
                            <a href="#" className="btn btn-outline-success">
                              <i className="mdi mdi-pencil" />
                            </a>
                            <a href="#" className="btn btn-outline-danger">
                              <i className="mdi mdi-trash-can" />
                            </a>
                          </td>
                        </tr>
                            </>
                          )
                        }
                        )
                      }
                        
                      

                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>  
        </>
    )
}
