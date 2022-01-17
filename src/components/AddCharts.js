import React from 'react'

export default function AddCharts() {
    return (
        <>
         <div className="row">
              {/* column */}
              <div className="col-lg-6">
                <div className="card card-hover">
                  <div className="card-body">
                    <h4 className="card-title">Recent Comments</h4>
                    <table className="table table-striped table-hover table-borderless table-vcenter font-size-sm">
                      <thead>
                        <tr className="text-uppercase">
                          <th className="font-w700">Product</th>
                          <th className="d-none d-sm-table-cell font-w700">
                            Date
                          </th>
                          <th className="font-w700">State</th>
                          <th
                            className="d-none d-sm-table-cell font-w700 text-right"
                            style={{ width: 120 }}
                          >
                            Price
                          </th>
                          <th
                            className="font-w700 text-center"
                            style={{ width: 60 }}
                          />
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <span className="font-w600">iPhone X</span>
                          </td>
                          <td className="d-none d-sm-table-cell">
                            <span className="font-size-sm text-muted">
                              today
                            </span>
                          </td>
                          <td>
                            <span className="font-w600 text-warning">
                              Pending..
                            </span>
                          </td>
                          <td className="d-none d-sm-table-cell text-right">
                            $999,99
                          </td>
                          <td className="text-center">
                            <a
                              href="javascript:void(0)"
                              data-toggle="tooltip"
                              data-placement="left"
                              title
                              className="js-tooltip-enabled"
                              data-original-title="Manage"
                            >
                              <i className="fa fa-fw fa-pencil-alt" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="font-w600">MacBook Pro 15"</span>
                          </td>
                          <td className="d-none d-sm-table-cell">
                            <span className="font-size-sm text-muted">
                              today
                            </span>
                          </td>
                          <td>
                            <span className="font-w600 text-warning">
                              Pending..
                            </span>
                          </td>
                          <td className="d-none d-sm-table-cell text-right">
                            $2.299,00
                          </td>
                          <td className="text-center">
                            <a
                              href="javascript:void(0)"
                              data-toggle="tooltip"
                              data-placement="left"
                              title
                              className="js-tooltip-enabled"
                              data-original-title="Manage"
                            >
                              <i className="fa fa-fw fa-pencil-alt" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="font-w600">
                              Nvidia GTX 1080 Ti
                            </span>
                          </td>
                          <td className="d-none d-sm-table-cell">
                            <span className="font-size-sm text-muted">
                              today
                            </span>
                          </td>
                          <td>
                            <span className="font-w600 text-warning">
                              Pending..
                            </span>
                          </td>
                          <td className="d-none d-sm-table-cell text-right">
                            $1200,00
                          </td>
                          <td className="text-center">
                            <a
                              href="javascript:void(0)"
                              data-toggle="tooltip"
                              data-placement="left"
                              title
                              className="js-tooltip-enabled"
                              data-original-title="Manage"
                            >
                              <i className="fa fa-fw fa-pencil-alt" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="font-w600">Playstation 4 Pro</span>
                          </td>
                          <td className="d-none d-sm-table-cell">
                            <span className="font-size-sm text-muted">
                              today
                            </span>
                          </td>
                          <td>
                            <span className="font-w600 text-danger">
                              Cancelled
                            </span>
                          </td>
                          <td className="d-none d-sm-table-cell text-right">
                            $399,00
                          </td>
                          <td className="text-center">
                            <a
                              href="javascript:void(0)"
                              data-toggle="tooltip"
                              data-placement="left"
                              title
                              className="js-tooltip-enabled"
                              data-original-title="Manage"
                            >
                              <i className="fa fa-fw fa-pencil-alt" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="font-w600">Nintendo Switch</span>
                          </td>
                          <td className="d-none d-sm-table-cell">
                            <span className="font-size-sm text-muted">
                              yesterday
                            </span>
                          </td>
                          <td>
                            <span className="font-w600 text-success">
                              Completed
                            </span>
                          </td>
                          <td className="d-none d-sm-table-cell text-right">
                            $349,00
                          </td>
                          <td className="text-center">
                            <a
                              href="javascript:void(0)"
                              data-toggle="tooltip"
                              data-placement="left"
                              title
                              className="js-tooltip-enabled"
                              data-original-title="Manage"
                            >
                              <i className="fa fa-fw fa-pencil-alt" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="font-w600">iPhone X</span>
                          </td>
                          <td className="d-none d-sm-table-cell">
                            <span className="font-size-sm text-muted">
                              yesterday
                            </span>
                          </td>
                          <td>
                            <span className="font-w600 text-success">
                              Completed
                            </span>
                          </td>
                          <td className="d-none d-sm-table-cell text-right">
                            $999,00
                          </td>
                          <td className="text-center">
                            <a
                              href="javascript:void(0)"
                              data-toggle="tooltip"
                              data-placement="left"
                              title
                              className="js-tooltip-enabled"
                              data-original-title="Manage"
                            >
                              <i className="fa fa-fw fa-pencil-alt" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="font-w600">Echo Dot</span>
                          </td>
                          <td className="d-none d-sm-table-cell">
                            <span className="font-size-sm text-muted">
                              yesterday
                            </span>
                          </td>
                          <td>
                            <span className="font-w600 text-success">
                              Completed
                            </span>
                          </td>
                          <td className="d-none d-sm-table-cell text-right">
                            $39,99
                          </td>
                          <td className="text-center">
                            <a
                              href="javascript:void(0)"
                              data-toggle="tooltip"
                              data-placement="left"
                              title
                              className="js-tooltip-enabled"
                              data-original-title="Manage"
                            >
                              <i className="fa fa-fw fa-pencil-alt" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="font-w600">Xbox One X</span>
                          </td>
                          <td className="d-none d-sm-table-cell">
                            <span className="font-size-sm text-muted">
                              yesterday
                            </span>
                          </td>
                          <td>
                            <span className="font-w600 text-success">
                              Completed
                            </span>
                          </td>
                          <td className="d-none d-sm-table-cell text-right">
                            $499,00
                          </td>
                          <td className="text-center">
                            <a
                              href="javascript:void(0)"
                              data-toggle="tooltip"
                              data-placement="left"
                              title
                              className="js-tooltip-enabled"
                              data-original-title="Manage"
                            >
                              <i className="fa fa-fw fa-pencil-alt" />
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              {/* column */}
              <div className="col-lg-6">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">File Tree</h4>
                    <div className="tree">
                      <ul>
                        <li>
                          <i className="fa fa-folder-open" /> Project
                          <ul>
                            <li>
                              <i className="fa fa-folder-open" /> Opened Folder{" "}
                              <span>- 15kb</span>
                              <ul>
                                <li>
                                  <i className="fa fa-folder-open" /> css
                                  <ul>
                                    <li>
                                      <i className="fa fa-code" /> CSS Files{" "}
                                      <span>- 3kb</span>
                                    </li>
                                  </ul>
                                </li>
                                <li>
                                  <i className="fa fa-folder" /> Folder close{" "}
                                  <span>- 10kb</span>
                                </li>
                                <li>
                                  <i className="fab fa-html5" /> index.html
                                </li>
                                <li>
                                  <i className="fa fa-picture-o" /> favicon.ico
                                </li>
                              </ul>
                            </li>
                            <li>
                              <i className="fa fa-folder" /> Folder close{" "}
                              <span>- 420kb</span>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* column */}
              <div className="col-lg-6">
                <div className="card has-shadow">
                  <div className="card-body border-top">
                    <h4 className="card-title">Stocks</h4>
                    <table className="table mb-0">
                      <tbody>
                        <tr>
                          <td>APPL</td>
                          <td>$ 9,500</td>
                          <td className="color-green">+ 458</td>
                        </tr>
                        <tr>
                          <td>GOOG</td>
                          <td>$ 15,425</td>
                          <td className="color-red">- 1,632</td>
                        </tr>
                        <tr>
                          <td>AMD</td>
                          <td>$ 11,540</td>
                          <td className="color-green">+ 8,326</td>
                        </tr>
                        <tr>
                          <td>HGM</td>
                          <td>$ 15,855</td>
                          <td className="color-green">+ 11,326</td>
                        </tr>
                        <tr>
                          <td>MKR</td>
                          <td>$ 18,500</td>
                          <td className="color-red">- 6,586</td>
                        </tr>
                        <tr>
                          <td>APPL</td>
                          <td>$ 9,500</td>
                          <td className="color-green">+ 458</td>
                        </tr>
                        <tr>
                          <td>GOOG</td>
                          <td>$ 15,425</td>
                          <td className="color-red">- 1,632</td>
                        </tr>
                        <tr>
                          <td>AMD</td>
                          <td>$ 11,540</td>
                          <td className="color-green">+ 8,326</td>
                        </tr>
                        <tr>
                          <td>HGM</td>
                          <td>$ 15,855</td>
                          <td className="color-green">+ 11,326</td>
                        </tr>
                        <tr>
                          <td>MKR</td>
                          <td>$ 18,500</td>
                          <td className="color-red">- 6,586</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              {/* column */}
              <div className="col-lg-6">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Recent Comments</h4>
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Image</th>
                          <th>Product</th>
                          <th>Customer</th>
                          <th>Purchased On</th>
                          <th>Status</th>
                          <th>Tracking No#</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <img
                              src="https://bootadmin.org/images/icons/lulu/Desktop.png"
                              style={{ width: 50 }}
                              alt="iMac"
                            />
                          </td>
                          <td>iMac</td>
                          <td>Russell</td>
                          <td>22/08/2018</td>
                          <td>
                            <span className="badge badge-success font-weight-100">
                              Paid
                            </span>
                          </td>
                          <td>#98BC85SD84</td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="https://bootadmin.org/images/icons/lulu/Mobile.png"
                              style={{ width: 50 }}
                              alt="iPhone"
                            />
                          </td>
                          <td>iPhone</td>
                          <td>Carol</td>
                          <td>15/07/2018</td>
                          <td>
                            <span className="badge badge-warning font-weight-100">
                              Pending
                            </span>
                          </td>
                          <td>#98SA3C9SC</td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="https://bootadmin.org/images/icons/lulu/Clock.png"
                              style={{ width: 50 }}
                              alt="apple_watch"
                            />
                          </td>
                          <td>Apple Watch</td>
                          <td>Austin Pena</td>
                          <td>10/07/2018</td>
                          <td>
                            <span className="badge badge-success font-weight-100">
                              Paid
                            </span>
                          </td>
                          <td>#98BC85SD84</td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="https://bootadmin.org/images/icons/lulu/Headphones.png"
                              style={{ width: 50 }}
                              alt="mac_mouse"
                            />
                          </td>
                          <td>Headphones</td>
                          <td>Randy</td>
                          <td>22/04/2018</td>
                          <td>
                            <span className="badge badge-default font-weight-100">
                              Failed
                            </span>
                          </td>
                          <td>#98SA3C9SC</td>
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
