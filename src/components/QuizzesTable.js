import React from 'react'

export default function QuizzesTable() {
    return (
        <>
          <div className="row">
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-body">
                    {/* title */}
                    <div className="d-md-flex align-items-center">
                      <div>
                        <h4 className="card-title">Top Selling Products</h4>
                        <p className="card-subtitle">
                          Overview of Top Selling Items
                        </p>
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
                          <th className="border-top-0">Products</th>
                          <th className="border-top-0">License</th>
                          <th className="border-top-0">Support Agent</th>
                          <th className="border-top-0">Technology</th>
                          <th className="border-top-0">Tickets</th>
                          <th className="border-top-0">Sales</th>
                          <th className="border-top-0">Earnings</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="m-r-10">
                                <a className="btn btn-circle btn-info text-white">
                                  EA
                                </a>
                              </div>
                              <div className>
                                <h4 className="m-b-0 font-16">Elite Admin</h4>
                              </div>
                            </div>
                          </td>
                          <td>Single Use</td>
                          <td>John Doe</td>
                          <td>
                            <label className="label label-danger">
                              Angular
                            </label>
                          </td>
                          <td>46</td>
                          <td>356</td>
                          <td>
                            <h5 className="m-b-0">$2850.06</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="m-r-10">
                                <a className="btn btn-circle btn-warning text-white">
                                  MA
                                </a>
                              </div>
                              <div className>
                                <h4 className="m-b-0 font-16">Monster Admin</h4>
                              </div>
                            </div>
                          </td>
                          <td>Single Use</td>
                          <td>Venessa Fern</td>
                          <td>
                            <label className="label label-info">Vue Js</label>
                          </td>
                          <td>46</td>
                          <td>356</td>
                          <td>
                            <h5 className="m-b-0">$2850.06</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="m-r-10">
                                <a className="btn btn-circle btn-success text-white">
                                  MP
                                </a>
                              </div>
                              <div className>
                                <h4 className="m-b-0 font-16">
                                  Material Pro Admin
                                </h4>
                              </div>
                            </div>
                          </td>
                          <td>Single Use</td>
                          <td>John Doe</td>
                          <td>
                            <label className="label label-success">
                              Bootstrap
                            </label>
                          </td>
                          <td>46</td>
                          <td>356</td>
                          <td>
                            <h5 className="m-b-0">$2850.06</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="m-r-10">
                                <a className="btn btn-circle btn-primary text-white">
                                  AA
                                </a>
                              </div>
                              <div className>
                                <h4 className="m-b-0 font-16">Ample Admin</h4>
                              </div>
                            </div>
                          </td>
                          <td>Single Use</td>
                          <td>John Doe</td>
                          <td>
                            <label className="label label-purple">React</label>
                          </td>
                          <td>46</td>
                          <td>356</td>
                          <td>
                            <h5 className="m-b-0">$2850.06</h5>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>  
        </>
    )
}
