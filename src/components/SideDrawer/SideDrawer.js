import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './drawer.css';
import { getUserOrganisationsAction } from '../../actions/User';
import { getOrgGroupsAction } from '../../actions/Organisation';

const SideDrawer = () => {
  const [modal, setModal] = useState(false);

  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);
  const orgGroups = useSelector((state) => state.orgGroups);

  const { userOrgs, loading } = userData;
  const { groups } = orgGroups;

  // for defaultData
  const [orgID, setOrgID] = useState(0);
  const [grpID, setGrpID] = useState(0);

  const defaultOrg = userOrgs[orgID];
  const default_group = groups[grpID];

  useEffect(() => {
    dispatch(getUserOrganisationsAction());
  }, [dispatch]);

  useEffect(() => {
    defaultOrg && dispatch(getOrgGroupsAction(defaultOrg.id));
  }, [defaultOrg]);

  const GroupItem = ({ group }) => {
    return (
      <div className="groupItem pt-2">
        <div>
          <i className="fas fa-user"></i>
          {group === default_group.name ? (
            <>
              <p>{group}</p>
              <span className="pl-3" style={{ marginTop: '-2px' }}>
                <i
                  className="fas fa-circle"
                  style={{
                    fontSize: '12px',
                    color: 'green',
                  }}
                ></i>
              </span>
            </>
          ) : (
            <p>{group}</p>
          )}
        </div>
        <i className="fas fa-chevron-right" id="rightIcon"></i>
      </div>
    );
  };
  const SwitchModal = ({ orgs }) => {
    const orgSwitchHandler = (id) => {
      setOrgID(id - 1); // array index not org_id
      setModal(false);
    };
    return (
      <div className="insideModal">
        <h5 className="text-center text-light">Switch Organisation</h5>
        {orgs.map((el) => (
          <button onClick={() => orgSwitchHandler(el.id)}>{el.org_name}</button>
        ))}
      </div>
    );
  };
  return (
    <>
      <div id="nav-container">
        <div className="bg"></div>

        <div className="button" tabIndex="0">
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </div>

        <div id="nav-content" tabIndex="0">
          {modal && (
            <div className="switchModal">
              <SwitchModal orgs={userOrgs} />
            </div>
          )}
          <div className="orgCard flex-c">
            <div className="all">
              <button
                onClick={() => setModal((v) => !v)}
                style={{ border: 'none', outline: 'none' }}
              >
                <i className="fas fa-border-all"></i>
              </button>
            </div>
            <div className="orgIcon">
              {defaultOrg ? (
                <img src={defaultOrg.profile_pic} alt="orgIcon" />
              ) : (
                <div className="spinner-border" role="status"></div>
              )}
            </div>
            <div className="org">
              {defaultOrg ? <h4>{defaultOrg.org_name}</h4> : <p>no org name</p>}
              {defaultOrg ? (
                <p>
                  <em>"{defaultOrg.tagline}"</em>
                </p>
              ) : (
                <p>no tagline</p>
              )}
            </div>
          </div>
          <div className="groups">
            <div className="g_head">
              <h5>GROUPS</h5>
              <button style={{ border: 'none', outline: 'none' }}>
                <i className="fas fa-user-plus"></i>
              </button>
            </div>
            <div className="groupContainer pt-3">
              {!loading ? (
                groups.map((el) => <GroupItem key={el.id} group={el.name} />)
              ) : (
                <div className="spinner-border" role="status"></div>
              )}
            </div>
          </div>

          <div className="inviteSection flex-c">
            <h4>INVITE PEOPLE</h4>
            <div className="socialLinks pb-2 pt-3">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-instagram"></i>
              <i className="fas fa-envelope"></i>
              <i className="fab fa-linkedin"></i>
              <i className="fab fa-slack"></i>
            </div>
            <h5>OR</h5>
            <div className="inviteBox pt-2">
              <input
                type="text"
                placeholder="share invite link"
                id="copyInput"
              />
              <button className="copy">
                <i className="fas fa-copy"></i>
              </button>
            </div>
          </div>
          <div className="ft flex-c">
            <p>teesco.org&copy;2021</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideDrawer;
