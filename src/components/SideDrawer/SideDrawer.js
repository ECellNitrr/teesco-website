import React from 'react';
import './drawer.css';
import { Link, NavLink } from 'react-router-dom';
import './drawer.css'

const SideDrawer = (props) => {
  const data = {
    org1: {
      info: {
        name: 'E-Cell NITRR',
        tagline: 'Non-Profit Organization',
        about: '',
      },
      groups: [
        'Admins',
        'Public Relations',
        'Task Regulators',
        'Executives',
        'Managers',
        'Volunteers',
      ],
      user_permissions: {
        canCreate: true,
      },
    },
    org2: {
      info: {
        name: 'i-Cell NITRR',
        tagline: 'lorem epsum sit dolor',
        about: '',
      },
      groups: ['Public Relations', 'Executives', 'Volunteers'],
      user_permissions: {
        canCreate: false,
      },
    },
  };

  const { org1, org2 } = data;
  const default_org = org1;
  const default_group = org1.groups[1];
  const GroupItem = ({ group }) => {
    return (
      <div className="groupItem pt-2">
        <div>
          <i className="fas fa-user"></i>
          {group === default_group ? (
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
  return (
    <div>
      <div id="nav-container">
        <div class="bg"></div>

        <div class="button" tabIndex="0">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </div>

        <div id="nav-content" tabIndex="0">
          <div className="orgCard flex-c">
            <div className="all">
              <i className="fas fa-border-all"></i>
            </div>
            <div className="orgIcon">
              <img src="https://placekitten.com/200/300" alt="orgIcon" />
            </div>
            <div className="org">
              <h4>{org1.info.name}</h4>
              <p>
                <em>"{org1.info.tagline}"</em>
              </p>
            </div>
          </div>
          <div className="groups">
            <div className="g_head">
              <h5>GROUPS</h5>
              <i className="fas fa-user-plus"></i>
            </div>
            <div className="groupContainer pt-4">
              {org1.groups.map((el) => (
                <GroupItem group={el} />
              ))}
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
    </div>
  );
};

export default SideDrawer;
