import React, { Component } from 'react';
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import {
  Row, Col, Grid, FormGroup, FormControl, ControlLabel, Table
 } from "react-bootstrap";
import "../Styles/Home.css";
import { CardImg } from 'reactstrap';

const getAllTextbooks = gql` 
  {
    getTextbooks {
      id
      courseCode
    }
  }
`;

class HomePage extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      searchField : ""
    }
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  
  render() {
    const {data: {loading, getTextbooks}} = this.props;
    if (loading) {
      return null;
    }
    return (
      <div>
        
        <Grid className="Grid-Top">
          <Row className="show-grid">
            <Col xs={12} md={8}>
              <h3>Welcome to Textbook Trader</h3>
            </Col>
            <Col xs={6} md={4}>
            <form>
              <FormGroup>
                <ControlLabel>Search a Course Code</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.value}
                  placeholder="CIS*2750"
                  onChange={this.handleChange}
                />
              </FormGroup>
            </form>
            </Col>
          </Row>
        </Grid>
        
        <Table responsive className="Table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Coure Code</th>
              <th>Price</th>
              <th>Textbook Name</th>
            </tr>
          </thead>
          <tbody>

            {getTextbooks.map(textbook => (
           
              <tr key={`${textbook.id}--course-code`}>
                <td><CardImg top width="50%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" /></td>
                <td>{textbook.courseCode}</td> 
                <td>Price Goes Here</td>
                <td>ID: {textbook.id}</td>
              </tr>
              
            ))}
          </tbody>
        </Table>

      </div>
    );
  }
}

export default graphql(getAllTextbooks)(HomePage);
