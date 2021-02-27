import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './drawer.scss';
import { getUserOrganisationsAction } from '../../actions/User';
import { getOrgGroupsAction, createOrgGroup } from '../../actions/Organisation';

const SideDrawer = () => {
  const [modal, setModal] = useState(false);
  const [display, setDisplay] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    permissions_array: [0],
  });
  const { name, role, permissions_array } = formData;

  const d = display ? '' : 'none';

  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);
  const orgGroups = useSelector((state) => state.orgGroups);
  const createGroup = useSelector((state) => state.createOrgGrp);

  const { userOrgs, loading } = userData;
  const { groups } = orgGroups;
  console.log(groups);

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

  const submitHandler = () => {
    dispatch(createOrgGroup(orgID + 1, name, role, permissions_array));
    !(name && role) ? setDisplay(true) : setDisplay(false);
    setFormData({ name: '', role: '', permissions_array: [] });
  };
  useEffect(() => {
    dispatch(getOrgGroupsAction(orgID + 1));
  }, [display]);

  const groupSwitcher = (id) => {
    const _id = groups.map((el) => el.id).indexOf(id);
    setGrpID(_id);
  };

  const GroupItem = ({ group, id }) => {
    return (
      <div className="groupItem pt-2">
        <div>
          <i className="fas fa-user"></i>
          {id === default_group.id ? (
            <>
              <p className="selectGrpItem">{group}</p>
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
            <p onClick={() => groupSwitcher(id)} className="selectGrpItem">
              {group}
            </p>
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
            {userOrgs.length ? (
              <>
                <div className="orgIcon">
                  {defaultOrg ? (
                    <img src={defaultOrg.profile_pic} alt="orgIcon" />
                  ) : (
                    <div className="spinner-border" role="status"></div>
                  )}
                </div>
                <div className="org">
                  {defaultOrg ? (
                    <h4>{defaultOrg.org_name}</h4>
                  ) : (
                    <p>no org name</p>
                  )}
                  {defaultOrg ? (
                    <p>
                      <em>"{defaultOrg.tagline}"</em>
                    </p>
                  ) : (
                    <p>no tagline</p>
                  )}
                </div>
              </>
            ) : (
              <p>no org found</p>
            )}
          </div>

          <div className="groups">
            <div className="g_head">
              {!display ? <h5>GROUPS</h5> : <h5>CREATE A NEW GROUP</h5>}
              <button
                disabled={
                  userOrgs.filter((el) => el.user_role === 'Admin').length > 0
                    ? false
                    : true
                }
                style={{ border: 'none', outline: 'none' }}
                onClick={() => setDisplay((v) => !v)}
              >
                {display ? (
                  <i
                    style={{ fontSize: 30, marginRight: 5 }}
                    class="fas fa-times"
                  ></i>
                ) : (
                  <i className="fas fa-user-plus"></i>
                )}
              </button>
            </div>
            {groups.length ? (
              <>
                <div
                  style={{ display: display && 'none' }}
                  className="groupContainer pt-3"
                >
                  {!loading ? (
                    groups.map((el) => (
                      <GroupItem key={el.id} group={el.name} id={el.id} />
                    ))
                  ) : (
                    <div className="spinner-border" role="status"></div>
                  )}
                </div>
              </>
            ) : (
              <p>no groups found</p>
            )}

            {/* dynamic rendering of component */}
            <div style={{ display: d }} className="pt-3">
              <form className="needs-validation" novalidate>
                <input
                  name="name"
                  value={name}
                  type="text"
                  placeholder="Enter group name"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="form-control"
                  required
                />
                <input
                  name="role"
                  value={role}
                  type="text"
                  placeholder="Enter role"
                  onChange={(e) =>
                    setFormData({ ...formData, role: e.target.value })
                  }
                  className="form-control mt-2"
                  required
                />
                <button
                  className="btn btn-dark form-control mt-2"
                  onClick={submitHandler}
                >
                  Create
                </button>
              </form>
            </div>
          </div>

          <div
            style={{ display: display && 'none' }}
            className="inviteSection flex-c"
          >
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
