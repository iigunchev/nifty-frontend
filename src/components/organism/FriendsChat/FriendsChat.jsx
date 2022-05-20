import React from 'react';
// banner image
import chatBanner from '../../../assets/img/chatBanner.png';
// styles
import './FriendsChat.scss';

function FriendsChat() {
  return (
    <section className="chatSection">
      <div className="bannerTitle">
        <h2>Chat with your friends</h2>
      </div>
      <div className="bannerDescription">
        <p>You can follow your friends and see what they&apos;re listening!</p>
        <p>Coming soon...</p>
        <img className="bannerImg" src={chatBanner} alt="banner chat" />
      </div>
    </section>
  );
}

export default FriendsChat;
