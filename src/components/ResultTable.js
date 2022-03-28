import React, { Component } from 'react';

class ResultTable extends Component {

  state = {
    headers: ['Full name', 'Date', 'Time', 'Phone'],
    ignore_headers: ['_id'],
  }

  addTableRow = (headers, result) => {
    return (
      <tr key={result._id}>
        {headers.map((h) => {
          if(this.state.ignore_headers.includes(h)) return null
          if(h === 'Full name') return (<td>{result.fullName} {result.date} {result.time} {result.phone}</td>)
          return (<td>{result[h]}</td>)
        })}
      </tr>)
  }

  createTable = (results) => {

    let headers = this.fetchTableHeaders(results);

    return (
      <table className="table ">
        <thead>
          <tr>
            {headers.map((h) => {
              return (<th>{this.makeHeader(h)}</th>)
            })}
          </tr>
        </thead>
        <tbody>
          {results.map((result) => {
            return this.addTableRow(headers, result)
          })}
        </tbody>
      </table>
    )
  }

  fetchTableHeaders = (results) => {
    let headers = [...this.state.headers];
    results.forEach((result) => {
      Object.keys(result).forEach((r) => {
        if(!this.state.ignore_headers.includes(r) && !headers.includes(r)) {
          headers.push(r);
        }
      });
    });
    return headers
  }

  makeHeaderStr = (header_str) => {
    if(typeof header_str !== 'string') return header_str
    return (header_str.charAt(0).toUpperCase() + header_str.slice(1)).replace('_', ' ')
  }

  render() {
    return (
      <div>
        {this.props.results.length ? (
          <div className="card">
            {this.createTable(this.props.results)}
          </div>
        ) : null}
      </div>
    )
  }
}

export default ResultTable