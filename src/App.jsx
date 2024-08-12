import React from "react";
import './index.css';


const Team = () => {
  const teamMembers = [
      {
          name: 'Edward Gilmore',
          title: 'Founder and CEO',
          img: 'https://i.ibb.co/2YMkjQG/portrait-businessman-office-2.jpg', 
          social: {
              facebook: '#',
              twitter: '#',
              linkedin: '#',
              instagram: '#'
          }
      },
      {
          name: 'Lucy Kims',
          title: 'Member Experience Manager',
          img: 'https://i.ibb.co/b1BYgvX/Screenshot-3.png',
          social: {
              facebook: '#',
              twitter: '#',
              linkedin: '#',
              instagram: '#'
          }
      },
      {
          name: 'Dan Wilson',
          title: 'Senior Community Manager',
          img: 'https://i.ibb.co/5Bz2QTQ/portrait-optimistic-businessman-formalwear.jpg', 
          social: {
              facebook: '#',
              twitter: '#',
              linkedin: '#',
              instagram: '#'
          }
      }
  ];

  return (
      <section className="team-section">
          <h2 className="team-title">Our Team</h2>
          <p className="team-description">
              We strive to do everything so that you can comfortably and productively work in our space and create amazing products and services.
          </p>
          <div className="team-members">
              {teamMembers.map((member, index) => (
                  <div className="team-member" key={index}>
                      <img src={member.img} alt={member.name} className="member-photo" />
                      <h3 className="member-name">{member.name}</h3>
                      <p className="member-title">{member.title}</p>
                      <div className="member-social">
                          <a href={member.social.facebook}><i className="fab fa-facebook"></i></a>
                          <a href={member.social.twitter}><i className="fab fa-twitter"></i></a>
                          <a href={member.social.linkedin}><i className="fab fa-linkedin"></i></a>
                          <a href={member.social.instagram}><i className="fab fa-instagram"></i></a>
                      </div>
                  </div>
              ))}
          </div>
      </section>
  );
}

export default Team;