import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';

export const Dashboard = (props) => {
  const params = useParams();

  const userOrgs = useSelector((state) => state.user);

  return <div>Dashboard</div>;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
