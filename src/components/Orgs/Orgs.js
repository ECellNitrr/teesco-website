import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUserOrgsHandler } from './actions';

export const Orgs = ({ fetchUserOrgsHandler }) => {
  useEffect(() => {
    fetchUserOrgsHandler();
  }, [fetchUserOrgsHandler]);

  return (
    <div>fetching the orgs which user was a part of loading will go here</div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  fetchUserOrgsHandler,
};

export default connect(mapStateToProps, mapDispatchToProps)(Orgs);
